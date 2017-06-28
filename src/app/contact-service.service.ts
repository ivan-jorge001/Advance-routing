import { Injectable } from '@angular/core';
import * as _ from 'underscore';//<--
/*i have no idea why we use this    | i have to (nom install underscore --save
                                        then i added it to my src/typings.d.ts)*/

@Injectable()
export class ContactServiceService {
  contacts: Object[] = [{ id: 100, name: 'Andy' }, { id: 201, name: 'George' }, { id: 302, name: 'Max' }];
  constructor() { }
  getList(): Object[] {
    return this.contacts
  }
  get(idContact: number): Object {
    return _.findWhere(this.contacts, { id: idContact })
  }
  edit(contact) {
    let idx = _.findIndex(this.contacts, { id: contact.id });
    if (idx >= 0) {
      this.contacts[idx] = contact
    }
    return this.contacts[idx];
  }
}
