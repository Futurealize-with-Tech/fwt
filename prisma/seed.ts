const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

const coursesData = [
    { name: "iphone" },
    { name: "android" },
    { name: "webs" },
    { name: "webd" },
    { name: "unity" },
    { name: "minecraft" },
    { name: "eizou" },
    { name: "animation" },
    { name: "designer" },
    { name: "mediaart" },
    { name: "dtm" },
    { name: "miku" },
];

const regionsData = [
    { name: "関東" },
    { name: "東海" },
    { name: "関西" },
];

async function main() {
    const createCourses = async () => {
            await prisma.course.createMany({
            data: coursesData,
        });
    };

    await createCourses();

    const createRegions = async () => {
        await prisma.region.createMany({
            data: regionsData,
        });
    };

    await createRegions();
}

main()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
