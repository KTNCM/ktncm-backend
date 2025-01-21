import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destination } from '../entities/destination.entity';
import { CreateDestinationDto } from '../dto/create-destination.dto';

@Injectable()
export class DestinationsService {
  constructor(
    @InjectRepository(Destination)
    private destinationsRepository: Repository<Destination>,
  ) {}

  async create(createDestinationDto: CreateDestinationDto): Promise<Destination> {
    const destination = this.destinationsRepository.create(createDestinationDto);
    return this.destinationsRepository.save(destination);
  }

  async findAll(): Promise<Destination[]> {
    return this.destinationsRepository.find();
  }

  async findOne(name: string): Promise<Destination> {
    return this.destinationsRepository.findOne({ 
      where: { name },
      relations: ['userActions']
    });
  }
} 