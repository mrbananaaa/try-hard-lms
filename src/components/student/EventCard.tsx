import { type FC } from "react";

interface IEventCard {
  title: string;
  date: string;
  ongoing: boolean; // TODO: change this to logic inside components
}

const EventCard: FC<IEventCard> = ({ title, date, ongoing = false }) => {
  const titleWord = title.split(" ");

  return (
    <div
      className={`
      ${ongoing ? `bg-black` : `bg-default-secondary`}
      relative flex h-40 min-w-[10rem] cursor-pointer items-center rounded-lg px-3
      `}
    >
      {ongoing && (
        <div className="absolute top-3">
          <div className="h-1.5 w-1.5 animate-ping rounded-full bg-[#05FF00]/50" />
          <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#05FF00]" />
        </div>
      )}

      <div
        className={`
        ${ongoing ? `text-white` : `text-black`}
        ${titleWord.length > 1 ? `space-y-1` : `leading-none`}
      `}
      >
        {titleWord.length > 1 ? (
          <h4 className="text-xl font-bold">
            {titleWord.map((title) => (
              <>
                {title} <br />
              </>
            ))}
          </h4>
        ) : (
          <h4 className="text-lg font-bold">{title}</h4>
        )}
        <span
          className={`
          ${ongoing ? `text-default-gray` : `text-default-darkgray`}
          text-[10px]
        `}
        >
          {date}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
