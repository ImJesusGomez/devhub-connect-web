import { useState } from "react";
import { Link } from "react-router";

type TabId = "story" | "mission" | "vision";

interface Tab {
  id: TabId;
  label: string;
  heading: string;
  body: string;
}

const tabs: Tab[] = [
  {
    id: "story",
    label: "Nuestra Historia",
    heading: "Conectando talento con oportunidades reales",
    body: "DevHub Connect nació para resolver la desconexión entre el talento real de los desarrolladores y las oportunidades laborales, creando un espacio donde los proyectos y habilidades tienen más peso que un currículum tradicional.",
  },
  {
    id: "mission",
    label: "Misión",
    heading: "Impulsando el talento tech",
    body: "Nuestra misión es facilitar la conexión entre desarrolladores y empresas, ayudando a descubrir talento de forma más efectiva y brindando oportunidades que impulsen el crecimiento profesional.",
  },
  {
    id: "vision",
    label: "Visión",
    heading: "El futuro del networking tech",
    body: "Aspiramos a ser la plataforma líder donde desarrolladores y empresas se conectan de forma más humana, dinámica y basada en habilidades reales.",
  },
];

export const AboutUs = () => {
  const [active, setActive] = useState<TabId>("mission");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center px-6 py-20"
      id="about-us"
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Sobre Nosotros</h1>
          <p className="text-gray-500 text-base max-w-6xl mx-auto leading-relaxed">
            En DevHub somos una comunidad apasionada por la tecnología y el desarrollo de software.
            En DevHub Connect creamos un espacio donde el talento tecnológico y las oportunidades se
            encuentran. Somos una plataforma diseñada para conectar desarrolladores con empresas que
            buscan innovación, facilitando la colaboración, el crecimiento profesional y la creación
            de proyectos reales.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 border-b border-gray-200 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`pb-3 text-sm transition-colors ${
                active === tab.id
                  ? "text-indigo-600 border-b-2 border-indigo-600 font-medium"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={
              current.id === "story"
                ? "/job_interview.jpg"
                : current.id === "mission"
                  ? "/mission.jpg"
                  : "/vission.jpg"
            }
            alt="Team"
            className="rounded-2xl w-full h-72 object-cover"
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-gray-900 leading-snug">{current.heading}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{current.body}</p>
            <button className="self-start flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
              <Link to={"/"}>Comienza Ahora</Link>
              <span>›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
