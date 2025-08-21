import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/app" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          height={23}
          width={23}
          alt="DevAiFlow"
        />
        <p className="h2-bold font-absans text-dark-100 max-sm:hidden dark:text-light-900">
          Dev <span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex justify-between items-center gap-5"> <Theme/> </div>
    </nav>
  );
};

export default Navbar;
