export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}

export function formatTime(timeString: string): string {
  try {
    // Check if it's already "HH:mm"
    if (/^\d{2}:\d{2}$/.test(timeString)) {
      const [h, m] = timeString.split(':').map(Number);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const hours12 = h % 12 || 12;
      return `${hours12}:${m.toString().padStart(2, '0')} ${ampm}`;
    }
    return timeString;
  } catch {
    return timeString;
  }
}

