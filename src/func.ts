export function formatInfo(value: string | null) {
  return !value || value.length === 0 ? "Not Available" : value;
}

export function addOpacity(value: string | null) {
  return !value || value.length === 0 ? "half-transparent" : "";
}

export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
};

