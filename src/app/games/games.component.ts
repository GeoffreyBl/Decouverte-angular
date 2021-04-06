import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public = "Famille"
  title = "Monopoly"
  type = "jeu de plateau"
  description = "un jeu d'argent"
  constructor() { }

  ngOnInit(): void {
  }

}
