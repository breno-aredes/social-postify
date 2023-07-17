import { IsBoolean, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreatePublicationDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  dateToPublish: string;

  @IsBoolean()
  published: boolean;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;

  userId: number;
}
