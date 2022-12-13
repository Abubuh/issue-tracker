import React from "react";

export const Header = () => {
  return (
    <div className="h-[8rem] bg-emerald-300 drop-shadow-md">
      <form>
        <input
          className="px-4 py-2 m-3 rounded-md bg-emerald-200 border-2 border-emerald-400 hover:border-white text-black text-xl "
          placeholder="Title"
        />
        <input
          className="block px-4 py-2 ml-8 rounded-md bg-emerald-200 border-2 border-emerald-400 hover:border-white text-black text-l "
          placeholder="Subtitle"
        />
      </form>
    </div>
  );
};
