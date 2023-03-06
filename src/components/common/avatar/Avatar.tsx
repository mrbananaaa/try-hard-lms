import Image from "next/image";
import { type FC } from "react";

interface IAvatar {
  imgUrl: string | null | undefined;
}

const Avatar: FC<IAvatar> = ({ imgUrl }) => {
  return (
    <div className="cursor-pointer rounded-full border-2 border-black p-1">
      <div className="h-12 w-12 overflow-hidden rounded-full bg-black">
        {imgUrl ? (
          <>
            <Image
              src={imgUrl}
              alt="user-profile-pict"
              width={250}
              height={250}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Avatar;
