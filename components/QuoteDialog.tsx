"use client";
import { useEffect, useRef } from "react";
import { EnquiryForm } from "./EnquiryForm";

export function QuoteDialog({ productName, onClose }: { productName: string | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (productName && !d.open) d.showModal();
    if (!productName && d.open) d.close();
  }, [productName]);

  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()} aria-labelledby="quote-title"
      className="m-auto w-[min(34rem,calc(100%-2rem))] rounded-xl bg-ivory p-0 text-navy shadow-2xl backdrop:bg-navy/60">
      {productName && (
        <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-navy/60">Request a Quote</p>
              <h2 id="quote-title" className="text-xl font-semibold">{productName}</h2>
            </div>
            <button type="button" onClick={onClose} aria-label="Close" className="rounded-md border border-navy/20 p-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
          <EnquiryForm key={productName} defaultRequirement={productName} idPrefix="quote" />
        </div>
      )}
    </dialog>
  );
}
