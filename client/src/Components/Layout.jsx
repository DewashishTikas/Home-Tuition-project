import { lazy, Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router';
import Header from "./Header";
import LoadingPage from "./LoadingPage";
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
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <LoadingPage />
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <LoadingPage />
              </div>
            }
          >
            {<Outlet context={{ setCurrentRef }} />}
          </Suspense>
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

export default Layout