import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserGatewayService } from './user-gateway.service';
import { UserGatewayController } from './user-gateway.controller';

@Module({
  imports: [HttpModule],
  providers: [UserGatewayService],
  controllers: [UserGatewayController],
})
export class UserGatewayModule {}
