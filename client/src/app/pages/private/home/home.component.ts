import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

const oauthToken: string = '6T2TFPWEVFXFUC4M6FML';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public eventName: string;
  public positions: any[] = [];

  constructor(
    private http: Http
  ) { }

  public ngOnInit() {}

  public searchEvent() {
    this.positions = [];
    this.http.get(`https://www.eventbriteapi.com/v3/events/search/?q=${this.eventName}&token=${oauthToken}&expand=venue`)
      .map((res: Response) => res.json().events)
      .subscribe((events) => {
        events.forEach((evt) => {
          if (evt.venue) {
            this.positions.push([evt.venue.longitude, evt.venue.latitude]);
          }

        });
      })
  }
}
