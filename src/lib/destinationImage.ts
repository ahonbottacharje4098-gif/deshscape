export function destinationImageUrl(image: string, width = 1200): string {
  if (/^https?:\/\//i.test(image)) return image;
  return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=85&crop=entropy`;
}
