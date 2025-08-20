import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link className="mx-4" href="/projects/devansh">
        Devansh
      </Link>
      <Link className="mx-4" href="/projects/divyanshu">
        Divyanshu
      </Link>
      <Link className="mx-4" href="/projects/jaat">
        Jaat
      </Link>
    </div>
  );
};

export default page;
