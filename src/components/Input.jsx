export default function Input({ label, placeholder }) {
  const error = null;
  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
      <p className="text-[#334155] text-[14px] font-semibold">
        {label} <span className="text-[#e14942]">*</span>
      </p>
      <input
        className={`flex p-3 items-center self-stretch rounded-lg border-[1px] border-solid border-[#8b8e95] focus:outline-none focus:border-[#0ca5e9] ${
          error ? "border-[#e14942]" : "focus:border-[#0ca5e9]"
        } `}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
