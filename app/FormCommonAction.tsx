import React from "react";
import { commonAction } from "./Action.util";

export function FormCommonAction() {
  return (
    <fieldset className="border-2 border-gray-500 p-3">
      <legend>Cookies Via Form Common Action</legend>
      <form action={commonAction}>
        <button className='p-2 m-2 border-2 border-gray-500 hover:border-gray-900' type="submit">Smash it</button>
      </form>
      Check Application Cookies
    </fieldset>
  );
}
