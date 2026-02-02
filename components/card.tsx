import React from "react";
import Link from "next/link";
import { dataTypes } from "@/type/type";
import { LiaAdSolid } from "react-icons/lia";
import { IconType } from "react-icons";

const Card = ({ title, link, icon: Icon }: dataTypes) => {
  return (
    <>
      <div className="group w-full my-4 ">
        <Link href={`${link}`} target="_blank" rel="noopener noreferrer">
          <div className="col-span-12 flex items-center text-[#145880] bg-white  group-hover:bg-blue-100 group-hover:transition-all group-hover:transform group-hover:duration-200 rounded-full py-2 px-4 md:p-4 ">
            <Icon size={40} className="text-[#145880] group-hover: max-w-6 md:max-w-fit"/>
            <h2 className="text-sm md:text-lg font-medium w-full text-center">{title}</h2>
            <Icon size={40} className="fill-transparent max-w-6 md:max-w-fit" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
