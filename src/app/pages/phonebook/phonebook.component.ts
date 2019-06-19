// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-phonebook',
//   templateUrl: './phonebook.component.html',
//   styleUrls: ['./phonebook.component.css']
// })
// export class PhonebookComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { OrderPipe } from 'ngx-order-pipe';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  contacts: Array<IPhones>;
sortedContacts: Array<IPhones>;
  order: string = 'contact.firstName';
  reverse: boolean = false;
  firstName: string = '';
  secondName: string = '';
  phoneNumber: string = '';
  visability: boolean = true;
  searchPhone: string;
  editFirstName: string;
  editSecondName:string;
  editPhoneNumber: string;
  editIndex: number;
  createFirstName:string;
  createSecondName:string;
  createPhoneNumber: string;

  constructor(private orderPipe: OrderPipe) {
    this.contacts = _contacts;
    this.sortedContacts = orderPipe.transform(this.contacts, 'contact.firstName');
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {
  }
    public createPhone(): void {
      this.contacts.push(new Phones(this.createFirstName, this.createSecondName, this.createPhoneNumber));
      this.createFirstName = '';
      this.createSecondName = '';
      this.createPhoneNumber = '';
    }
  public removePhone(contact: IPhones): void {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }
  public editPhone(contact: IPhones): void {
    this.editIndex = this.contacts.indexOf(contact);
    this.editFirstName = contact.firstName;
    this.editSecondName = contact.secondName;
    this.editPhoneNumber = contact.phoneNumber;
  }
    public saveEditPhone(): void {
      this.contacts[this.editIndex].firstName = this.editFirstName;
      this.contacts[this.editIndex].secondName = this.editSecondName;
      this.contacts[this.editIndex].phoneNumber = this.editPhoneNumber;
    }
}

interface IPhones {
  firstName: string;
  secondName: string;
  phoneNumber: string;
}

class Phones implements IPhones {
  constructor(
    public firstName: string,
    public secondName: string,
    public phoneNumber: string
  ) { }
}

const _contacts: Array<IPhones> = [
  <IPhones>{
    firstName: 'Jaime',
    secondName: 'Lannister',
    phoneNumber: '0635613456'
  },
  <IPhones>{
    firstName: 'Daenerys',
    secondName: 'Targaryen',
    phoneNumber: '0978790012'
  },
  <IPhones>{
    firstName: 'Jon',
    secondName: 'Snow',
    phoneNumber: '0653784909'
  },
  <IPhones>{
    firstName: 'Arya',
    secondName: 'Stark',
    phoneNumber: '0935611586'
  },
  <IPhones>{
    firstName: 'Tyrion',
    secondName: 'Lannister',
    phoneNumber: '0509057435'
  },
  <IPhones>{
    firstName: 'Margaery',
    secondName: 'Tyrell',
    phoneNumber: '0958805792'
  },
  <IPhones>{
    firstName: 'Tormund',
    secondName: 'Giantsbane',
    phoneNumber: '0685468879'
  }
];