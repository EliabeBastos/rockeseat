import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      const user = this.createUserUseCase.execute({ name, email });

      return response.status(201).send(user);
    } catch (error) {
      response.status(error.status);
      response.json({ error: error.message });

      throw error;
    }
  }
}

export { CreateUserController };
