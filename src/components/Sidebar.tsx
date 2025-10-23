"use client";

import Avatar from "@/daisyUI/avatar";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function Sidebar() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session ? session.user : null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session ? session.user : null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div>Checking status...</div>;

  const username = user?.user_metadata?.full_name;
  const isLoggedIn = !!user;

  return (
    <header className="flex h-screen min-w-96 flex-col items-center justify-between bg-sky-600">
      {isLoggedIn ? (
        <>
          <div className="mt-32 flex h-[16rem] flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-between gap-4">
              <Avatar />
              <p className="text-2xl font-bold">Welcome, {username}</p>
            </div>
            <Link href="/" className="text-lg">
              View all decks
            </Link>
            <Link href="/flashcards/new" className="text-lg">
              Create new deck
            </Link>
          </div>
          <div className="mb-32">
            <button
              onClick={() => supabase.auth.signOut()}
              className="btn btn-primary"
            >
              Sign out
            </button>
          </div>
        </>
      ) : (
        <div className="m-auto flex h-[48rem] flex-col gap-32">
          <h2 className="text-3xl font-bold">Sign in</h2>
          <SignInButton />
        </div>
      )}
    </header>
  );
}
