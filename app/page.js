import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <h2 className="font-sans text-[30px] md:text-[36px] text-center leading-8 font-[700] mt-12 tracking-wide">
        Call to Pay Your <br className="block md:hidden" />
        Bill Now
      </h2>
      <div className="flex items-center justify-center mt-12">
        <button className="bg-red-500 text-[24px] text-white px-10 py-2 align-center font-sans font-[700]">
          (888) 265-5034
        </button>
      </div>
      <div className="fixed bottom-0 w-full bg-[#272525] text-[20px] text-white py-4 text-center font-[700] font-sans tracking-wide">
        CALL NOW
      </div>
    </div>
  );
}
