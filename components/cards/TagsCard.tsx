import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { getDeviconClassname } from "@/lib/utils";

interface Props {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}
const TagsCard = ({ _id, name, questions, showCount, compact }: Props) => {
    const  iconClass = getDeviconClassname(name)
    console.log(iconClass)
  return (
    <Link
      href={ROUTES.TAG(_id)}
      className="flex items-center justify-between gap-2"
    >
      <Badge className="uppercase subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-3 py-1">
        <div className="flex justify-center items-center space-x-1.5">
          <i className={`${iconClass} text-sm`}></i>
          <span> {name} </span>
        </div>
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700"> {questions}+ </p>
      )}
    </Link>
  );
};

export default TagsCard;
