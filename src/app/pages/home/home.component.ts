import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/fakeStats';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stats: Stats;
  buttonClicked = false;
  mailNews = "";
  newsletterInscription = "Inscription à la newsletter";
  
  constructor(public apiService: ApiService){}

  async ngOnInit() {
    this.stats = await this.apiService.getFakeStat();
  }
  clickNewsletter(){
    this.buttonClicked = true;
  }
  validate(){
    this.newsletterInscription = "Mail envoyé !";
    this.mailNews = "";
  }
}
