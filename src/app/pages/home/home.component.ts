import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  buttonClicked = false;
  mailNews;
  newsletterInscription = "Inscription à la newsletter";
  
  constructor() { }

  ngOnInit(): void {
  }
  clickNewsletter(){
    this.buttonClicked = true;
  }
  validate(){
    this.newsletterInscription = "Mail envoyé !";
    this.mailNews = "";
  }
}
