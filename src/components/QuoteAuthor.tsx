export const QuoteAuthor: React.FC<{
  name: string;
  title: string;
}> = ({ name, title }) => {
  return (
    <div className="space-y-1">
      <div className="font-semibold md:text-lg">{name}</div>
      <div className="max-md:text-sm">{title}</div>
    </div>
  );
};
