import * as motion from "motion/react-client";
export default function Home() {
  return (
    <motion.div
      className="flex bg-[#ffffff] min-w-[480px]  p-[32px] flex-col rounded-[8px] justify-between items-start"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.72 }}
    >
      <img src="Main 1.png" width="60px" alt="" />
      <h1 className="text-[#202124] font-bold text-[26px]">
        You're All Set 🔥
      </h1>
      <p className="text-[#8E8E8E] mb-5">
        We have received your submission. Thank you!
      </p>
    </motion.div>
  );
}
