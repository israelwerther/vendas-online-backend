import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  numberAddress: number;
  cep: string;

  constructor(addess: AddressEntity) {
    this.complement = addess.complement;
    this.numberAddress = addess.numberAddress;
    this.cep = addess.cep;
  }
}
