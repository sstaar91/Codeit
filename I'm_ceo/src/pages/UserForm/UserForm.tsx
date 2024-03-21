import { ChangeEvent, useState } from "react";
import { usePostSignIn, usePostSignUp } from "@_hook/useHandleUser";

import { Logo } from "@_component/UI";
import { Button, Input, Radio } from "@_component/Action";
import { ModalLayout } from "@_component/Modal";

import { USER_INFO } from "@_context/userInfo";

const UserForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [userInfo, setUserInfo] = useState(USER_INFO);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleSignUp } = usePostSignUp(changeForm);
  const { handleSignIn } = usePostSignIn(handleModal);

  const { email, password, type } = userInfo;
  const signinValid = email && password;
  const signupValid = signinValid && type;

  const handleUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  function changeForm() {
    setIsSignIn((prev) => !prev);
    setUserInfo(USER_INFO);
  }

  const sign = () => {
    isSignIn ? handleSignIn({ email, password }) : handleSignUp(userInfo);
  };

  function handleModal() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <main className="flexCenterColumn h-screen font-noto">
      <form
        className={`flexCenterColumn gap-4 py-6 px-8 w-[320px] rounded-2xl bg-slate-50 shadow-xl ${isSignIn ? "resetHorizonRotate" : "horizonRotate"}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flexCenterColumn">
          <span className="desc2 mt-5">사장과 사장을 잇다</span>
          <Logo />
        </div>
        <Input
          style="userInfo"
          name="email"
          value={email}
          handleInput={handleUserInfo}
        />
        <Input
          style="userInfo"
          name="password"
          value={password}
          handleInput={handleUserInfo}
        />
        {!isSignIn && (
          <Radio
            status="signup"
            checkValue={type}
            handleRadio={handleUserInfo}
          />
        )}
        <Button
          type="confirm"
          addStyle="mt-8"
          disabled={isSignIn ? !signinValid : !signupValid}
          clickAction={sign}
        >
          {isSignIn ? "로그인" : "회원가입"}
        </Button>
        <Button type="cancle" clickAction={changeForm}>
          {isSignIn ? "회원가입 하러 갈래요" : "로그인 하러 갈래요"}
        </Button>
      </form>
      <ModalLayout
        type="signin"
        status={isModalOpen}
        handleModal={handleModal}
      />
    </main>
  );
};

export default UserForm;
