"use client";

import { useState, useRef } from "react";

import { Button } from "@/atoms/Button";
import { wrapper } from "@/organisms/Echo.css";

export const Echo = () => {
  const [isSelected, setIsSelected] = useState(false);
  const isSelectedByUseRef = useRef(null);
  console.log("current isSelectedByUseRef", isSelectedByUseRef.current);

  const handleOnClickByUseState = () => {
    console.log({ isSelected });
    setIsSelected(true);
  };

  const handleOnClickByUseRef = () => {
    console.log(isSelectedByUseRef.current);
  };

  return (
    <div>
      <div>
        <p>useState test</p>
        <Button
          handleOnClick={handleOnClickByUseState}
          text="useState disabled"
          isDisabled={isSelected}
        />
      </div>
      <div>
        <p ref={isSelectedByUseRef}>useRef test</p>
        <Button
          handleOnClick={handleOnClickByUseRef}
          text="useRef "
          isDisabled={false}
        />
      </div>
      <div className={wrapper}>
        <Button
          handleOnClick={() => setIsSelected(false)}
          text="useState reset"
          isDisabled={false}
        />
      </div>
    </div>
  );
};
