import "./App.css";

function App() {
  const languages = [
    {
      title: "HTML",
      file: "html.png",
      childs: [],
    },
    {
      title: "CSS",
      file: "css.png",
      childs: [
        {
          title: "Tailwind CSS",
          file: "tailwindcss.png",
        },
        {
          title: "Bootstrap",
          file: "bootstrap.png",
        },
      ],
    },
    {
      title: "JS",
      file: "js.png",
      childs: [
        {
          title: "React",
          file: "react.png",
        },
        {
          title: "Vite",
          file: "vite.png",
        },
      ],
    },
    {
      title: "PHP",
      file: "php.png",
      childs: [],
    },
    {
      title: "SQL",
      file: "sql.png",
      childs: [],
    },
  ];

  return (
    <div className="text-gray-100 bg-gray-700">
      <header className="flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.png')] pb-24 md:pb-40">
        <img
          src="/src/img/vincentbriand.jpg"
          alt="photo de Vincent BRIAND"
          className="object-cover w-40 h-40 mx-auto my-5 rounded-full"
          draggable="false"
        />
        <h1 className="text-3xl font-bold">Vincent BRIAND</h1>
        <p className="max-w-4xl mt-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
          magna eget est lorem ipsum dolor sit amet. Et tortor consequat id
          porta nibh venenatis cras sed. Risus nec feugiat in fermentum posuere
          urna nec. Nunc sed id semper risus in hendrerit. Dictum fusce ut
          placerat orci nulla pellentesque dignissim. Odio aenean sed adipiscing
          diam donec adipiscing tristique risus nec. Augue ut lectus arcu
          bibendum at varius vel pharetra. Turpis egestas pretium aenean
          pharetra magna. Cursus sit amet dictum sit amet justo donec enim.
          Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Neque
          aliquam vestibulum morbi blandit.
        </p>
      </header>
      <main>
        <div className="flex items-center justify-center h-screen pb-24 md:pb-40">
          <div
            className={`grid grid-cols-1 gap-2 lg:gap-10 lg:grid-cols-${languages.length}`}
          >
            {languages.map((language) => (
              <div className="flex items-center lg:flex-col">
                <div className="flex flex-col mb-2 text-center">
                  <div className="flex items-center justify-center w-24 h-24 bg-black/[.3] rounded-full lg:mb-2 lg:w-32 lg:h-32 select-none">
                    <img
                      className="w-16 h-16 lg:w-20 lg:h-20"
                      src={`/src/img/${language.file}`}
                      draggable="false"
                    />
                  </div>
                  {/* <p>{language.title}</p> */}
                </div>
                <div className="flex items-center content-around">
                  {language.childs.map((child) => (
                    <div className="flex flex-col items-center w-24">
                      <div className="w-8 h-8 bg-white rounded-full select-none"></div>
                      <p className="text-xs">{child.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-screen"></div>
      </main>
      <footer className="flex justify-center">
        <div className="fixed grid w-screen max-w-2xl grid-cols-4 text-xs pointer-events-none select-none bottom-4 md:text-base md:bottom-16">
          <div className="text-center">
            <a
              href="#"
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
              href="#"
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
              href="#"
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
              href="#"
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
    </div>
  );
}

export default App;
