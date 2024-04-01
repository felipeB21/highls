import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    const existingUserEmail = await db.user.findUnique({
      where: {
        email,
      },
    });

    const existingUserUsername = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUserEmail) {
      return NextResponse.json(
        {
          user: null,
          error: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    if (existingUserUsername) {
      return NextResponse.json(
        {
          user: null,
          error: "Username already exists",
        },
        {
          status: 400,
        }
      );
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(rest, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
