import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col relative bg-black/50">
      <Image
        src={logo}
        alt="logo"
        width={35}
        height={35}
        className="absolute z-10 top-3 right-3"
      />
      <div className="flex flex-col items-start justify-center p-10">
        <h1 className="text-5xl font-extrabold">Nippy Travels</h1>
      </div>
      <div className="absolute z-10 bottom-3 left-[23%] p-3 rounded-lg corner-squircle border border-solid border-neutral-300 w-[60%] bg-neutral-200 text-black">
        content
      </div>
    </div>
  );
}
