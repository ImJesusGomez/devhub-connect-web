export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm backdrop-blur">
      {children}
    </span>
  );
};
