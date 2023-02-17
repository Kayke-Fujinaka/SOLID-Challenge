import { HttpError } from "../../../../shared/errors/HttpError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    if (!name || !email)
      throw new HttpError("Should have a name and an email!", 400);

    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new HttpError("User already exists!", 400);

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
