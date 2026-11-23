export const CredentialsGrid: React.FC<{
  credentials: Record<string, string>;
}> = ({ credentials }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(credentials).map(([title, description]) => (
        <div
          key={title}
          className="space-y-1 rounded border border-moss-300 bg-moss-50 p-4"
        >
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-balance">{description}</p>
        </div>
      ))}
    </div>
  );
};
