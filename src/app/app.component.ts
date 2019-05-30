import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nello';

  public colors = {
  	red: 'red',
    orange: 'orange',
  	blue: 'blue',
  }

  ngOnInit() {
  	console.log(this.colors);
  }
}
