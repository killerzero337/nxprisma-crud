import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const articulos = await prisma.articulo.findMany();
console.log(articulos);
