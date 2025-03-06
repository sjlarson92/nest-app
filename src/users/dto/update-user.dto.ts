import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

/*
 By extending PartialType and passing CreateUserDto
 this creates a class with optional fields
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
