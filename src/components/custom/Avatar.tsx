export const Avatar = ({ name }: { name: string }) => {
  const initial = name?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
      {initial}
    </div>
  );
};
