export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-[#ffffff] w-[480px] h-[655px] p-[32px] justify-between">
        <img src="Main 1.png" alt="" />
        <h1 className="text-[#202124] font-bold text-[26px]">Join Us! 😎</h1>
        <p className="text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
        <div className="flex flex-col items-start gap-7 w-[416px]">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="text-[#334155] text-[14px] font-semibold">
              First name
            </p>
            <input
              className="flex p-3 items-center self-stretch rounded-lg border-[1px] border-solid border-[#0ca5e9] "
              type="text"
              placeholder="placeholder"
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
