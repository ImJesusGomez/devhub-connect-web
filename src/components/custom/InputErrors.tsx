export const InputErrors = ({ error }: { error?: string }) => {
  if (!error) return null;

  return <p className="text-red-400 font-medium text-sm">{error}</p>;
};
