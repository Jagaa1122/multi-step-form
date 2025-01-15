export default function Buttons({ title, handleClick, currentStep }) {
  return (
    <button
      onClick={handleClick}
      className="bg-[#202124] text-white p-[8px] grow rounded-[5px] flex justify-center"
    >
      Continue {currentStep}/3
      <img src="chevron_right.svg" alt="" />
    </button>
  );
}
