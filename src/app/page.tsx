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
      <div className="flex flex-col items-start justify-center p-10 absolute z-1 top-1/6 left-1/6">
        <h1 className="text-7xl font-extrabold">Nippy Travels</h1>
      </div>
      <div className="absolute z-10 bottom-0 left-0 md:lg:xl:bottom-3 md:lg:xl:left-[23%] p-3 md:lg:xl:rounded-lg md:lg:xl:corner-squircle md:lg:xl:border border-solid border-neutral-300 w-full md:lg:xl:w-[60%] bg-neutral-200 text-black">
        content
      </div>
    </div>
  );
}
