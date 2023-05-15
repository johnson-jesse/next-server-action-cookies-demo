"use client";

import React, { useTransition } from "react";
import { commonAction, customAction } from "./Action.util";

export default function Sub() {
  const [time, setTime] = React.useState<number>();
  let [, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const { actionNow } = await customAction();
      setTime(actionNow);
    });
  };

  const handleCommonClick = async () => {
    startTransition(async () => {
      const { commonNow } = await commonAction();
      setTime(commonNow);
    });
  };

  return (
    <fieldset className='border-2 border-gray-500 p-3'>
      <legend>Cookies Via Common Action</legend>
      <button className='p-2 m-2 border-2 border-gray-500 hover:border-gray-900' onClick={handleClick}>Smash it custom</button>
      <button className='p-2 m-2 border-2 border-gray-500 hover:border-gray-900' onClick={handleCommonClick}>Smash it common</button>
      Now {time || 'empty'}
    </fieldset>
  );
}
