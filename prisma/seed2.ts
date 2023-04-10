import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

async function seed() {
  // Create genres
  const fiction = await prisma.genre.create({
    data: {
      name: 'Fiction',
      description: 'Works of the imagination',
    },
  });

  const nonfiction = await prisma.genre.create({
    data: {
      name: 'Nonfiction',
      description: 'Works based on reality',
    },
  });

  // Create authors
  const jkRowling = await prisma.author.create({
    data: {
      name: 'J.K. Rowling',
      biography: 'Author of the Harry Potter series',
    },
  });

  const georgeOrwell = await prisma.author.create({
    data: {
      name: 'George Orwell',
      biography: 'Author of 1984 and Animal Farm',
    },
  });

  // Create publishers
  const penguinRandomHouse = await prisma.publisher.create({
    data: {
      name: 'Penguin Random House',
      address: '1745 Broadway, New York, NY 10019',
      phone: '(212) 782-9000',
    },
  });

  const harperCollins = await prisma.publisher.create({
    data: {
      name: 'HarperCollins',
      address: '195 Broadway, New York, NY 10007',
      phone: '(212) 207-7000',
    },
  });

  // Create books
  const harryPotter = await prisma.book.create({
    data: {
      title: "Harry Potter and the Philosopher's Stone",
      Author: {
        connect: { id: jkRowling.id },
      },
      Publisher: {
        connect: { id: harperCollins.id },
      },
      isbn: '978-0747532743',
      genre: {
        connect: { id: fiction.id },
      },
      publication: new Date('1997-06-26'),
      price: 10.99,
      quantity: 100,
    },
  });

  const animalFarm = await prisma.book.create({
    data: {
      title: 'Animal Farm',
      Publisher: {
        connect: { id: penguinRandomHouse.id },
      },
      Author: {
        connect: { id: georgeOrwell.id },
      },
      isbn: '978-0141036137',
      genre: {
        connect: { id: fiction.id },
      },
      publication: new Date('1945-08-17'),
      price: 7.99,
      quantity: 50,
    },
  });

  // Create customers
  const alice = await prisma.customer.create({
    data: {
      name: 'Alice Smith',
      address: '123 Main St, Anytown USA',
      phone: '555-1234',
      email: 'alice@example.com',
    },
  });

  const bob = await prisma.customer.create({
    data: {
      name: 'Bob Jones',
      address: '456 Elm St, Anytown USA',
      phone: '555-5678',
      email: 'bob@example.com',
    },
  });

  // Create orders
  const aliceOrder = await prisma.order.create({
    data: {
      customer: {
        connect: { id: alice.id },
      },
      orderDate: new Date('2023-03-01'),
      totalPrice: 21.98,
      paymentInfo: 'Credit card ending in 1234',
    },
  });

  const bobOrder = await prisma.order.create({
    data: {
      customer: {
        connect: { id: bob.id },
      },
      orderDate: new Date('2023-03-02'),
      totalPrice: 7.99,
      paymentInfo: 'Credit card ending in 5678',
    },
  });

  // Add items to orders

  // Create reviews

  console.log('Example data has been seeded to the database');
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
