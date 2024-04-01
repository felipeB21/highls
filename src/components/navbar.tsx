import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const LINKS = [
  {
    name: "Highlights",
    href: "/highlights",
  },
  {
    name: "Games",
    href: "/games",
  },
  {
    name: "Top users",
    href: "/users",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="border-b border-neutral-900 fixed top-0 w-full bg-black">
      <div className="px-20 py-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            className="title font-bold flex items-center hover:text-yellow-400"
            href="/"
          >
            HIGHLS
            <AiFillThunderbolt size={15} />
          </Link>
          <nav>
            <ul className="flex items-center gap-5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-neutral-300 hover:text-neutral-50"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <form>
            <input
              className="py-1 px-4 outline-none rounded bg-neutral-800 relative text-sm w-[250px]"
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
            />
            <button className="absolute right-[141px] top-[12px] bg-neutral-800 py-1.5 px-2 rounded-r border-neutral-500 pl-2">
              <CiSearch />
            </button>
          </form>
          <div>
            {session?.user ? (
              <Link href={session.user.username}>{session.user.username}</Link>
            ) : (
              <Link href="/login">Sign in</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
