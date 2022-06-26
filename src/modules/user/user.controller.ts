import { container } from "tsyringe";
import { Request, Response } from "express";

import { UserDTO } from "./dtos";
import { UserService } from "./user.service";

export class UserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: UserDTO = request.body;
    const userService = container.resolve(UserService);

    await userService.execute(data);

    return response.status(201).end();
  }
}
