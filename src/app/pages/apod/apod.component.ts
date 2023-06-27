import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent {
  apod$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const date = params.get('date') as string;

      return this.dataService.apodsDictionary$.pipe(
        map((apodDic) => apodDic[date])
      );
    })
  );

  constructor(public dataService: DataService, private route: ActivatedRoute) {}
}
