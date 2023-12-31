import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from 'src/app/data/utils.service';
import { map, shareReplay, tap } from 'rxjs';
import { APOD } from 'src/app/data/data.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiAPODUrl = `https://api.nasa.gov/planetary/apod?start_date=${this.utils.getStartDate}&end_date=${this.utils.getEndDate}&api_key=${environment.nasaApiKey}`;

  apods$ = this.http.get<APOD[]>(this.apiAPODUrl).pipe(shareReplay());

  apodsDictionary$ = this.apods$.pipe(
    map((apodsArray) => {
      return this.utils.objectify(apodsArray, (apod) => apod.date);
    })
  );

  constructor(private http: HttpClient, private utils: UtilsService) {}
}
