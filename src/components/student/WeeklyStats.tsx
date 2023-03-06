import { type FC } from "react";

const WeeklyStats: FC<{
  title: string;
  score: string;
  color: "black" | "green" | "orange" | "yellow";
}> = ({ title, score, color = "black" }) => {
  return (
    <div className="relative flex h-[10.5rem] w-[10.5rem] items-center justify-center rounded-lg bg-default-secondary md:h-48 md:w-48">
      <span
        className={`
        ${color === "green" ? `text-green-500` : `text-black`}
        ${color === "orange" ? `text-orange-500` : `text-black`}
        ${color === "yellow" ? `text-yellow-500` : `text-black`}
        absolute top-3 left-3 text-sm font-semibold
      `}
      >
        {title}
      </span>
      <div
        className={`${
          score.split(".").length > 1 ? "text-5xl" : "text-6xl"
        } pt-2 font-bold`}
      >
        {score}
      </div>
    </div>
  );
};

export default WeeklyStats;
