import { Component } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasa-apod';

  constructor(public dataService: DataService) {}
}
