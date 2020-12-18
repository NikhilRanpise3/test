import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/service/planet.service.js';



@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  subs: any;
  score: any;
  constructor(private gserv: PlanetService) {
  }

  ngOnInit(): void {
  }

  updateScore(s) {
    this.score = s;
    console.log(this.score);
  }
}
