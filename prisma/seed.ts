import { prisma } from '../src/database/prismaDatabase'
import { Brand, categories, Model, Role, VehicleStatus } from '../generated/prisma'
import * as bcrypt from 'bcrypt'

async function main() {
    console.log('Iniciando o seed...');
  // Criar categorias
  const categoriasData = [
    { name: "Hatch", description: "Carros compactos com porta-malas integrado ao compartimento de passageiros." },
    { name: "Sedan", description: "Carros com três volumes distintos: motor, cabine e porta-malas." },
    { name: "SUV", description: "Veículos utilitários esportivos, maiores, com maior altura em relação ao solo." },
    { name: "Pickup", description: "Veículos com caçamba aberta para transporte de carga." },
    { name: "Conversível", description: "Carros com teto retrátil, geralmente esportivos." },
    { name: "Coupé", description: "Modelos com duas portas e visual mais esportivo." },
    { name: "Minivan", description: "Veículos voltados ao transporte familiar, com amplo espaço interno." },
    { name: "Wagon", description: "Carros com traseira alongada e grande capacidade de bagagem." },
    { name: "Utilitário", description: "Veículos voltados ao trabalho, com foco em funcionalidade e carga." },
    { name: "Luxo", description: "Veículos de alto padrão, com foco em conforto, tecnologia e acabamento premium." },
    { name: "Elétrico", description: "Veículos movidos exclusivamente por energia elétrica." },
    { name: "Híbrido", description: "Modelos que combinam motor a combustão com motor elétrico." },
    { name: "Comercial Leve", description: "Veículos pequenos voltados ao transporte de cargas ou passageiros." },
    { name: "Esportivo", description: "Carros de alta performance e visual agressivo." },
    { name: "Off-road", description: "Veículos preparados para terrenos acidentados, com tração especial." }
  ];

  for (const cat of categoriasData) {
    await prisma.categories.create({
      data: {
        name: cat.name,
        description: cat.description,
      },
    });
  }
  console.log('Categorias criadas com sucesso!');

  // Criar veículos (associando a categorias existentes)
  const categoriasCriadas: categories[] = await prisma.categories.findMany();
  const hatch = categoriasCriadas.find((cat) => cat.name === 'Hatch');
  const sedan = categoriasCriadas.find((cat) => cat.name === 'Sedan');
  const suv = categoriasCriadas.find((cat) => cat.name === 'SUV');
  const pickup = categoriasCriadas.find((cat) => cat.name === 'Pickup');
  const eletrico = categoriasCriadas.find((cat) => cat.name === 'Elétrico');
  const luxo = categoriasCriadas.find((cat) => cat.name === 'Luxo');
  function generateLicensePlate() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    let plate = '';
    for (let i = 0; i < 3; i++) {
      plate += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    for (let i = 0; i < 4; i++) {
      plate += nums.charAt(Math.floor(Math.random() * nums.length));
    }
    return plate;
  }

  if (hatch && sedan && suv && pickup && eletrico && luxo) {
    const veiculosData = [
      // Hatch
      { brand: Brand.FIAT, model: Model.MOBI, category_id: hatch.id, manufacture_year: new Date('2023-01-01'), color: 'Branco', diary_value: 80.00, status: VehicleStatus.avaliable, kilometers: 10000, license_plate: generateLicensePlate() },
      { brand: Brand.VOLKSWAGEN, model: Model.GOL, category_id: hatch.id, manufacture_year: new Date('2022-05-15'), color: 'Prata', diary_value: 85.00, status: VehicleStatus.avaliable, kilometers: 15000, license_plate: generateLicensePlate() },
      { brand: Brand.CHEVROLET, model: Model.ONIX, category_id: hatch.id, manufacture_year: new Date('2024-03-01'), color: 'Azul', diary_value: 90.00, status: VehicleStatus.avaliable, kilometers: 5000, license_plate: generateLicensePlate() },
      { brand: Brand.RENAULT, model: Model.KWID, category_id: hatch.id, manufacture_year: new Date('2023-11-10'), color: 'Vermelho', diary_value: 75.00, status: VehicleStatus.avaliable, kilometers: 12000, license_plate: generateLicensePlate() },
      // Sedan
      { brand: Brand.CHEVROLET, model: Model.CRONOS, category_id: sedan.id, manufacture_year: new Date('2024-02-20'), color: 'Preto', diary_value: 120.00, status: VehicleStatus.avaliable, kilometers: 5000, license_plate: generateLicensePlate() },
      { brand: Brand.VOLKSWAGEN, model: Model.VOYAGE, category_id: sedan.id, manufacture_year: new Date('2023-07-01'), color: 'Cinza', diary_value: 110.00, status: VehicleStatus.avaliable, kilometers: 9000, license_plate: generateLicensePlate() },
      { brand: Brand.FIAT, model: Model.SIENA, category_id: sedan.id, manufacture_year: new Date('2022-12-01'), color: 'Branco', diary_value: 105.00, status: VehicleStatus.avaliable, kilometers: 20000, license_plate: generateLicensePlate() },
      // SUV
      { brand: Brand.HYUNDAI, model: Model.CRETA, category_id: suv.id, manufacture_year: new Date('2023-08-10'), color: 'Vermelho', diary_value: 150.00, status: VehicleStatus.avaliable, kilometers: 8000, license_plate: generateLicensePlate() },
      { brand: Brand.JEEP, model: Model.TRACKER, category_id: suv.id, manufacture_year: new Date('2024-01-15'), color: 'Verde', diary_value: 160.00, status: VehicleStatus.avaliable, kilometers: 3000, license_plate: generateLicensePlate() },
      { brand: Brand.NISSAN, model: Model.TUCSON, category_id: suv.id, manufacture_year: new Date('2022-10-01'), color: 'Prata', diary_value: 140.00, status: VehicleStatus.avaliable, kilometers: 18000, license_plate: generateLicensePlate() },
      // Pickup
      { brand: Brand.FIAT, model: Model.STRADA, category_id: pickup.id, manufacture_year: new Date('2023-05-20'), color: 'Vermelho', diary_value: 130.00, status: VehicleStatus.avaliable, kilometers: 11000, license_plate: generateLicensePlate() },
      { brand: Brand.VOLKSWAGEN, model: Model.SAVEIRO, category_id: pickup.id, manufacture_year: new Date('2022-09-01'), color: 'Branco', diary_value: 125.00, status: VehicleStatus.avaliable, kilometers: 22000, license_plate: generateLicensePlate() },
      { brand: Brand.FORD, model: Model.RANGER, category_id: pickup.id, manufacture_year: new Date('2024-04-01'), color: 'Azul', diary_value: 180.00, status: VehicleStatus.avaliable, kilometers: 2000, license_plate: generateLicensePlate() },
      // Elétrico
      { brand: Brand.BYD, model: Model.TORO, category_id: eletrico.id, manufacture_year: new Date('2024-01-01'), color: 'Cinza', diary_value: 200.00, status: VehicleStatus.avaliable, kilometers: 1500, license_plate: generateLicensePlate() },
      { brand: Brand.TESLA, model: Model.PULSE, category_id: eletrico.id, manufacture_year: new Date('2023-10-15'), color: 'Preto', diary_value: 250.00, status: VehicleStatus.avaliable, kilometers: 3000, license_plate: generateLicensePlate() },
      // Luxo
      { brand: Brand.BMW, model: Model.PASSAT, category_id: luxo.id, manufacture_year: new Date('2023-06-01'), color: 'Prata', diary_value: 300.00, status: VehicleStatus.avaliable, kilometers: 6000, license_plate: generateLicensePlate() },
      { brand: Brand.MERCEDES_BENZ, model: Model.AMAROK, category_id: luxo.id, manufacture_year: new Date('2024-05-01'), color: 'Branco', diary_value: 350.00, status: VehicleStatus.avaliable, kilometers: 1000, license_plate: generateLicensePlate() },
      { brand: Brand.AUDI, model: Model.JETTA, category_id: luxo.id, manufacture_year: new Date('2022-11-01'), color: 'Preto', diary_value: 280.00, status: VehicleStatus.avaliable, kilometers: 12000, license_plate: generateLicensePlate() },
      { brand: Brand.VOLVO, model: Model.GOLF, category_id: luxo.id, manufacture_year: new Date('2023-03-15'), color: 'Azul', diary_value: 320.00, status: VehicleStatus.avaliable, kilometers: 9000, license_plate: generateLicensePlate() },
      { brand: Brand.LAND_ROVER, model: Model.FIESTA, category_id: suv.id, manufacture_year: new Date('2023-09-20'), color: 'Prata', diary_value: 220.00, status: VehicleStatus.avaliable, kilometers: 7000, license_plate: generateLicensePlate() },
      { brand: Brand.FIAT, model: Model.MOBI, category_id: hatch.id, manufacture_year: new Date('2023-01-01'), color: 'Branco', diary_value: 80.00, status: VehicleStatus.avaliable, kilometers: 10000 },
      { brand: Brand.VOLKSWAGEN, model: Model.GOL, category_id: hatch.id, manufacture_year: new Date('2022-05-15'), color: 'Prata', diary_value: 85.00, status: VehicleStatus.avaliable, kilometers: 15000 },
      { brand: Brand.CHEVROLET, model: Model.ONIX, category_id: hatch.id, manufacture_year: new Date('2024-03-01'), color: 'Azul', diary_value: 90.00, status: VehicleStatus.avaliable, kilometers: 5000 },
      { brand: Brand.RENAULT, model: Model.KWID, category_id: hatch.id, manufacture_year: new Date('2023-11-10'), color: 'Vermelho', diary_value: 75.00, status: VehicleStatus.avaliable, kilometers: 12000 },
      // Sedan
      { brand: Brand.CHEVROLET, model: Model.CRONOS, category_id: sedan.id, manufacture_year: new Date('2024-02-20'), color: 'Preto', diary_value: 120.00, status: VehicleStatus.avaliable, kilometers: 5000 },
      { brand: Brand.VOLKSWAGEN, model: Model.VOYAGE, category_id: sedan.id, manufacture_year: new Date('2023-07-01'), color: 'Cinza', diary_value: 110.00, status: VehicleStatus.avaliable, kilometers: 9000 },
      { brand: Brand.FIAT, model: Model.SIENA, category_id: sedan.id, manufacture_year: new Date('2022-12-01'), color: 'Branco', diary_value: 105.00, status: VehicleStatus.avaliable, kilometers: 20000 },
      // SUV
      { brand: Brand.HYUNDAI, model: Model.CRETA, category_id: suv.id, manufacture_year: new Date('2023-08-10'), color: 'Vermelho', diary_value: 150.00, status: VehicleStatus.avaliable, kilometers: 8000 },
      { brand: Brand.JEEP, model: Model.TRACKER, category_id: suv.id, manufacture_year: new Date('2024-01-15'), color: 'Verde', diary_value: 160.00, status: VehicleStatus.avaliable, kilometers: 3000 },
      { brand: Brand.NISSAN, model: Model.TUCSON, category_id: suv.id, manufacture_year: new Date('2022-10-01'), color: 'Prata', diary_value: 140.00, status: VehicleStatus.avaliable, kilometers: 18000 },
      // Pickup
      { brand: Brand.FIAT, model: Model.STRADA, category_id: pickup.id, manufacture_year: new Date('2023-05-20'), color: 'Vermelho', diary_value: 130.00, status: VehicleStatus.avaliable, kilometers: 11000 },
      { brand: Brand.VOLKSWAGEN, model: Model.SAVEIRO, category_id: pickup.id, manufacture_year: new Date('2022-09-01'), color: 'Branco', diary_value: 125.00, status: VehicleStatus.avaliable, kilometers: 22000 },
      { brand: Brand.FORD, model: Model.RANGER, category_id: pickup.id, manufacture_year: new Date('2024-04-01'), color: 'Azul', diary_value: 180.00, status: VehicleStatus.avaliable, kilometers: 2000 },
      // Elétrico
      { brand: Brand.BYD, model: Model.TORO, category_id: eletrico.id, manufacture_year: new Date('2024-01-01'), color: 'Cinza', diary_value: 200.00, status: VehicleStatus.avaliable, kilometers: 1500 },
      { brand: Brand.TESLA, model: Model.PULSE, category_id: eletrico.id, manufacture_year: new Date('2023-10-15'), color: 'Preto', diary_value: 250.00, status: VehicleStatus.avaliable, kilometers: 3000 },
      // Luxo
      { brand: Brand.BMW, model: Model.PASSAT, category_id: luxo.id, manufacture_year: new Date('2023-06-01'), color: 'Prata', diary_value: 300.00, status: VehicleStatus.avaliable, kilometers: 6000 },
      { brand: Brand.MERCEDES_BENZ, model: Model.AMAROK, category_id: luxo.id, manufacture_year: new Date('2024-05-01'), color: 'Branco', diary_value: 350.00, status: VehicleStatus.avaliable, kilometers: 1000 },
      { brand: Brand.AUDI, model: Model.JETTA, category_id: luxo.id, manufacture_year: new Date('2022-11-01'), color: 'Preto', diary_value: 280.00, status: VehicleStatus.avaliable, kilometers: 12000 },
      { brand: Brand.VOLVO, model: Model.GOLF, category_id: luxo.id, manufacture_year: new Date('2023-03-15'), color: 'Azul', diary_value: 320.00, status: VehicleStatus.avaliable, kilometers: 9000 },
      { brand: Brand.LAND_ROVER, model: Model.FIESTA, category_id: suv.id, manufacture_year: new Date('2023-09-20'), color: 'Prata', diary_value: 220.00, status: VehicleStatus.avaliable, kilometers: 7000 },
    ].map(veiculo => ({
      ...veiculo,
      license_plate: generateLicensePlate(),
    }));

    for (const veiculo of veiculosData) {
      await prisma.vehicles.create({
        data: veiculo,
      });
    }
    console.log('Veículos criados com sucesso!');
  } else {
    console.warn('Algumas categorias não foram encontradas para criar veículos.');
  }
  if (hatch && sedan && suv && pickup && eletrico && luxo) {
    const veiculosData = [
      // Hatch
      { brand: Brand.FIAT, model: Model.MOBI, category_id: hatch.id, manufacture_year: new Date('2023-01-01'), color: 'Branco', diary_value: 80.00, status: VehicleStatus.avaliable, kilometers: 10000 },
      { brand: Brand.VOLKSWAGEN, model: Model.GOL, category_id: hatch.id, manufacture_year: new Date('2022-05-15'), color: 'Prata', diary_value: 85.00, status: VehicleStatus.avaliable, kilometers: 15000 },
      { brand: Brand.CHEVROLET, model: Model.ONIX, category_id: hatch.id, manufacture_year: new Date('2024-03-01'), color: 'Azul', diary_value: 90.00, status: VehicleStatus.avaliable, kilometers: 5000 },
      { brand: Brand.RENAULT, model: Model.KWID, category_id: hatch.id, manufacture_year: new Date('2023-11-10'), color: 'Vermelho', diary_value: 75.00, status: VehicleStatus.avaliable, kilometers: 12000 },
      // Sedan
      { brand: Brand.CHEVROLET, model: Model.CRONOS, category_id: sedan.id, manufacture_year: new Date('2024-02-20'), color: 'Preto', diary_value: 120.00, status: VehicleStatus.avaliable, kilometers: 5000 },
      { brand: Brand.VOLKSWAGEN, model: Model.VOYAGE, category_id: sedan.id, manufacture_year: new Date('2023-07-01'), color: 'Cinza', diary_value: 110.00, status: VehicleStatus.avaliable, kilometers: 9000 },
      { brand: Brand.FIAT, model: Model.SIENA, category_id: sedan.id, manufacture_year: new Date('2022-12-01'), color: 'Branco', diary_value: 105.00, status: VehicleStatus.avaliable, kilometers: 20000 },
      // SUV
      { brand: Brand.HYUNDAI, model: Model.CRETA, category_id: suv.id, manufacture_year: new Date('2023-08-10'), color: 'Vermelho', diary_value: 150.00, status: VehicleStatus.avaliable, kilometers: 8000 },
      { brand: Brand.JEEP, model: Model.TRACKER, category_id: suv.id, manufacture_year: new Date('2024-01-15'), color: 'Verde', diary_value: 160.00, status: VehicleStatus.avaliable, kilometers: 3000 },
      { brand: Brand.NISSAN, model: Model.TUCSON, category_id: suv.id, manufacture_year: new Date('2022-10-01'), color: 'Prata', diary_value: 140.00, status: VehicleStatus.avaliable, kilometers: 18000 },
      // Pickup
      { brand: Brand.FIAT, model: Model.STRADA, category_id: pickup.id, manufacture_year: new Date('2023-05-20'), color: 'Vermelho', diary_value: 130.00, status: VehicleStatus.avaliable, kilometers: 11000 },
      { brand: Brand.VOLKSWAGEN, model: Model.SAVEIRO, category_id: pickup.id, manufacture_year: new Date('2022-09-01'), color: 'Branco', diary_value: 125.00, status: VehicleStatus.avaliable, kilometers: 22000 },
      { brand: Brand.FORD, model: Model.RANGER, category_id: pickup.id, manufacture_year: new Date('2024-04-01'), color: 'Azul', diary_value: 180.00, status: VehicleStatus.avaliable, kilometers: 2000 },
      // Elétrico
      { brand: Brand.BYD, model: Model.TORO, category_id: eletrico.id, manufacture_year: new Date('2024-01-01'), color: 'Cinza', diary_value: 200.00, status: VehicleStatus.avaliable, kilometers: 1500 },
      { brand: Brand.TESLA, model: Model.PULSE, category_id: eletrico.id, manufacture_year: new Date('2023-10-15'), color: 'Preto', diary_value: 250.00, status: VehicleStatus.avaliable, kilometers: 3000 },
      // Luxo
      { brand: Brand.BMW, model: Model.PASSAT, category_id: luxo.id, manufacture_year: new Date('2023-06-01'), color: 'Prata', diary_value: 300.00, status: VehicleStatus.avaliable, kilometers: 6000 },
      { brand: Brand.MERCEDES_BENZ, model: Model.AMAROK, category_id: luxo.id, manufacture_year: new Date('2024-05-01'), color: 'Branco', diary_value: 350.00, status: VehicleStatus.avaliable, kilometers: 1000 },
      { brand: Brand.AUDI, model: Model.JETTA, category_id: luxo.id, manufacture_year: new Date('2022-11-01'), color: 'Preto', diary_value: 280.00, status: VehicleStatus.avaliable, kilometers: 12000 },
      { brand: Brand.VOLVO, model: Model.GOLF, category_id: luxo.id, manufacture_year: new Date('2023-03-15'), color: 'Azul', diary_value: 320.00, status: VehicleStatus.avaliable, kilometers: 9000 },
      { brand: Brand.LAND_ROVER, model: Model.FIESTA, category_id: suv.id, manufacture_year: new Date('2023-09-20'), color: 'Prata', diary_value: 220.00, status: VehicleStatus.avaliable, kilometers: 7000 },
    ].map(veiculo => ({
      ...veiculo,
      license_plate: generateLicensePlate(),
    }));

    for (const veiculo of veiculosData) {
      await prisma.vehicles.create({
        data: veiculo,
      });
    }
    console.log('Veículos criados com sucesso!');
  } else {
    console.warn('Algumas categorias não foram encontradas para criar veículos.');
  }

  // Criar usuários
  const saltRounds = 10;
  const passwordTeste = await bcrypt.hash('teste', saltRounds);

  const usuariosData = [
    {
      name: 'Admin Teste',
      email: 'admin@teste.com',
      cpf: '11111111111',
      birthdate: new Date('1990-01-01'),
      password_hash: passwordTeste,
      role: Role.admin,
    },
    {
      name: 'Atendente Teste',
      email: 'atendente@teste.com',
      cpf: '22222222222',
      birthdate: new Date('1992-03-10'),
      password_hash: passwordTeste,
      role: Role.attendant,
    },
    {
      name: 'Cliente Teste',
      email: 'cliente@teste.com',
      cpf: '33333333333',
      birthdate: new Date('1995-07-22'),
      password_hash: passwordTeste,
      role: Role.client,
    },
  ];

  for (const usuario of usuariosData) {
    await prisma.users.create({
      data: usuario,
    });
  }
  console.log('Usuários criados com sucesso!');
}

main()
  .catch((e: any) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })