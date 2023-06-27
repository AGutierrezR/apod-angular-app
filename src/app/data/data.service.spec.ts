import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const APODS = [
    {
      date: '2023-06-22',
      explanation: 'Some explanation',
      title: 'Stars and Dust across Corona Australis',
      url: 'https://apod.nasa.gov/apod/image/2306/corona_aus1024.jpg',
    },
    {
      date: '2023-06-23',
      explanation: 'Some explanation',
      title: 'Giant Galaxies in Pavo',
      url: 'https://apod.nasa.gov/apod/image/2306/NGC-6872-LRGB-rev-5-crop-CDK-1000-22-May-2023_1024.jpg',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  afterAll(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected apods into the apods$ observable', () => {
    service.apods$.subscribe((apods) => {
      expect(apods).toEqual(APODS);
    });

    const req = httpTestingController.expectOne({ method: 'GET' });
    req.flush(APODS);
  });
});
