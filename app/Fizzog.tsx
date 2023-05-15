"use client";

import React, { useTransition } from "react";
import { fizzog } from "./Action.util";

export default function Sub() {
  const [time, setTime] = React.useState<number>();
  let [, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const { actionNow } = await fizzog();
      setTime(actionNow);
    });
  };

  return (
    <>
      <h1 className='text-3xl'>Demo Cookies Via Server Action</h1>
      <button className='p-3 border-2 border-gray-500 hover:border-gray-900' onClick={handleClick}>Get it</button>
      Now {time || 'empty'}
    </>
  );
}
