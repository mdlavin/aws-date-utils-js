import formatDate from "date-fns/format";
import isValidDate from "date-fns/isValid";
import parseDate from "date-fns/parse";

export function parseExtendedISODate(date: string): Date {
  const parsed = parseDate(date, "yyyy-MM-dd", new Date());
  if (isValidDate(parsed)) return parsed;
  return parseDate(date, "yyyy-MM-ddXXXXX", new Date());
}

export function dateToExtendedISODate(d: Date) {
  return formatDate(d, "yyyy-MM-ddXXXXX");
}
