import React, { useState } from "react";
import Rating, { IRatingValue } from "./Rating";

export default {
  title: "Rating stories",
  component: Rating,
};
//empty stars
export const EmptyRating = () => <Rating value={0} onClick={(x) => x} />;
export const Rating1 = () => <Rating value={1} onClick={(x) => x} />;
export const Rating2 = () => <Rating value={2} onClick={(x) => x} />;
export const Rating3 = () => <Rating value={3} onClick={(x) => x} />;
export const Rating4 = () => <Rating value={4} onClick={(x) => x} />;
export const Rating5 = () => <Rating value={5} onClick={(x) => x} />;
export const ChangingRating = () => {
  const [val, setVal] = useState<IRatingValue>(3);
  return <Rating value={val} onClick={setVal} />;
};
