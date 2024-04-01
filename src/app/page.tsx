import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="px-20 py-3 mt-20">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </main>
  );
}
