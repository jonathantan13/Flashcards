import Avatar from "@/daisyUI/avatar";

export default function Sidebar() {
  return (
    <header className="h-screen min-w-96 bg-blue-400">
      <div className="mt-32 flex h-[32rem] flex-col items-center justify-between">
        <div className="flex w-[65%] items-center justify-between">
          <Avatar />
          <p className="text-2xl font-bold">Welcome, user</p>
        </div>
        <p className="text-2xl">Categories</p>
        <p className="text-2xl">Account</p>
        <p className="text-2xl">Test 1</p>
        <p className="text-2xl">Test 2</p>
      </div>
    </header>
  );
}
