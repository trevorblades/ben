import Link from "astro-typesafe-routes/link/react";
import { cn } from "cn";
import { useState } from "react";

export const HeaderNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        data-modal={isOpen}
        className={cn(
          "max-sm:fixed max-sm:inset-0 max-sm:flex max-sm:bg-melanzane/95 max-sm:text-2xl max-sm:text-lace max-sm:transition-all",
          {
            "max-sm:invisible max-sm:opacity-0": !isOpen,
          },
        )}
      >
        <ul className="flex gap-4 max-sm:m-auto max-sm:flex-col max-sm:items-center sm:font-medium md:gap-6">
          <li>
            <Link className="link link-hover" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="link link-hover" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="link link-hover" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="link link-hover sm:hidden"
              href="https://substack.com"
            >
              Substack ↗
            </a>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={cn("z-10 p-2 sm:hidden", {
          "text-lace": isOpen,
        })}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div
          className={cn(
            "relative flex h-4 w-5 flex-col justify-center border-y-2 border-current transition-all before:h-0.5 before:bg-current after:absolute after:inset-x-0 after:h-0.5 after:rotate-90 after:bg-current after:transition-opacity",
            isOpen ? "rotate-45 border-transparent" : "after:opacity-0",
          )}
        />
      </button>
    </>
  );
};
