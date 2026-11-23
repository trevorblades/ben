import { cn } from "cn";

export const Input: React.FC<
  React.ComponentProps<"input"> & { label: string }
> = ({ label, className, ...props }) => {
  return (
    <label className={cn("group/label", className)}>
      <div className="label">{label}</div>
      <input {...props} className="input" />
    </label>
  );
};
