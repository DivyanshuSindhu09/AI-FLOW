"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathName = usePathname();
  const userId = 1
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

          if(item.route === "/profile"){
            if(userId) item.route = `${item.route}/${userId}`
            else return null
          }
        const LinkComponent = (
          <Link
          key={item.label}
          className={cn(isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900', "flex items-center justify-start gap-4 py-[6px] px-4 bg-transparent")}
          href={item.route}>
            <Image
              src={item.imageURL}
              alt={item.label}
              width={20}
              height={20}
            />
            <p className={cn(isActive ? "base-bold" : "base-medium", "max-md:hidden")}> {item.label} </p>
          </Link>
        );

        return LinkComponent;
      })}
    </>
  );
};

export default NavLinks;
