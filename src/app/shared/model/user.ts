export class User{
  name?: String;
  login?: String;
  pass?: String;
  apartament?: number;
  is_adm?: boolean;

  constructor(name: String, login: String, pass: String, apartament: number) {
    this.name = name;
    this.login = login;
    this.pass = pass;
    this.apartament = apartament;
  }
}
