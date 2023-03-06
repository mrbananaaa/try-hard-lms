/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type Session } from "next-auth";
import Link from "next/link";
import { type FC } from "react";
import Avatar from "../common/avatar/Avatar";
import GreetingUser from "../common/text/GreetingUser";
import PageTitle from "../common/text/PageTitle";

interface IHeader {
  userInfo: Session | null;
}

const Header: FC<IHeader> = ({ userInfo }) => {
  return (
    <div className="flex items-center justify-between">
      <PageTitle>
        <GreetingUser username={userInfo?.user.name} />
      </PageTitle>

      <div className="group relative">
        {userInfo && (
          <Link
            href={`/dashboard/${userInfo.user.role.toLowerCase()}/settings`}
          >
            <Avatar imgUrl={userInfo?.user.image} />
          </Link>
        )}
        <div className="absolute top-5 -left-16 origin-bottom-right scale-0 rounded bg-black px-2 py-1 text-xs text-white duration-300 group-hover:scale-100">
          profile
        </div>
      </div>
    </div>
  );
};

export default Header;
