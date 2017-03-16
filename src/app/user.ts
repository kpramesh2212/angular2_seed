export class User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address = new Address();
}
export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

