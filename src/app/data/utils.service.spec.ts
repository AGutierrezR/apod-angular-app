import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

fdescribe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);

    const fixedDate = new Date(2023, 5, 26);
    jasmine.clock().install();
    jasmine.clock().mockDate(fixedDate);
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a day before the current date in a YYYY-MM-MM format', () => {
    expect(service.getEndDate).toBe('2023-6-25');
  });

  it('should return date from 5 days ago in a YYYY-MM-MM format', () => {
    expect(service.getStartDate).toBe('2023-6-20');
  });
});
