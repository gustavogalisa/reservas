export class User{
  name?: String;
  login?: String;
  pass?: String;
  apartment?: number;
  is_adm?: boolean;

  constructor(name: String, login: String, pass: String, apartment: number) {
    this.name = name;
    this.login = login;
    this.pass = pass;
    this.apartment = apartment;
  }
}
