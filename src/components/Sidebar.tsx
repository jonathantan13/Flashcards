import Avatar from "@/daisyUI/avatar";
import Link from "next/link";

export default function Sidebar() {
  return (
    <header className="flex h-screen min-w-96 flex-col items-center justify-between bg-sky-600">
      <div className="mt-32 flex h-[16rem] flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-between gap-4">
          <Avatar />
          <p className="text-2xl font-bold">Welcome, user</p>
        </div>
        <Link href="/" className="text-lg">
          View all flashcards
        </Link>
        <Link href="/flashcards/new" className="text-lg">
          Create new flashcard set
        </Link>
      </div>
      <div className="mb-32">
        <p>Sign in with google</p>
      </div>
    </header>
  );
}
