import { type FC } from "react";

const WeeklyInfo: FC = () => {
  return (
    <div className="rounded-lg bg-black p-4 text-white space-y-8">
      {/* title */}
      <div className="leading-none">
        <h3 className="">Weekly task status</h3>
        <span className="text-xs text-default-gray">In Progress</span>
      </div>

      {/* bar */}
      <div className="w-full h-4 rounded-full bg-[#404040]">
        <div className="h-4 rounded-full bg-default-gray w-[60%]"></div>
      </div>

      {/* date warning */}
      <div className="leading-none text-center">
        <h3 className="text-sm">4 days left until reset</h3>
        <span className="text-xs text-default-gray">check your task list!</span>
      </div>

      {/* cta btn */}
      <button className="bg-default-primary text-black w-full font-semibold rounded-md py-3 hover:bg-opacity-90 duration-150">
        View Status
      </button>
    </div>
  );
};

export default WeeklyInfo;
