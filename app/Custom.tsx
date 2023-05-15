"use client";

import React, { useTransition } from "react";
import { customAction } from "./Action.util";

export default function Sub() {
  const [time, setTime] = React.useState<number>();
  let [, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const { actionNow } = await customAction();
      setTime(actionNow);
    });
  };

  return (
    <fieldset className='border-2 border-gray-500 p-3'>
      <legend>Cookies Via Custom Invocation</legend>
      <button className='p-2 m-2 border-2 border-gray-500 hover:border-gray-900' onClick={handleClick}>Smash it</button>
      Now {time || 'empty'}
    </fieldset>
  );
}
