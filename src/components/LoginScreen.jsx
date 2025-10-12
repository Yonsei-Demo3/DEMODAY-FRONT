import React from "react";

export default function LoginScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white mx-auto relative font-[Pretendard]">
      {/* 로고 */}
      <img
        src="/icons/logo.png"
        alt="Logo"
        className="w-[2.5rem] h-[4.5rem] mb-[1.5rem] mt-[5.6rem]"
      />

      {/* 입력 폼 */}
      <div className="w-[20.4rem] flex flex-col gap-[1.25rem]">
        <input
          type="email"
          placeholder="이메일을 입력"
          className="w-[20.4rem] h-[3.25rem] border border-[#E0E0E0] rounded-[0.5rem] px-[1rem] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA502E]"
        />
        <input
          type="password"
          placeholder="비밀번호를 입력"
          className="w-[20.4rem] h-[3.25rem] border border-[#E0E0E0] rounded-[0.5rem] px-[1rem] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA502E]"
        />

        {/* 로그인 버튼 */}
        <button
          className="w-[20.4rem] h-[3.25rem] bg-[#FA502E] text-white text-[1rem] leading-[2.25rem] rounded-[0.5rem] px-[1rem] py-[0.5rem] mt-[2rem] hover:opacity-90 focus:outline-none focus:ring-none transition"
        >
          로그인
        </button>
      </div>

      {/* 하단 링크 (회원가입/아이디 찾기) */}
      <div className="flex items-center justify-end gap-[0.375rem] mt-[0.75rem] text-sm text-gray-500 w-full pr-[1.5rem]">
        <a
          href="/signup"
          className="hover:text-[#FA502E] no-underline"
          style={{ color: '#B5BBC1' }}
        >
          회원가입
        </a>
        <span className="text-[#B5BBC1]">|</span>
        <a
          href="/find-id-pw"
          className="hover:text-[#FA502E] no-underline"
          style={{ color: '#B5BBC1' }}
        >
          ID/PW 찾기
        </a>
      </div>

      {/* SNS 로그인 구분선 및 버튼 (회원가입 바로 아래에 배치) */}
      <div className="flex flex-col items-center w-full mt-[1rem]">
        {/* 상단 구분선 */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[6.25rem] h-[0.0625rem] bg-gray-300"></div>
        </div>
        <div className="text-sm text-[#B5BBC1] mb-[1rem]">SNS 로그인</div>

        {/* SNS 로그인 아이콘들 */}
        <div className="flex gap-[1.5rem] mb-[1rem]">
          <img
            src="/icons/naver.png"
            alt="Naver Login"
            className="w-[2.5rem] h-[2.5rem]"
          />
          <img
            src="/icons/kakao.png"
            alt="Kakao Login"
            className="w-[2.5rem] h-[2.5rem]"
          />
        </div>

        {/* 하단 구분선 */}
        <div className="w-full flex justify-center items-center mt-[1rem]">
          <div className="w-[6.25rem] h-[0.0625rem] bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
