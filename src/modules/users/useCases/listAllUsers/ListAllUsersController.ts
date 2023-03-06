import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  public handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.body;

      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).send(users);
    } catch (error) {
      response.status(error.status);
      response.json({ error: error.message });

      throw error;
    }
  }
}

export { ListAllUsersController };
