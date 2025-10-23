"use client";

import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Avatar() {
  const [userAvatarURL, setUserAvatarURL] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAvatar() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        const avatarUrl = session.user.user_metadata.avatar_url;
        setUserAvatarURL(avatarUrl || null);
      }
    }
    fetchAvatar();
  }, []);

  if (!userAvatarURL)
    return <div className="h-10 w-10 rounded-full bg-gray-300"></div>;

  return (
    <div className="avatar">
      <div className="w-20 rounded-full">
        <Image
          src={userAvatarURL}
          width={500}
          height={500}
          alt="User's profile picture"
        />
      </div>
    </div>
  );
}
