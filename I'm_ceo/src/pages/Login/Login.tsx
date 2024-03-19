const Login = () => {
  return (
    <main className="flexCenterColumn h-screen font-noto">
      <form
        className="flexCenterColumn gap-4 py-6 px-8 w-[320px] rounded-2xl bg-slate-50 shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flexCenterColumn">
          <span className="desc2 mt-5">사장과 사장을 잇다</span>
          <h1 className="font-dongle text-7xl font-bold text-main h-fit">
            ㅇㅆㅇ
          </h1>
        </div>
        <input
          className="desc3 p-2 h-8 bg-transparent border-dashed border-b-2 w-full focus:outline-none focus:border-main"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        <input
          className="desc3 p-2 h-8 bg-transparent border-dashed border-b-2 w-full focus:outline-none focus:border-main"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <button
          className="mt-4 py-2 px-3 w-full rounded-2xl buttonText bg-[#f7a46d] text-white hover:bg-main"
          onClick={() => console.log("로긘")}
        >
          로그인
        </button>
        <button className="py-2 px-3 w-full rounded-2xl buttonText bg-white border-2 border-main text-main">
          회원가입
        </button>
      </form>
    </main>
  );
};

export default Login;
