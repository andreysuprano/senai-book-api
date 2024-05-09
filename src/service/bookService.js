const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

async function addBook(nome, descricao, autor, valor, categoria) {
	return await prisma.book.create({
		data: {
			nome,
			autor,
			categoria,
			descricao,
			valor
		}
	});
}

module.exports = addBook;
