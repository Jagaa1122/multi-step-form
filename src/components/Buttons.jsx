export default function Buttons({ title, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-[#202124] text-white py-[8px] px-[25px] w-[100%] rounded-[5px]"
    >
      {title}
    </button>
  );
}
