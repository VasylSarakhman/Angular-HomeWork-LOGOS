import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(contacts: Array<any>, searchPhone?: string): any {
    if (!contacts) return [];
    if (!searchPhone) return contacts;
    return contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(searchPhone.toLowerCase()) ||
      contact.secondName.toLowerCase().includes(searchPhone.toLowerCase()) ||
      contact.phoneNumber.includes(searchPhone)
    )
  }
}