import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
    const user=await currentUser();

    const user=await db.select().from(usersTable)
    .where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress as string))
}