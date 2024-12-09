import Image from "next/image";
import Home from "./components/Home";

export default function root({children}: any) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      root
    </div>
  );
}
