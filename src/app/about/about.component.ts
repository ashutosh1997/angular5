import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

/* Gives access to route parameters */
import { ActivatedRoute   } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  itemCount: number;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
  }

  sendToHome() {
    this.router.navigate(['']);
  }
}
