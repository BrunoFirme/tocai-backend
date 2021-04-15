import { user } from '../entities/usersEntity';
import { EntityRepository, Repository } from 'typeorm';
import { usersDto } from '../../../dtos/usersDto';

@EntityRepository(user)
export class usersRepository extends Repository<user> {
  createusers = async (usersDto: usersDto) => {
    return await this.save(usersDto);
  };
}
