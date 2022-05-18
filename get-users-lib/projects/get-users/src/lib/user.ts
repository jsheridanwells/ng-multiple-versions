export class User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  id: number;

  constructor(data: any) {
    this.loadPropertiesFromData(data);
  }

  private loadPropertiesFromData(data: any) {
    Object.keys(data).forEach(key => {
      switch(key) {
        case 'first_name':
          this.firstName = data[key];
          break;
        case 'last_name':
          this.lastName = data[key];
          break;
        case 'email':
          this.email = data[key];
          break;
        case 'avatar':
          this.avatar = data[key];
          break;
        case 'id':
          this.id = parseInt(data[key]);
          break;
        default:
          return;
      }
    })
  }
}
