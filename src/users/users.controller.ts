import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpCode,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  UpdateUserDto,
  VerifyEmailDto,
  UserLoginDto,
} from './dto/user.dto';
import { UserInfo } from './UserInfo';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    const { name, email, password } = createUserDto;
    console.log(name, email, password);
    return;
    // return await this.usersService.create(createUserDto);
  }

  @Post('verify-email')
  async verifyEmail(@Query() verifyEmailDto: VerifyEmailDto): Promise<string> {
    console.log(verifyEmailDto);
    return;
    // return await this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(@Query() userLoginDto: UserLoginDto): Promise<string> {
    console.log(userLoginDto);
    return;
    // return await this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Res() res) {
    const users = this.usersService.findAll();
    return res.status(200).send(users);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserInfo> {
    if (+id < 1) {
      throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
    }

    // return this.usersService.findOne(+id);
    return;
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
