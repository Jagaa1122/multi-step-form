import Input from "@/components/Input";

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
          <Input label="First name" placeholder="Your first name" />
          <Input label="Last name" placeholder="Your last name" />
          <Input label="User name" placeholder="Your username" />
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
