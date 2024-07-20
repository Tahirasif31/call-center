import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav />
      <h2 className="font-sans text-[26px] md:text-[36px] text-center leading-8 font-[700] mt-12 tracking-wide">
        Call to Pay Your <br className="block md:hidden" />
        Bill Now
      </h2>
    </div>
  );
}
