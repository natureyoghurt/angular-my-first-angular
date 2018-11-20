import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonDataService {
/*
TODO: Api Service anbinden (Promise oder Observable)
Api kann über PersonEditorWebApi/launchserver.bat gestartet werden (NodeJS backend)
*/

  readonly webUrl: string = 'http://localhost:8180/api/Persons';

  constructor(private httpClient: HttpClient) {}

  loadPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.webUrl);
  }
}
