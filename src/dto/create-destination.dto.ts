import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateDestinationDto {
  @ApiProperty({ example: 'Paris' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'The city of lights' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'contact@paris.com' })
  @IsString()
  @IsOptional()
  contact?: string;

  @ApiProperty({ example: '1 Eiffel Tower Street' })
  @IsString()
  address: string;

  @ApiProperty({ example: 'http://sample.com' })
  @IsString()
  url: string;
} 