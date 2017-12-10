export class School {
  active: boolean;
  city: string;
  country: string;
  email: string;
  houseNumber: string;
  id: number;
  locationLongitude: number;
  locationLatitude: number;
  name: string;
  phoneNumber: string;
  street: string;
  url: string;


  constructor(active: boolean, city: string, country: string, email: string, houseNumber: string, id: number, locationLongitude: number, locationLatitude: number, name: string, phoneNumber: string, street: string, url: string) {
    this.active = active;
    this.city = city;
    this.country = country;
    this.email = email;
    this.houseNumber = houseNumber;
    this.id = id;
    this.locationLongitude = locationLongitude;
    this.locationLatitude = locationLatitude;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.street = street;
    this.url = url;
  }
}
