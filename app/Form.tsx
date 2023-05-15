import React from "react";
import { formAction } from "./Action.util";

export function Form() {

  return (
    <fieldset className="border-2 border-gray-500 p-3">
      <legend>Cookies Via Form Action</legend>
      <form action={formAction}>
        <button className='p-2 m-2 border-2 border-gray-500 hover:border-gray-900' type="submit">Smash it</button>
      </form>
      Check Application Cookies
    </fieldset>
  );
}
