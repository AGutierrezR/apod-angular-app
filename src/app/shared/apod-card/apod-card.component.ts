import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss'],
})
export class ApodCardComponent {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() url: string = '';
}
