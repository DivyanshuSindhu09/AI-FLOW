import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";

const page = async () => {

  //! another way below without turning the component into client

  const session = await auth()
  console.log(session)

//   {
//   user: {
//     name: 'Divyanshu Sindhu',
//     email: 'divyanshu.sindhu@gmail.com',
//     image: 'https://avatars.githubusercontent.com/u/183302458?v=4'
//   },
//   expires: '2025-09-21T15:05:16.669Z'
// }

  return (
    <>
      <div className="text-3xl w-screen h-screen bg-primary-500 text-primary-500 ">
        <form className="pt-[100px] px-10" action={ async () => {
          "use server"

          await signOut({redirectTo : ROUTES.SIGN_IN})
        }}>
          <Button type="submit">LogOut</Button>
        </form>
      </div>
    </>
  );
};

export default page;
