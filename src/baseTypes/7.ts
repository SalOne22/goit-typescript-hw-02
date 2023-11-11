/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfTheWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const isWeekend = (dayOfTheWeek: DayOfTheWeek) => {
  switch (dayOfTheWeek) {
    case DayOfTheWeek.SATURDAY:
    case DayOfTheWeek.SUNDAY:
      return true;
    default:
      return false;
  }
}