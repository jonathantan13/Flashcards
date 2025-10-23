"use client";

import { ChangeEvent, useState } from "react";

export default function CreateNewCard() {
  const [titleCount, setTitleCount] = useState("");
  const [descriptionCount, setDescriptionCount] = useState("");

  function updateTitleCount(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;
    const MAX_LENGTH = 20;

    setTitleCount(title.slice(0, MAX_LENGTH));
  }

  function updateDescriptionCount(e: ChangeEvent<HTMLTextAreaElement>) {
    const description = e.target.value;
    const MAX_LENGTH = 100;

    setDescriptionCount(description.slice(0, MAX_LENGTH));
  }

  return (
    <form
      action=""
      className="m-auto flex w-[70%] max-w-[48rem] flex-col gap-12 rounded-b-md bg-sky-600 p-16 shadow-lg"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <label htmlFor="" className="text-2xl font-bold">
            Title
          </label>
          <input
            type="text"
            value={titleCount}
            onChange={(e) => updateTitleCount(e)}
            className="h-10 w-full bg-white p-2 text-black"
          />
          <p className={titleCount.length >= 20 ? "text-red-600" : ""}>
            <span className="font-semibold">{titleCount.length}/20</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="" className="text-2xl font-bold">
            Description
          </label>
          <textarea
            value={descriptionCount}
            onChange={(e) => updateDescriptionCount(e)}
            className="h-24 w-full bg-white p-2 text-black"
          />
          <p className={titleCount.length >= 100 ? "text-red-600" : ""}>
            <span className="font-semibold">{descriptionCount.length}/100</span>
          </p>
        </div>
      </div>
      <button className="btn h-12 w-[6rem] btn-primary">Create</button>
    </form>
  );
}
