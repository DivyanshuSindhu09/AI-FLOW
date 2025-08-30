"use client";

import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

interface Props {
  route: string;
  imgSource: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({
  route,
  imgSource,
  placeholder,
  otherClasses,
}: Props) => {
  return (
    <div className={`bg-dark-400 flex items-center min-h-[40px] rounded-[10px] px-4 gap-4 grow ${otherClasses}`}>
      <Image
        src={imgSource}
        height={24}
        width={24}
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        className="paragraph-regular !bg-transparent no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
        type="text"
        placeholder={placeholder}
        value="Search Value"
        onChange={() => {}}
      />
    </div>
  );
};

export default LocalSearch;
