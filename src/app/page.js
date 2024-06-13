import Link from "next/link";
import { Flower } from "lucide-react";
import { motion } from "framer-motion";
import SimpleSlider from "./components/SimpleSlider";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-10">
      <div className="flex flex-col pb-20 pr-20 w-full">
        <div className="flex justify-between items-center w-full">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <span>
                <Flower className="text-white font-extralight text-4xl w-12 h-9" />
              </span>
              <span className="text-4xl text-white font-extralight">Zen</span>
            </div>
          </Link>
          <div className="flex items-center ml-auto">
            <div className="border border-white text-white py-2 px-12 flex ml-5 items-center rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer">
              <div className="text-lg">Login</div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <div
            data-aos="zoom-in"
            className="lg:font-extralight text-[max(7vw,2rem)] xs:font-normal leading-none text-white pb-20"
          >
            welcome to your one-stop productivity app
          </div>
          <div className="text-white text-5xl">productivity begins here.</div>
        </div>
        <div className="flex w-full justify-between pt-16">
          <Link href="/meditation" passHref>
            <div className="border border-white text-white py-4 px-16 rounded-full text-xl hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer">
              <div className="text-2xl">Get Started</div>
            </div>
          </Link>
          <div className="flex flex-col mb-20 items-end justify-end w-1/2">
            <div className="right-10 w-1/2">
              <SimpleSlider />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
