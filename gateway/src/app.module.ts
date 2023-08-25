import { Module } from '@nestjs/common';
import { UserGatewayModule } from './user-gateway/user-gateway.module';

@Module({
  imports: [UserGatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
