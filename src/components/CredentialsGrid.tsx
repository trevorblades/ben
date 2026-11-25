export const CredentialsGrid: React.FC<{
  credentials: Record<string, string>;
}> = ({ credentials }) => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
      {Object.entries(credentials).map(([title, description]) => (
        <div
          key={title}
          className="space-y-1 rounded border border-moss-300 p-3 md:p-4"
        >
          <h3 className="text-base font-medium md:text-lg">{title}</h3>
          <p className="text-sm text-balance md:text-base">{description}</p>
        </div>
      ))}
    </div>
  );
};
