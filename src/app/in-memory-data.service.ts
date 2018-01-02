import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, name: 'Gulab Jamun' , price: 10, description:'Made of powdered milk'},
      { id: 2, name: 'Chilli Chicken', price: 15, description: 'Boneless chicken with spices'},
      { id: 3, name: 'Tomato soup', price: 8, description: 'Smashed tomato soup'}];
    const customers = [
      {id:1, name:'Ganesh'},
      {id:2, name:'srinivas'}
      ];
    return {items,customers};
  }
}
