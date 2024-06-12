import Image from "next/image";
export default function Home() {
  return (
    <main className="flex size flex-col h-full w-full items-center justify-between">
      <div className="flex flex-col pt-10 px-10 pb-20 pr-20">
        <div className="font-extralight text-9xl text-white pb-20">
          welcome to your one-stop productivity app
        </div>
        <div className="text-white text-5xl">productivity begins here.</div>
      </div>
      <div className="flex flex-col justify-end py-10">
        <div class=" border border-white text-white py-8 px-16 rounded-full text-xl hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer">
          <div className="text-2xl">Get Started</div>
        </div>
      </div>
    </main>
  );
}
