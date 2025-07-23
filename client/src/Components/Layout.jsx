import { lazy, Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router';
import Header from "./Header";
const Footer = lazy(()=> import('./Footer'))


const Layout = () => {
  const [currentRef, setCurrentRef] = useState();
  const path = useLocation()
        const [Ypos, setYpos] = useState(null);
        window.addEventListener("scroll", () => {
          if (path.pathname === "/" && currentRef) {
            setYpos(currentRef.getBoundingClientRect().top + window.scrollY);
          }
        });
  return (
    <>
      <Header Ypos={Ypos} />
      <main className="overflow-hidden">
        <Suspense>{<Outlet context={{ setCurrentRef }} />}</Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

export default Layout