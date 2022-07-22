const Footer = () => (
  <footer className="flex justify-center">
    <div className="fixed grid w-screen max-w-2xl grid-cols-4 text-xs pointer-events-none select-none bottom-4 md:text-base md:bottom-16">
      <div className="text-center">
        <a
          href="#presentation"
          className="flex flex-col pointer-events-auto hover:animate-bounce"
        >
          <div className="mx-auto border rounded-full w-14 h-14 border-slate-900/[.5] bg-slate-600/[.3] hover:bg-slate-800/[.3]">
            <img
              src="/src/img/pencil.png"
              alt="Présentation"
              className="p-4 hover:animate-pulse"
              draggable="false"
            />
          </div>
        </a>
        Présentation
      </div>
      <div className="text-center">
        <a
          href="#languages"
          className="flex flex-col pointer-events-auto hover:animate-bounce"
        >
          <div className="mx-auto border rounded-full w-14 h-14 border-slate-900/[.5] bg-slate-600/[.3] hover:bg-slate-800/[.3]">
            <img
              src="/src/img/coding.png"
              alt="Languages"
              className="p-4 hover:animate-pulse"
              draggable="false"
            />
          </div>
        </a>
        Languages
      </div>
      <div className="text-center">
        <a
          href="#projects"
          className="flex flex-col pointer-events-auto hover:animate-bounce"
        >
          <div className="mx-auto border rounded-full w-14 h-14 border-slate-900/[.5] bg-slate-600/[.3] hover:bg-slate-800/[.3]">
            <img
              src="/src/img/project.png"
              alt="Projets"
              className="p-4 hover:animate-pulse"
              draggable="false"
            />
          </div>
        </a>
        Projets
      </div>
      <div className="text-center">
        <a
          href="#contact"
          className="flex flex-col pointer-events-auto hover:animate-bounce"
        >
          <div className="mx-auto border rounded-full w-14 h-14 border-slate-900/[.5] bg-slate-600/[.3] hover:bg-slate-800/[.3]">
            <img
              src="/src/img/mail.png"
              alt="Contact"
              className="p-4 hover:animate-pulse"
              draggable="false"
            />
          </div>
        </a>
        Contact
      </div>
    </div>
  </footer>
);

export default Footer;
