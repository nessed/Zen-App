import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-between p-10">
      <div className="flex flex-col pt-10 px-10 pb-20 pr-20">
        <div className="font-extralight text-9xl text-white pb-20">
          welcome to your one-stop productivity app
        </div>
        <div className="text-white text-5xl">productivity begins here.</div>
      </div>
      <div className="flex w-full justify-end">
        <Link href="/meditation" passHref>
          {" "}
          {/* Update the href to point to the page path */}
          <div className="border border-white text-white py-8 px-16 rounded-full text-xl hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer">
            <div className="text-2xl">Get Started</div>
          </div>
        </Link>
      </div>
    </main>
  );
}
