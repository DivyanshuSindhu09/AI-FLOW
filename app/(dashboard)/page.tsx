// import React from "react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { auth, signOut } from "@/auth";
// import ROUTES from "@/constants/routes";
// import { Button } from "@/components/ui/button";

// const page = async () => {
//   //! another way below without turning the component into client

//   const session = await auth();
//   console.log(session);

//   {
//   user: {
//     name: 'Divyanshu Sindhu',
//     email: 'divyanshu.sindhu@gmail.com',
//     image: 'https://avatars.githubusercontent.com/u/183302458?v=4'
//   },
//   expires: '2025-09-21T15:05:16.669Z'
// }

//   {
//   user: {
//     name: 'DIVYANSHU SINDHU',
//     email: 'divyanshu.sindhu@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ACg8ocItzx-n5Wvb8syovBvkg1IUBMX2TS3nwL-Qgpx-NNAVGFlxfK4=s96-c'
//   },
//   expires: '2025-09-21T16:00:08.370Z'
// }

//   return (
//     <>
//       <div className="text-3xl w-screen h-screen bg-primary-500 text-primary-500 ">
//         <form
//           className="pt-[100px] px-10"
//           action={async () => {
//             "use server";

//             await signOut({ redirectTo: ROUTES.SIGN_IN });
//           }}
//         >
//           <Button type="submit">LogOut</Button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default page;

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-2 sm:flex-row sm:flex-center">
        <h1 className="h1-bold text-dark100_light900 font-absans">
          All Questions
        </h1>
        <Button
          asChild
          className="primary-gradient min-h-[30px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-4">
        <LocalSearch
          route="/"
          imgSource="/icons/search.svg"
          placeholder="Search for question..."
        />
      </section>
      Home Filter
      <div className="mt-4 flex w-full flex-col gap-6">
        <p>Question card 1</p>
        <p>Question card 1</p>
        <p>Question card 1</p>
        <p>Question card 1</p>
      </div>
    </>
  );
};

export default page;
