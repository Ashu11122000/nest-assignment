import { IsEmail, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  event!: string;

  @IsString()
  message!: string;

  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsOptional()
  @IsEmail()
  email?: string;
}
