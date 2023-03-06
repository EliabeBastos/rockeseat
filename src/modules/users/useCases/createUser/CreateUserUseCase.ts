import { CustomError } from "../../../../errors/CustomError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const checkIfUserExists = this.usersRepository.findByEmail(email);

    if (checkIfUserExists) {
      throw new CustomError("User already exists", 400);
    }

    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
