import { cn } from "cn";

export const Input: React.FC<
  React.ComponentProps<"input"> & {
    label: string;
    errors?: string[];
  }
> = ({ label, errors, className, ...props }) => {
  return (
    <label className={cn("group/label", className)}>
      <div className="label">{label}</div>
      <input {...props} aria-invalid={!!errors?.length} className="input" />
      {errors && errors.length > 0 && (
        <div className="mt-2 text-sm leading-none text-geraldine-400">
          {errors[0]}
        </div>
      )}
    </label>
  );
};
