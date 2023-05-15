'use server';

import { cookies } from "next/headers";

export async function customAction() {

  // @ts-ignore
  cookies().set({
    name: "customAction",
    value: "I was set via server actions from a client component custom invocation",
    httpOnly: true,
  });

  return Promise.resolve({
    actionNow: Date.now(),
  });
}

export async function formAction() {

  // @ts-ignore
  cookies().set({
    name: "formAction",
    value: "I was set via server actions from form action",
    httpOnly: true,
  });

  return Promise.resolve({
    actionNow: Date.now(),
  });
}
