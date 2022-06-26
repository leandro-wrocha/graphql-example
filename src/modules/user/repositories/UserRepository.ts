import { PrismaClient } from "@prisma/client"; 

import { UserDTO } from "../dtos";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: UserDTO): Promise<void> {
  //  await this.prisma.user.create({
  //    data
  //  });
  }
}