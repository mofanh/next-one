import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import Image from "next/image";

const NavBar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="text-black">
          Home
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href={"/dashboard"}>
                <span>Dashboard</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">logout</button>
              </form>
              <Link href={`/dashboard/user/${session?.user?.name}`} className="flex">
                <span>{session?.user?.name}</span>
                <Image
                  src={session?.user?.image}
                  alt="A description of the image"
                  width={20}
                  height={20}
                />
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit">login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;