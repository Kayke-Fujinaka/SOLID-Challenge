import { HttpError } from "../../../../shared/errors/HttpError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new HttpError("User not found!", 404);

    if (!user.admin) throw new HttpError("User is not Admin!", 400);

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
