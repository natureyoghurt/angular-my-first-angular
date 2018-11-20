import {Component, Input, OnInit} from '@angular/core';
import {Person} from './person';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonDataService } from './person-data.service';

@Component(
    {
        selector:'person-detail',
        template:`   
         <div *ngIf="person">
		       Person Details: 
           <div>
             Firstname: {{person.firstname}}
           </div> 
           <div>
             Firstname: {{person.lastname}}
           </div>
           <div>
             Github: {{person.githubaccount}}  
           </div>
        </div>
        <a href="/persons">back</a>`
        // TODO richtiger link (router)
    }
)
export class PersonDetailComponent implements OnInit
{
  constructor(private _route: ActivatedRoute, private _dataService: PersonDataService) {}

  ngOnInit(){
    this._route.params.forEach((p: Params) => {
      let personId = +p['id'];
      this.person = this._dataService.getPersonById(personId);
    });
  }
  
  @Input()
    person:Person;
}