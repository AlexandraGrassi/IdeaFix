///<reference path="../../../../node_modules/protractor/built/element.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {Idea} from '../../models/idea.model';
import {IdeaService} from '../../services/idea.service';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css']
})

export class IdeaCardComponent implements OnInit {

  @Input() idea: Idea;
  isLoading: boolean = true;

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    console.log('Это идея: ' + this.idea);
    console.log(this.idea);
    console.log(this.idea.setOfTags);
  }
}
