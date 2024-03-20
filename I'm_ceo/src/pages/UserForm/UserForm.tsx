import { ChangeEvent, useState } from "react";
import { usePostSignUp } from "@_hook/useHandleUser";

import { Logo } from "@_component/UI";
import { Input, Radio } from "@_component/Action";

import { USER_INFO, emailValid, passwordValid } from "@_context/userInfo";

const UserForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [userInfo, setUserInfo] = useState(USER_INFO);
  const { mutate, isPending } = usePostSignUp();

  const { email, password, type } = userInfo;
  const validList = {
    email: emailValid.test(email),
    password: passwordValid.test(password),
  };
  const isAllValid = Object.values(validList).every((el) => el);

  const handleUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const changeForm = () => {
    setIsSignIn((prev) => !prev);
    setUserInfo(USER_INFO);
  };

  const signUp = () => {
    if (isAllValid) {
      mutate(userInfo);
    }
  };

  return (
    <main className="flexCenterColumn h-screen font-noto">
      <form
        className={`flexCenterColumn gap-4 py-6 px-8 w-[320px] rounded-2xl bg-slate-50 shadow-xl transition ease-in-out duration-500 ${isSignIn ? "[transform:rotateY(0deg)]" : "horizonRotate"}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flexCenterColumn">
          <span className="desc2 mt-5">사장과 사장을 잇다</span>
          <Logo />
        </div>
        <Input style="userInfo" name="email" handleInput={handleUserInfo} />
        <Input style="userInfo" name="password" handleInput={handleUserInfo} />
        {!isSignIn && (
          <Radio
            status="signup"
            checkValue={type}
            handleRadio={handleUserInfo}
          />
        )}
        <button
          className="mt-4 py-2 px-3 w-full rounded-2xl buttonText text-white transition-all bg-main disabled:bg-disableMain"
          disabled={!isAllValid}
          onClick={isSignIn ? () => {} : signUp}
        >
          {isSignIn ? "로그인" : "회원가입"}
        </button>
        <button
          className="py-2 px-3 w-full rounded-2xl buttonText bg-white border-2 border-main text-main"
          onClick={changeForm}
        >
          {isSignIn ? "회원가입 하러 갈래요" : "로그인 하러 갈래요"}
        </button>
      </form>
    </main>
  );
};

export default UserForm;
