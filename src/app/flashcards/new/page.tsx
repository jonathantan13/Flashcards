// This needs to be a client component -- I'm keeping track of the word count

export default function CreateNewCard() {
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
          <input type="text" className="h-8 w-full bg-white" />
          <p>0/20</p>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="" className="text-2xl font-bold">
            Description
          </label>
          <input type="text" className="h-24 w-full bg-white" />
          0/200
        </div>
      </div>
      <button className="btn h-12 w-[6rem] btn-primary">Create</button>
    </form>
  );
}
