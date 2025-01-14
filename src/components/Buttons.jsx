export default function Buttons({ title, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-[#202124] text-white p-[8px] grow rounded-[5px] flex justify-center"
    >
      {title}
      <img src="chevron_right.svg" alt="" />
    </button>
  );
}
