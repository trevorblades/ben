import { cn } from "cn";

export const Input: React.FC<
  React.ComponentProps<"input"> & { label: string }
> = ({ label, className, ...props }) => {
  return (
    <label className={cn("group/form-control", className)}>
      <div className="label">{label}</div>
      <input {...props} className="input" />
    </label>
  );
};
