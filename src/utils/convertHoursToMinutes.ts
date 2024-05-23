export default function convertHoursToMinutes(
  hours: number
): {
  hours: number,
  minutes: number
} {
  const fullHours = Math.floor(hours);
  const fractionalPart = hours - fullHours;
  const minutes = Math.round(fractionalPart * 60);
  return {
    hours: fullHours,
    minutes: minutes
  };
}
