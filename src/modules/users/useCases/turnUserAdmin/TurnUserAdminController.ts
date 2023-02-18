import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id: id } = request.params;

      const user_id = String(id);

      const admin = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(admin);
    } catch (error) {
      return response.status(error.statusCode).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
