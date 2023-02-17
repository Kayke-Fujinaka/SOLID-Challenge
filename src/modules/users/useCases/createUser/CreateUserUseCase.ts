import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    if (!name || !email) throw new Error("Should have a name and an email!");

    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error("User already exists!");

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
