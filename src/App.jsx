import { useState } from "react";

import React from "react";

const App = () => {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center duration-500 transition ease-in-out"
        style={{ backgroundColor: color }}
      >
        <div className="items-center flex justify-center bg-white h-fit rounded-3xl w-fit px-5 py-1">
          <div className="flex items-center justify-center text-white rounded-lg gap-3 px-3 py-3">
            <button
              onClick={() => setColor("red")} //onclick needs function
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("black")}
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("olive")}
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="rounded-3xl w-16 outline-none py-1 px-1 text-black shadow-lg shadow-slate-400"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("orange")}
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("purple")}
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("gray")}
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("pink")}
              className="rounded-3xl w-16 outline-none py-1 px-1 shadow-lg shadow-slate-400"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
