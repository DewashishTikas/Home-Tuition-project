import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap"; 

export default function LoadingPage() {
  const container = useRef();  
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();

  useGSAP(
    () => {
      gsap.to([el1.current, el2.current, el3.current], {
        scale: 1.35,
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
        duration: 0.5,
        ease: "power1.inOut",
      });
    },
    { scope: container } 
  );

  return (
    <div
      ref={container}
      className="flex items-center justify-center gap-2 max-h-full"
    >
      <div ref={el1} className="bg-gray-400 h-4 w-4 rounded-full "></div>
      <div ref={el2} className="bg-gray-400 h-4 w-4 rounded-full mx-5"></div>
      <div ref={el3} className="bg-gray-400 h-4 w-4 rounded-full"></div>
    </div>
  );
}
