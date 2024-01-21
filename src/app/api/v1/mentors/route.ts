import { NextResponse } from "next/server";
import { prisma, prismaConnect } from "@/lib/prisma/prisma";


export const GET = async (req: Request, res: NextResponse) => {
    return NextResponse.json({ mentors }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "fetch error", e }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
