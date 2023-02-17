import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id: id } = request.headers;

      const user_id = String(id);

      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(error.statusCode).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
