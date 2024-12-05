"use client";

import { FC } from "react";

type Props = {
  quote: { q: string; a: string };
};

const Quote: FC<Props> = ({ quote }) => {
  const { q, a } = quote;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-[80px]">«{q}»</h1>
      <blockquote className="italic">{a}</blockquote>
    </div>
  );
};

export default Quote;
