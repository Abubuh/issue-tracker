import React, { useState } from "react";

export const Card = ({title}) => {
  const [input, setInput] = useState("");

  return (
    <form className="flex border rounded-md bg-emerald-200 w-[15rem] border-emerald-400 h-16 mx-1 my-2">
      <input
      type="text"
        // onChange={(e) => setInput(e.target.value)}
        defaultValue={title}
        placeholder="Enter a task"
        className="rounded-sm bg-emerald-200 focus:outline-none ml-2 h-12 mx-1 text-xs"
      />
      <button className="text-xs border border-black rounded-md my-3 px-1">Update task</button>
    </form>
  );
};
