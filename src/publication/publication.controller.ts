import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { User } from '@prisma/client';
import { User as UserRequest } from 'src/auth/decorators/user.decorators';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() createPublicationDto: CreatePublicationDto,
    @UserRequest() user: User,
  ) {
    return this.publicationService.create(createPublicationDto, user.id);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAllByUser(@UserRequest() user: User) {
    return this.publicationService.findAllByUser(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationService.remove(+id);
  }
}
