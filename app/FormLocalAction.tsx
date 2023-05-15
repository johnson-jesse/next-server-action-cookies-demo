import React from "react";
import { cookies } from "next/headers";
import { commonAction } from "./Action.util";

export function FormLocalAction() {
  async function formLocalAction() {
    'use server';

    // @ts-ignore
    cookies().set({
      name: "localAction",
      value:
        "I was set from a form with a locally declared server action",
      httpOnly: true,
    });

    return Promise.resolve({
      actionNow: Date.now(),
    });
  }

  async function formCommonAction() {
    'use server';
    return commonAction();
  }

  return (
    <fieldset className="border-2 border-gray-500 p-3">
      <legend>Cookies Via Form Local Action</legend>
      <form action={formLocalAction}>
        <button
          className="p-2 m-2 border-2 border-gray-500 hover:border-gray-900"
          type="submit"
        >
          Smash it local
        </button>
      </form>
      <form action={formCommonAction}>
        <button
          className="p-2 m-2 border-2 border-gray-500 hover:border-gray-900"
          type="submit"
        >
          Smash it common
        </button>
      </form>
      Check Application Cookies
    </fieldset>
  );
}
