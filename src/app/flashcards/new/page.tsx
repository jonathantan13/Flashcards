"use client";

import { ChangeEvent, startTransition, useActionState, useState } from "react";
import * as actions from "@/actions";

export default function CreateNewCard() {
  const [titleCount, setTitleCount] = useState("");
  const [descriptionCount, setDescriptionCount] = useState("");

  const [formState, action] = useActionState(actions.createNewDeck, {
    message: "",
  });

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => action(formData));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto flex w-[70%] max-w-[48rem] flex-col gap-12 rounded-b-md bg-sky-600 p-16 shadow-lg"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <label htmlFor="title" className="text-2xl font-bold">
            Title
          </label>
          <input
            name="title"
            id="title"
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
          <label htmlFor="description" className="text-2xl font-bold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={descriptionCount}
            onChange={(e) => updateDescriptionCount(e)}
            className="h-24 w-full bg-white p-2 text-black"
          />
          <p className={descriptionCount.length >= 100 ? "text-red-600" : ""}>
            <span className="font-semibold">{descriptionCount.length}/100</span>
          </p>
        </div>
      </div>
      <button className="btn h-12 w-[6rem] btn-primary">Create</button>
    </form>
  );
}
