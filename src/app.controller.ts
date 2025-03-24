import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('deployments')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('notify')
  notifyDeployment(@Body() deploymentData: any) {
    console.log('Deployment Notification Received:', deploymentData);
    return {
      message: 'Deployment data received successfully',
      data: deploymentData,
    };
  }
}
