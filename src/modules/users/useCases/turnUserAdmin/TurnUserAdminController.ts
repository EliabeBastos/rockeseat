import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const updatedUser = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).send(updatedUser);
    } catch (error) {
      response.status(error.status);
      response.json({ error: error.message });

      throw error;
    }
  }
}

export { TurnUserAdminController };
