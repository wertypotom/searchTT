export const formatStringToDate = (dateString: string) => {
  const inputDate = new Date(dateString);
  const formattedDate = `${(inputDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${inputDate
    .getDate()
    .toString()
    .padStart(2, '0')}-${inputDate.getFullYear()}`;

  return formattedDate;
};
