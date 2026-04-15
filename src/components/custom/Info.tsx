export const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex justify-between py-2 border-b last:border-b-0">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-gray-900 font-medium text-sm">{value || "—"}</span>
    </div>
  );
};
