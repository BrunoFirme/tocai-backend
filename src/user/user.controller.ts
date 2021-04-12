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
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  public async getUsers() {
    return this.UserService.getUsers();
  }

  @Get('login/:email')
  public async getUserByEmail(@Param('email') email: string) {
    return this.UserService.getUserByEmail(email);
  }

  @Get(':id')
  public async getUserById(@Param('id') id: number) {
    return this.UserService.getUserById(id);
  }

  @Post()
  public postUser(@Body() user: UserDto) {
    return this.UserService.postUser(user);
  }

  @Put(':id')
  public async putUserById(@Param('id') id: number, @Query() query) {
    const field = query.field;
    const value = query.value;
    return this.UserService.putUserById(id, field, value);
  }

  @Delete(':id')
  public async deleteUserById(@Param('id') id: number) {
    return this.UserService.deleteUserById(id);
  }
}
