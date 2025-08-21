import React from "react";
import Demo from "./demo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const page = () => {
  return (
    <>
      <div className="text-3xl text-primary-500 ">
        <h1 className="h1-bold text-link-100 font-absans">Ai Flow</h1>
        Ai Flow !
        <Demo />
      </div>
      
    </>
  );
};

export default page;
