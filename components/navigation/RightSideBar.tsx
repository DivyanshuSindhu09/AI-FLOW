import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagsCard from "../cards/TagsCard";

const RightSideBar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title: "What is the difference between React.memo and useMemo?",
    },
    {
      _id: "2",
      title: "How does React handle reconciliation  ?",
    },
    { _id: "3", title: "What are React Suspense and Concurrent features?" },
    { _id: "4", title: "How to optimize React apps for performance?" },
  ];

  const popularTags = [
    {
      _id: "1",
      name: "javascript",
      questions: 350,
    },
    {
      _id: "2",
      name: "typescript",
      questions: 300,
    },
    {
      _id: "3",
      name: "react",
      questions: 280,
    },
    {
      _id: "4",
      name: "nextjs",
      questions: 220,
    },
    {
      _id: "5",
      name: "tailwindcss",
      questions: 200,
    },
  ];

  return (
    <section className="pt-20 h-screen w-[280px] flex flex-col overflow-y-auto p-4 max-sm:hidden max-md:hidden custon-scrollbar sticky right-0 top-0 background-light900_dark200">
      <div>
        <h3 className="h3-bold font-absans text-dark200_light900">
          Top Questions
        </h3>
        <div className="mt-4 flex w-full flex-col gap-[20px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="cursor-pointer flex items-center justify-between gap-4"
            >
              <p className="body-medium text-dark500_light700"> {title} </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-4 flex flex-col gap-2">
          {popularTags.map(({ _id, name, questions }) => (
            <TagsCard
              _id={_id}
              name={name}
              key={_id}
              questions={questions}
              compact
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
