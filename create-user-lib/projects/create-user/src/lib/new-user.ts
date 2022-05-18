export class NewUser {
  private firstNameVal: string;
  private lastNameVal: string;
  private emailVal: string;
  private avatarVal: string;

  constructor(
    firstName?: string,
    lastName?: string,
    email?: string,
    avatar?: string,
  ) {
    this.firstNameVal = firstName;
    this.lastNameVal = lastName;
    this.emailVal = email;
    this.avatarVal = avatar;
  }

  get payload(): any {
    const payload = {};
    payload['first_name'] = this.firstNameVal ? this.firstNameVal : '',
    payload['last_name'] = this.lastNameVal ? this.lastNameVal : '',
    payload['email'] = this.emailVal ? this.emailVal : '',
    payload['avatar'] = this.avatarVal ? this.avatarVal : ''
    return payload;
  }

  set firstName(val) {
    this.firstNameVal = val;
  }
  set lastName(val) {
    this.lastNameVal = val;
  }
  set email(val) {
    this.emailVal = val;
  }
  set avatar(val) {
    this.avatarVal = val;
  }
}
