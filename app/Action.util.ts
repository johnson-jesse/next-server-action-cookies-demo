'use server';

import { cookies } from "next/headers";

export async function fizzog() {

  // @ts-ignore
  cookies().set({
    name: "fizzog",
    value: "I was set via server actions from a client component",
    httpOnly: true,
  });

  return Promise.resolve({
    actionNow: Date.now(),
  });
}
