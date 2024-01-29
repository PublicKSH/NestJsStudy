import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class VerifyEmailDto {
  signupVerifyToken: string;
}

export class UserLoginDto {
  email: string;
  password: string;
}
