export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split("/")
    .map((value: string) => {
      return parseInt(value);
    })
    .reverse();

  return new Date(dateParts[0], dateParts[1], dateParts[2]);
};
