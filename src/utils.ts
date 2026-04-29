type MatchRow = [number, number, number];

const isMatchRow = (row: number[]): row is MatchRow => {
  return row.length === 3;
};

export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018  => ['28', '10', '2018'] => map
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  if (!isMatchRow(dateParts)) {
    throw new Error('Invalid date string format');
  }
  const [day, month, year] = dateParts;

  return new Date(year, month - 1, day);
};
