import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
    //!invert-colors see in global css, the logo will look good in both light and dark themes
  const buttonClasses =
    "flex-1 justify-center items-center text-dark200_light800 min-h-12 p-4 rounded-[8px] background-dark400_light900";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClasses}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="object-contain mr-2.5 "
        />
        <span>Login with Github</span>
      </Button>

      <Button className={buttonClasses}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="object-contain mr-2.5 "
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
