import { HttpError } from "../../../../shared/errors/HttpError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new HttpError("User not found", 404);

    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
