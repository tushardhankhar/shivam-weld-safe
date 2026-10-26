import { placeId } from "@/lib/site";

export interface GoogleReview {
  author: string;
  authorUrl?: string;
  rating: number;
  text: string;
  when: string;
}
export interface GoogleReviewData {
  rating?: number;
  count?: number;
  mapsUrl?: string;
  reviews: GoogleReview[];
}

/**
 * Fetched at build time with Places API (New) so the key never reaches the browser.
 * Google returns at most 5 reviews. Returns null (and the UI falls back to a link)
 * when the key/place id is missing or the request fails.
 */
export async function getGoogleReviews(): Promise<GoogleReviewData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key || !placeId) return null;
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews" },
      cache: "force-cache",
    });
    if (!res.ok) { console.warn(`[reviews] Places API ${res.status}: ${await res.text()}`); return null; }
    const d = await res.json();
    const reviews: GoogleReview[] = (d.reviews ?? [])
      .filter((r: any) => r.text?.text)
      .map((r: any) => ({
        author: r.authorAttribution?.displayName ?? "Google user",
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating,
        text: r.text.text,
        when: r.relativePublishTimeDescription ?? "",
      }));
    return { rating: d.rating, count: d.userRatingCount, mapsUrl: d.googleMapsUri, reviews };
  } catch (e) {
    console.warn("[reviews] fetch failed", e);
    return null;
  }
}
