const companies = [
  {
    name: "Mercado Libre",
    bg: "#FFE11A",
    textBg: "#1A1A1A",
    accent: "#1A9B4E",
    letter: "M",
    label: "mercado libre",
  },
  { name: "Clip", bg: "#FF3366", letter: "c", label: "clip" },
  { name: "Kavak", bg: "#E8000D", letter: "◆", label: "KAVAK", diamond: true },
  { name: "Kueski", bg: "#00C48C", letter: "K", label: "kueski", rounded: true },
  { name: "Conekta", bg: "#3B82F6", letter: "C", label: "conekta" },
  { name: "Bitso", bg: "#F7931A", letter: "₿", label: "bitso" },
  { name: "Rappi", bg: "#FF441B", letter: "R", label: "rappi" },
  { name: "Konfío", bg: "#0057FF", letter: "K", label: "Konfío", rounded: true },
  { name: "Incode", bg: "#6C47FF", letter: "i", label: "incode" },
  { name: "Wizeline", bg: "#00C2C7", letter: "W", label: "wizeline" },
  { name: "Telcel", bg: "#002D72", letter: "◎", label: "Telcel" },
  {
    name: "Coppel",
    bg: "#FFD700",
    textColor: "#7B3F00",
    letter: "C",
    label: "Coppel",
    rounded: true,
  },
];

export const TechGrid = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <p className="text-center text-gray-500 text-sm mb-6">
        Hoy hay <strong className="text-gray-800">+30 empresas de tecnología</strong> contratando
        con las mejores vacantes para ti
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-4xl mx-auto mb-6">
        {companies.map(({ name, bg, letter, label, textColor, rounded }) => (
          <div
            key={name}
            className="flex items-center justify-center gap-2 border border-gray-100 rounded-xl px-3 py-5 hover:border-gray-300 hover:shadow-sm transition-all cursor-default"
          >
            <div
              className="shrink-0 w-6 h-6 flex items-center justify-center text-xs font-black text-white"
              style={{
                background: bg,
                borderRadius: rounded ? "50%" : "5px",
                color: textColor || "white",
              }}
            >
              {letter}
            </div>
            <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="border border-gray-300 rounded-full px-7 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition hover:cursor-pointer">
          ¿Quieres publicar?
        </button>
      </div>
    </section>
  );
};
