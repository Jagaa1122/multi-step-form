import Input from "@/components/Input";
import Buttons from "@/components/Buttons";
export default function Home() {
  return (
   
      <div className="flex bg-[#ffffff] w-[480px] h-[655px] p-[32px] flex-col">
        <img src="Main 1.png" width="60px" alt="" />
        <h1 className="text-[#202124] font-bold text-[26px]">Join Us! 😎</h1>
        <p className="text-[#8E8E8E] mb-5">
          Please provide all current information accurately.
        </p>
        <div className="flex flex-col items-start gap-7 w-[416px]">
          <Input label="First name" placeholder="Your first name" errortext="First name cannot contain special characters or numbers." />
          <Input label="Last name" placeholder="Your last name" errortext="Last name cannot contain special characters or numbers." />
          <Input label="User name" placeholder="Your username" errortext="This username is already taken. Please choose another one." />
          
        </div>
        <div className="mt-auto text-center">
          <Buttons title="Continue 1/3"/></div>
      </div>
    
  );
}
