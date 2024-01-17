import { PrismaClient } from "@prisma/client";
import { coursesData } from "@/lib/seed/CoursesData";
import { regionsData } from "@/lib/seed/RegionData";

const prisma = new PrismaClient();

async function main() {
  const createCourses = async () =>
    await prisma.course.createMany({
      data: coursesData,
    });

  await createCourses();

  const createRegions = async () =>
    await prisma.region.createMany({
      data: regionsData,
    });

  await createRegions();
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
