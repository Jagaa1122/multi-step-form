export default function Input({
  label,
  placeholder,
  errortext,
  name,
  onChange,
}) {
  // const error = false;
  // let errormessage = null;
  // if (error) {
  //   errormessage = <div className="text-[#e14942]">{errortext}</div>;
  // }
  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
      <p className="text-[#334155] text-[14px] font-semibold">
        {label} <span className="text-[#e14942]">*</span>
      </p>
      <input
        onChange={onChange}
        name={name}
        className={`text-black flex p-3 items-center self-stretch rounded-lg border-[1px] border-solid border-[#8b8e95] focus:outline-none focus:border-[#0ca5e9]  `}
        type="text"
        placeholder={placeholder}
      />
      <p className="text-[#e14942]">{errortext}</p>
      {/* {errormessage} */}
    </div>
  );
}
// ${
//   error ? "border-[#e14942]" : "focus:border-[#0ca5e9]"
// }
