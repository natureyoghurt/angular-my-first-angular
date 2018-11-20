import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonDataService } from '../person-data.service';

@Component({
  selector: 'app-person-list',
  template: `
  <p style="font-weight:bold;color:red">
    TODO: Go to the PersonListComponent and extract the hardcoded PERSONS-list into a PersonDataService
  </p>
  <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Github</th>
  </tr>
  <tr *ngFor="let person of persons" (click)="onPersonClick(person)">
    <td>{{person.firstname}}</td>
    <td>{{person.lastname}}</td>
    <td>{{person.githubaccount}}</td>
  </tr>
</table>`,
providers: [PersonDataService]
}
)
export class PersonListComponent implements OnInit {
  persons: Person[];
  selectedPerson: Person;

  constructor(private personDataService: PersonDataService) {}

  ngOnInit() {
    this.persons = this.personDataService.loadPersons();
  }

  onPersonClick(person: Person) {
    this.selectedPerson = person;
  }
}