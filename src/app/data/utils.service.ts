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

  objectify = <T, Key extends string | number | symbol, Value = T>(
    array: readonly T[],
    getKey: (item: T) => Key,
    getValue: (item: T) => Value = (item) => item as unknown as Value
  ): Record<Key, Value> => {
    return array.reduce((acc, item) => {
      acc[getKey(item)] = getValue(item);
      return acc;
    }, {} as Record<Key, Value>);
  };

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
