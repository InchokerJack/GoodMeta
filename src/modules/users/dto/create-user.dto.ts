import { IsEmail, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;
  @IsString()
  @ApiProperty()
  password: string;
  @ApiProperty()
  @IsString()
  walletAddress: string;
  @ApiProperty()
  @IsEnum(Roles)
  role: string;
}
