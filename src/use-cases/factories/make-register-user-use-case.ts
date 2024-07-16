import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';
import { RegisterUseCase } from '../register-user.use-case';

export function makeRegisterUserUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const userUseCase = new RegisterUseCase(usersRepository);

  return userUseCase;
}
