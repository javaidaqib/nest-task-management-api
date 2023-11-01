import { IsOptional, IsEnum, IsString } from 'class-validator';

import { TaskStatus } from '../tasks.model';

export class GetTaskFilterDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: string;
}
