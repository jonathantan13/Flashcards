"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabaserServer";

// Create new card
export async function createNewDeck(
  formState: { message: string },
  formData: FormData,
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  if (!user) redirect("/");

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  const { data, error } = await supabase
    .from("Decks")
    .insert([{ title, description, user_id: user.id }])
    .select();

  return {
    message: "test",
  };
}
