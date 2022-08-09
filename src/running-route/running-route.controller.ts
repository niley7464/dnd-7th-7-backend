import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { CreateRunningRouteDto } from './dto/create-running-route.dto';
import { RunningRouteService } from './running-route.service';

@Controller('running-route')
export class RunningRouteController {
  constructor(private readonly runningRouteService: RunningRouteService) {}

  @Post()
  @FormDataRequest()
  async create(@Body() createRunningRouteDto: CreateRunningRouteDto) {
    return await this.runningRouteService.create(createRunningRouteDto);
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.runningRouteService.getById(id);
  }
}