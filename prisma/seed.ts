import { prisma } from '../src/database/prismaDatabase';
import * as bcrypt from 'bcrypt';
import { PaymentMethod, PaymentStatus, PaymentType, Role, VehicleStatus, RentalStatus, Brand, Model } from '@prisma/client';
import { faker } from '@faker-js/faker';

function randomPlate(): string {
  const letters = faker.string.alpha({ length: 3, casing: 'upper' });
  const numbers = faker.string.numeric(4);
  return `${letters}${numbers}`;
}

function randomDateBetween(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

(async () => {
  try {
    console.log('🧹 Limpando dados antigos...');
    await prisma.payments.deleteMany();
    await prisma.rentals.deleteMany();
    await prisma.vehicles.deleteMany();
    await prisma.categories.deleteMany();
    await prisma.users.deleteMany();

    console.log('💡 Gerando categorias...');
    const categoryNames = ['Hatch', 'Sedan', 'SUV', 'Pickup', 'Elétrico', 'Luxo'];
    const categories = await Promise.all(
      categoryNames.map((name) =>
        prisma.categories.create({ data: { name, description: `${name} desc.` } })
      )
    );

    console.log('🚘 Gerando 20 veículos...');
    const vehicles = await Promise.all(
      Array.from({ length: 20 }).map(() =>
        prisma.vehicles.create({
          data: {
            brand: faker.helpers.enumValue(Brand),
            model: faker.helpers.enumValue(Model),
            license_plate: randomPlate(),
            category_id: faker.helpers.arrayElement(categories).id,
            manufacture_year: randomDateBetween(new Date(2018, 0, 1), new Date()),
            color: faker.color.human(),
            diary_value: faker.number.float({ min: 50, max: 400 }),
            status: VehicleStatus.avaliable,
            kilometers: faker.number.int({ min: 1000, max: 50000 }),
          },
        })
      )
    );

    console.log('👤 Gerando 20 usuários...');
    const passwordHash = await bcrypt.hash('teste123', 10);
    const roles = [Role.client, Role.attendant, Role.admin];
    const users = await Promise.all(
      Array.from({ length: 20 }).map(() =>
        prisma.users.create({
          data: {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            cpf: faker.string.numeric(11),
            birthdate: faker.date.birthdate({ min: 1960, max: 2005, mode: 'age' }),
            password_hash: passwordHash,
            phone: faker.phone.number(),
            role: faker.helpers.arrayElement(roles),
          },
        })
      )
    );

    console.log('📆 Gerando 20 locações...');
    const rentals = await Promise.all(
      Array.from({ length: 20 }).map(() => {
        const user = faker.helpers.arrayElement(users);
        const vehicle = faker.helpers.arrayElement(vehicles);
        const checkout = randomDateBetween(new Date(2023, 0, 1), new Date());
        const checkin = new Date(checkout.getTime() + 1000 * 60 * 60 * 24 * faker.number.int({ min: 1, max: 10 }));
        return prisma.rentals.create({
          data: {
            user_id: user.id,
            vehicle_id: vehicle.id,
            check_out_date: checkout,
            expected_check_in_date: checkin,
            check_in_date: checkin,
            start_mileage: vehicle.kilometers,
            end_mileage: vehicle.kilometers.plus(faker.number.int({ min: 50, max: 500 })),
            daily_rate: vehicle.diary_value,
            status: faker.helpers.enumValue(RentalStatus),
          },
        });
      })
    );

    console.log('💰 Gerando 20 pagamentos...');
    await Promise.all(
      Array.from({ length: 20 }).map(() => {
        const rental = faker.helpers.arrayElement(rentals);
        return prisma.payments.create({
          data: {
            rental_id: rental.id,
            amount: faker.number.float({ min: 100, max: 2000 }),
            method_type: faker.helpers.enumValue(PaymentMethod),
            status: faker.helpers.enumValue(PaymentStatus),
            payment_type: faker.helpers.enumValue(PaymentType),
          },
        });
      })
    );

    console.log('✅ Seed finalizada com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao rodar a seed:', error);
  } finally {
    await prisma.$disconnect();
  }
})()