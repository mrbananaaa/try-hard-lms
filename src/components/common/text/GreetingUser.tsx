import { type FC } from "react";

interface IGreetingUser {
  username: string | null | undefined;
}

const GreetingUser: FC<IGreetingUser> = ({ username = "User" }) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();

  let timeNow = "";

  if (hours >= 0 && hours < 12) {
    timeNow = "morning";
  } else if (hours >= 12 && hours < 18) {
    timeNow = "afternoon";
  } else {
    timeNow = "evening";
  }

  return (
    <div className="text-4xl font-bold">
      Good {timeNow}, {username}!
    </div>
  );
};

export default GreetingUser;
