import { cn } from "cn";

export const Select: React.FC<
  React.ComponentProps<"select"> & { label: string }
> = ({ label, className, ...props }) => {
  return (
    <label className={cn("group/form-control", className)}>
      <div className="label">{label}</div>
      <div className="grid">
        <select
          {...props}
          className="col-start-1 row-start-1 appearance-none input"
        />
        <div className="pointer-events-none col-start-1 row-start-1 self-center justify-self-end px-3 text-2xl">
          ▾
        </div>
      </div>
    </label>
  );
};
