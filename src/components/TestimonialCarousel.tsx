import { cn } from "cn";
import { useState } from "react";

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
    <div className="grid grid-cols-2">
      <div className="relative">
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
              className={cn(
                "h-20 w-75 bg-current mask-(--mask-image) mask-contain mask-center mask-no-repeat",
              )}
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 446"
          className="absolute top-0 right-0 h-full w-3 fill-white"
          preserveAspectRatio="none"
        >
          <title>edge</title>
          <path d="M12 247.778 1.44 211.011v-19.183L12 163.054 8.675 0H12v446H0l1.92-23.179 6.755-4.796z" />
        </svg>
      </div>
      <div className="space-y-6 bg-white px-4 py-20 md:px-6">
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
              <p className="text-xl leading-normal">“{testimonial.quote}”</p>
              <div className="space-y-1">
                <div className="text-lg font-semibold">{testimonial.by}</div>
                <div>{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="size-10 rounded-md border border-tangerine-500 bg-tangerine-400 text-xl transition-colors hover:border-tangerine-400 hover:bg-tangerine-300 active:border-tangerine-300 active:bg-tangerine-200"
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
            className="size-10 rounded-md border border-tangerine-500 bg-tangerine-400 text-xl transition-colors hover:border-tangerine-400 hover:bg-tangerine-300 active:border-tangerine-300 active:bg-tangerine-200"
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
