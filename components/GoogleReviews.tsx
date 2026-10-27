import { reviewsUrl, writeReviewUrl } from "@/lib/site";
import { getGoogleReviews } from "@/lib/reviews";

const btn = "inline-flex items-center justify-center rounded-lg px-6 py-3 font-heading text-sm font-semibold transition-colors";

function Stars({ value }: { value: number }) {
  return (
    <span role="img" aria-label={`${value} out of 5 stars`} className="flex gap-0.5 text-accent">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i <= Math.round(value) ? "fill-current" : "fill-ink/15"}`} aria-hidden="true"><path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" /></svg>
      ))}
    </span>
  );
}

export async function GoogleReviews() {
  const data = await getGoogleReviews();
  const links = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href={data?.mapsUrl ?? reviewsUrl} target="_blank" rel="noopener noreferrer" className={`${btn} bg-ink text-white hover:bg-accent`}>{data ? "All reviews on Google" : "Read Google reviews"}</a>
      {writeReviewUrl && <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer" className={`${btn} border border-ink/25 hover:border-ink`}>Write a review</a>}
    </div>
  );

  if (!data || data.reviews.length === 0) {
    return (
      <section aria-labelledby="reviews-heading" className="section-y">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-white p-8 shadow-soft md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h2 id="reviews-heading" className="text-2xl font-semibold sm:text-3xl">See what customers say on Google</h2>
              <p className="mt-2 text-ink/75">Read reviews from buyers who have worked with us, or share your own experience.</p>
            </div>
            {links}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="reviews-heading" className="section-y">
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="reviews-heading" className="text-2xl font-semibold sm:text-3xl">What customers say on Google</h2>
            {data.rating != null && (
              <p className="mt-3 flex items-center gap-3 text-sm text-ink/75">
                <span className="font-heading text-2xl font-bold text-ink">{data.rating.toFixed(1)}</span>
                <Stars value={data.rating} />
                {data.count != null && <span>{data.count} Google review{data.count === 1 ? "" : "s"}</span>}
              </p>
            )}
          </div>
          {links}
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews.map((r, i) => (
            <li key={i} className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-soft">
              <Stars value={r.rating} />
              <blockquote className="mt-3 line-clamp-6 flex-1 text-sm text-ink/80">{r.text}</blockquote>
              <p className="mt-4 text-sm font-semibold">
                {r.authorUrl ? <a href={r.authorUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">{r.author}</a> : r.author}
                {r.when && <span className="ml-2 font-normal text-ink/55">{r.when}</span>}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-ink/55">Reviews and ratings from Google. Showing up to 5 of the most relevant reviews.</p>
      </div>
    </section>
  );
}
