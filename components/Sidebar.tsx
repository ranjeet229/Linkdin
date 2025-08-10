import Image from "next/image";
import React from "react";
import ProfilePhoto from "./shared/ProfilePhoto";

const Sidebar = ({ user }: { user: any }) => {
  return (
    <div className="hidden md:block w-[20%] h-fit border bordergray-300 bg-white rounded-lg">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-16 owverflow-hidden">
          {user && (
            <Image
              src={"/banner.png"}
              alt="Banner"
              width={300}
              height={300}
              className="w-full h-full rounded-t"
            />
          )}
        </div>
        <div className="my-1 absolute top-10 left-[40%]">
          <ProfilePhoto src={user ? user?.imageUrl! : "/banner.png"} />
        </div>
        <div className="border-b border-b-gray-300">
          <div className="p-2 mt-5 text-center">
            <h1 className="font-bold hover:underline cursor-pointer">
              {user ? `${user?.firstName} ${user?.lastName}` : "Ranjeet Kumar"}
            </h1>
            <p className="test-xs">
              @{user ? `${user?.username}` : "username"}
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs space-y-0">
        <div className="w-full flex justify-between items-center px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer">
          <p>Post Impression</p>
          <p className="text-blue-500 font-bold">88</p>
        </div>
        <div className="w-full flex justify-between items-center px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer">
          <p>Post</p>
          <p className="text-blue-500 font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
