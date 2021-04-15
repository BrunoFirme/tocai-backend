import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { usersService } from '../../services/usersService';
import { usersDto } from '../../dtos/usersDto';

@Controller('users')
export class usersController {
  constructor(private usersService: usersService) {}

  @Get()
  public async getUsers() {
    return this.usersService.getUsers();
  }

  @Get('login/:email')
  public async getUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Get(':id')
  public async getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  public postUser(@Body() user: usersDto) {
    return this.usersService.postUser(user);
  }

  @Put(':id')
  public async putUserById(@Param('id') id: number, @Query() query) {
    const field = query.field;
    const value = query.value;
    return this.usersService.putUserById(id, field, value);
  }

  @Delete(':id')
  public async deleteUserById(@Param('id') id: number) {
    return this.usersService.deleteUserById(id);
  }
}
