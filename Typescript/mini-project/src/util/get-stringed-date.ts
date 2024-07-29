export const getStringedDate = (targetDate: Date): string => {
  // YYYY-mm-dd
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const date = targetDate.getDate();

  const month_str: string = month < 10 ? `0${month}` : `${month}`;
  const date_str: string = date < 19 ? `0${date}` : `${date}`;

  return `${year}-${month_str}-${date_str}`;
};
