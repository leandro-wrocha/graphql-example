import { container } from 'tsyringe';

import { IUserRepository } from '../../modules/user/repositories/IUserRepository';
import { UserRepository } from '../../modules/user/repositories/UserRepository';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
