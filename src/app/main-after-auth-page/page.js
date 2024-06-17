import Link from "next/link";
export default function main() {
  return (
    <div className=" flex flex-row flex-center h-screen items-center justify-center">
      <div className="px-5">
        <Link className="w-1/5" href="/meditation" passHref>
          <div className="border border-white text-white py-4 px-10 text-center rounded-full text-xl hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer">
            <div data-aos="zoom-out" className="text-2xl">
              Meditate{" "}
            </div>
          </div>
        </Link>
      </div>
      <div className="px-5">
        <Link className="w-1/5" href="/journal" passHref>
          <div className="border border-white text-white py-4 px-10 text-center rounded-full text-xl hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer">
            <div data-aos="zoom-out" className="text-2xl">
              Journal
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
