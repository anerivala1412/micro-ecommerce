import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  private client: ClientProxy;

  constructor() {}
  getAll(){
    return ['a','b']
  }
}
