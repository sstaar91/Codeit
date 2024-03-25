import { useEffect, useState } from "react";
import { Icon, Logo } from "@_component/UI";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [curWindowSize, setCurWindowSize] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurWindowSize(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => setCurWindowSize(window.innerWidth));
    };
  }, [curWindowSize]);

  if (location.pathname === "sign") return null;

  return (
    <nav className="fixed top-0 left-0 w-full h-[72px] bg-white border-b">
      <div className="grid grid-cols-[75px_1fr_150px] sm:grid-cols-[75px_1fr_70px] place-items-center gap-4 max-w-[1280px] m-[0_auto] py-4 px-6">
        <Logo type="nav" />
        <input placeholder="검색" className="w-full h-full py-2 px-3 rounded-2xl bg-slate-200 sm:text-sm " />
        {curWindowSize > 475 ? (
          <ul className="flex items-center gap-2 md:text-sm sm:text-sm cursor-pointer">
            <li>내 가게</li>
            <li>로그인</li>
            <li>알림</li>
          </ul>
        ) : (
          <div className="relative">
            <Icon type="menu" size="w-[24px] h-[24px]" clickAction={() => setIsMenuOpen((prev) => !prev)} />
            {isMenuOpen && (
              <div className="fixed top-0 right-0 w-full h-screen" onClick={() => setIsMenuOpen((prev) => !prev)}>
                <ul className="flexCenterColumn gap-2 absolute top-3 right-3 py-2 px-3 w-[120px] rounded-2xl bg-slate-50 shadow-xl cursor-pointer">
                  <li className="hover:text-main">내 가게</li>
                  <li>로그인</li>
                  <li>알림</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
