import { cn } from "cn";
import { useState } from "react";
import { QuoteAuthor } from "./QuoteAuthor";

export const TestimonialCarousel: React.FC<{
  testimonials: {
    quote: string;
    by: string;
    title: string;
    logo: string;
  }[];
}> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="grid-cols-2 sm:grid">
      <div className="relative max-sm:hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index.toString()}
            className={cn(
              "absolute inset-0 grid place-items-center text-lace transition-opacity duration-500",
              {
                "opacity-0": activeIndex !== index,
                "bg-moss-300": index % 3 === 0,
                "bg-geraldine-300": index % 3 === 1,
                "bg-tangerine-300": index % 3 === 2,
              },
            )}
          >
            <div
              className="h-12 w-45 bg-current mask-(--mask-image) mask-contain mask-center mask-no-repeat md:h-16 md:w-60 lg:h-20 lg:w-75"
              style={
                {
                  "--mask-image": `url(${testimonial.logo})`,
                } as React.CSSProperties
              }
            />
          </div>
        ))}
        <svg
          aria-hidden
          viewBox="0 0 12 446"
          className="absolute top-0 right-0 h-full w-3 fill-white"
          preserveAspectRatio="none"
        >
          <path d="M12 287.778 1.44 211.011v-69.183L12 83.054 8.675 0H12v446H0l1.92-73.179z" />
        </svg>
      </div>
      <div className="space-y-4 bg-white py-12 layout-gutter sm:py-16 md:space-y-6 md:py-20">
        <div className="grid items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index.toString()}
              className={cn(
                "col-start-1 row-start-1 space-y-4 transition-opacity duration-500",
                {
                  "opacity-0": index !== activeIndex,
                },
              )}
            >
              <p className="text-lg leading-normal md:text-xl">
                “{testimonial.quote}”
              </p>
              <QuoteAuthor name={testimonial.by} title={testimonial.title} />
            </div>
          ))}
        </div>
        <div className="flex gap-3 *:size-10 *:btn-sm *:btn-secondary *:px-0 *:text-lg *:btn">
          <button
            type="button"
            onClick={() => {
              setActiveIndex((prev) =>
                prev > 0 ? prev - 1 : testimonials.length - 1,
              );
            }}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
