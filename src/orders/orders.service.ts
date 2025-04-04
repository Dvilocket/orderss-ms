import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto) {
    return "Crea una orden desde el microservicio orden";
  }
}
