"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { createUrlQuery, removeUrlQuery } from "@/lib/url";

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
  const pathname = usePathname();
  //? /, /about. /profie
  console.log(pathname);

  const router = useRouter(); //! comes from next-navigation not next router
  console.log(router);
  //* this is an object not an array and .push method is used to navigate

  //? we'll use query-string for making it easy to work with url queries

  const searchParams = useSearchParams();
  //!ReadonlyURLSearchParams {size: 0}
  console.log(searchParams);

  const query = searchParams.get("query") || "";
  //!Ab url state management use ho rhi hai
  console.log(query);

  console.log(searchParams.toString());
  //!query=yaha+jo+url+mein++likhoge+wo+aega

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    if (searchQuery) {
      const newUrl = createUrlQuery({
        params: searchParams.toString(),
        key: "query",
        value: searchQuery,
        //! hum exisiting params ko loose na krde isliye use rkh rhe hain
      });

      console.log("newUrl", newUrl);
      //?newUrl : /?query=this%20is%20amazing%20shyt

      router.push(newUrl, { scroll: false });
      console.log(router);
    } else {
      if (pathname === route) {
        const newUrl = removeUrlQuery({
          params: searchParams.toString(),
          keyToBeRemoved: ["query"],
        });
        router.push(newUrl, { scroll: false });
      }
    }
  }, [searchQuery, route, router, searchParams, pathname]);
  return (
    <div
      className={`bg-dark-400 flex items-center min-h-[40px] rounded-[10px] px-4 gap-4 grow ${otherClasses}`}
    >
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
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default LocalSearch;
