import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  get getEndDate(): string {
    const today = this.currentDate;
    today.setDate(today.getDate() - 1);

    return this.formattedDate(today);
  }

  get getStartDate(): string {
    const today = this.currentDate;
    today.setDate(today.getDate() - 6);

    return this.formattedDate(today);
  }

  private get currentDate(): Date {
    return new Date();
  }

  private formattedDate(date: Date): string {
    const [year, month, day] = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ];

    return `${year}-${month}-${day}`;
  }
}
