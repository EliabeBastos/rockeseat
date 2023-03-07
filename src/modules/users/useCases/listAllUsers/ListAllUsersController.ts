import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  public handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const userId = user_id as string;

      const users = this.listAllUsersUseCase.execute({ user_id: userId });

      return response.status(200).send(users);
    } catch (error) {
      response.status(error.status).json({ error: error.message });

      throw error;
    }
  }
}

export { ListAllUsersController };
