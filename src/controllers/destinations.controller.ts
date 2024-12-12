import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateDestinationDto } from '../dto/create-destination.dto';
import { DestinationsService } from '../services/destinations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('destinations')
@ApiBearerAuth()
@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new destination' })
  @ApiResponse({ status: 201, description: 'Destination successfully created' })
  async create(@Body() createDestinationDto: CreateDestinationDto) {
    return this.destinationsService.create(createDestinationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all destinations' })
  async findAll() {
    return this.destinationsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get destination by id' })
  async findOne(@Param('id') id: string) {
    return this.destinationsService.findOne(+id);
  }
} 