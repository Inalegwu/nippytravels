import {
  AltArrowRight,
  CalendarMinimalistic,
  Document,
} from "@solar-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col bg-black/50">
      <div className="w-full flex items-center justify-between px-10 py-5">
        <Image src={logo} alt="logo" width={35} height={35} />
        <div className="hidden md:lg:xl:flex items-center justify-center gap-7">
          <Link href={`/?viewing=about`} className="hover:text-neutral-200">
            About Us
          </Link>
          <Link href={`/?viewing=contact`} className="hover:text-neutral-200">
            Get In Touch
          </Link>
        </div>
        <Link
          href={`/?viewing=form`}
          className="px-4 py-2 bg-white text-neutral-950 rounded-full corner-squircle text-sm hidden md:lg:xl:flex items-center justify-between gap-2"
        >
          <span className="text-white bg-black rounded-full p-1">
            <AltArrowRight weight="Linear" size={14} />
          </span>
          <span>Fill My Form</span>
        </Link>
      </div>
      <div className="hidden fixed md:lg:xl:flex items-center justify-center bottom-10 w-3/6 left-[25%] p-10 gap-6">
        <button
          type="button"
          className="px-6 py-2 bg-transparent backdrop-blur-3xl flex items-center justify-center gap-2 border border-solid border-white rounded-full text-sm"
        >
          <CalendarMinimalistic weight="Bold" size={16} />
          <span>Book an Appointment</span>
        </button>
        <Link
          href={`/?viewing=form`}
          className="px-6 py-2 bg-black text-white flex items-center justify-center gap-2 border border-solid border-neutral-800 rounded-full text-sm"
        >
          <Document weight="Bold" size={16} />
          <span>Fill my Form</span>
        </Link>
      </div>
    </div>
  );
}
