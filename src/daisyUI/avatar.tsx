import Image from "next/image";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="w-20 rounded-full">
        {/* <Image
          width={16}
          height={16}
          src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
        /> */}
        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
      </div>
    </div>
  );
}
