import { Component, OnInit,Input, trigger, state, style, transition, animate } from '@angular/core';
import { SalesforceService, LoggerService, SOQL } from '../../services/index';
import { IWordItem } from '../../shared/sobjects';

interface WordItemCard extends IWordItem {
    state: string
}
export class Category {
  id: number;
  name: string;
}
const CATEGORIES: Category[] = [
  { id: 1, name: 'General' },
  { id: 2, name: 'Simple' },
  { id: 3, name: 'Numbers' },
  { id: 4, name: 'Colors' },
  { id: 5, name: 'Birds' },
  { id: 6, name: 'Animals' },
  { id: 7, name: 'Body Parts' },
  { id: 8, name: 'Relationship' },
  { id: 9, name: 'Question' },
  { id: 10, name: 'Letters' },
  { id: 11, name: 'Action' },
  { id: 12, name: 'Home' },
  { id: 13, name: 'Relegion' },
 ];

@Component({
    moduleId: module.id,
    selector: 'category',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css'],
    animations: [
        trigger('cardState', [
            state('hovering', style({
                transform: 'scale(1.05)'
            })),
            state('normal', style({
               transform: 'scale(1)'
           })),
            transition('normal => hovering', animate('200ms ease-in')),
            transition('hovering => normal', animate('200ms ease-out'))
        ])
    ]
})
export class CategoryComponent implements OnInit {
  
private categories: Category[] = [];
    constructor(private sfdc: SalesforceService, private log: LoggerService) {}

    ngOnInit() {
     this.categories  =CATEGORIES;
}

 
}

