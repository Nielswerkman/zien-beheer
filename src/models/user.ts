export class User {
  id: number;
  firstName: String;
  lastName: String;
  infix: String;
  email: String;
  password: String;
  study: String;
  active: Boolean;
  moderator: Boolean;

  constructor(id?: number, firstName?: String, infix?: String, lastName?: String, email?: String, password?: String,
              study?: String, active?: Boolean, moderator?: Boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.infix = infix;
    this.email = email;
    this.password = password;
    this.study = study;
    this.active = active;
    this.moderator = moderator;
  }
}
