import { type FC } from "react";

interface IWeeklyAssignment {
  title: string;
  description: string;
  date: string;
  oneDay: boolean; // TODO: change this to logic inside component.
  // TODO: Link to Assignment
}

const WeeklyAssignment: FC<IWeeklyAssignment> = ({
  title,
  description,
  date,
  oneDay,
}) => {
  const dateString = date.split("/");

  return (
    <div className="relative flex w-full cursor-pointer items-end justify-between rounded-lg bg-default-secondary p-5 duration-150 hover:bg-[#c7d8e0]">
      {/* top-content */}
      <div className="absolute top-3 left-3 flex space-x-2">
        <div className="rounded bg-[#E9D0D0] p-1 text-xs font-semibold text-[#FF0000]">
          Deadline!
        </div>
        {oneDay && (
          <div className="rounded bg-white p-1 text-xs font-semibold text-[#FF0000]">
            1 Day
          </div>
        )}
      </div>

      {/* left-content */}
      <div className="max-w-[12rem] pt-6 pb-2 md:max-w-xs">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="font-inter text-sm font-medium text-default-darkgray line-clamp-2">
          {description}
        </p>
      </div>
      {/* right-content */}
      <div className="flex h-28 w-28 items-center justify-center rounded-md bg-default-primary">
        <span className="text-4xl font-bold md:text-5xl">{dateString[0]}</span>
        <span className="pt-5 font-semibold">/</span>
        <span className="pt-8 font-semibold">{dateString[1]}</span>
      </div>
    </div>
  );
};

export default WeeklyAssignment;
