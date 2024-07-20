import Image from "next/image";

function Nav() {
  return (
    <nav className="flex flex-col-reverse gap-16 md:flex-row justify-between items-center md:px-24 md:py-7 ">
      <Image src={"/logo.png"} width={200} height={50} alt="logo" />
      <a className="font-sans font-[600] text-[22px] md:text-[17px] text-white bg-black w-full md:w-auto text-center py-5 md:text-black md:bg-white md:border-b-[1px] md:border-red-600 md:pb-[2px] md:mt-[6px] tracking-wide">
        Call Now (888) 205-1404
      </a>
    </nav>
  );
}

export default Nav;
