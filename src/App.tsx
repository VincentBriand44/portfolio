import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";
import languages from "./style/json/languages.json";
import projects from "./style/json/projects.json";

function App() {
  return (
    <div className="text-gray-100 bg-gray-700">
      <main className=" pages">
        <Header />
        <h1 className="fixed top-0 w-full mt-8 text-lg font-bold text-center">
          Présentation
        </h1>

        <div className="flex items-center justify-center h-screen pb-24 md:pb-40 page">
          <div className={`grid grid-cols-1 gap-2 lg:gap-10 lg:grid-cols-5`}>
            {languages.map((language, index) => (
              <div key={index} className="flex items-center lg:flex-col">
                <div className="flex flex-col mb-2 text-center">
                  <div className="flex items-center justify-center w-24 h-24 bg-black/[.3] rounded-full lg:w-32 lg:h-32 select-none">
                    <img
                      className="w-16 h-16 lg:w-20 lg:h-20"
                      src={`/src/img/${language.file}`}
                      draggable="false"
                    />
                  </div>
                  {/* <p>{language.title}</p> */}
                </div>
                <div
                  className="flex flex-wrap justify-center w-24 ml-2 lg:ml-0 lg:w-32 last:mt-0"
                  id="languages"
                >
                  {language.childs.map((child, i) => {
                    let marginTop = "0";
                    if (
                      i === language.childs.length - 1 &&
                      (language.childs.length - 1) % 3 === 0
                    ) {
                      marginTop = "10px";
                    } else if (
                      (i + 2) % 3 === 0 &&
                      i !== language.childs.length - 1
                    ) {
                      marginTop = "10px";
                    }
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center w-1/3"
                        style={{ marginTop }}
                      >
                        <div className="flex items-center justify-center w-8 h-8 text-center bg-white rounded-full select-none">
                          <img
                            src={`/src/img/${language.childs[i].file}`}
                            className="w-6 h-6"
                            draggable="false"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center justify-center h-screen page"
          id="projects"
        >
          <div className={`grid grid-cols-1 gap-2 lg:gap-10 lg:grid-cols-5`}>
            {projects.map((project, index) => (
              <div key={index} className="flex items-center lg:flex-col">
                <div className="flex flex-col mb-2 text-center">
                  <div className="flex items-center justify-center w-24 h-24 bg-black/[.3] rounded-full lg:w-32 lg:h-32 select-none">
                    <img
                      className="w-16 h-16 lg:w-20 lg:h-20"
                      src={`/src/img/${project.file}`}
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center h-screen text-slate-800 page"
          id="contact"
        >
          <label htmlFor="name" className="text-slate-200">
            Prénom/NOM
          </label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Prénom NOM"
            className="w-full h-10 max-w-2xl p-2 mb-8 bg-gray-200 rounded-lg"
          />
          <label htmlFor="email" className="text-slate-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="exemple@email.fr"
            className="w-full h-10 max-w-2xl p-2 mb-8 bg-gray-200 rounded-lg"
          />
          <label htmlFor="subject" className="text-slate-200">
            Sujet
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Mon sujet"
            className="w-full h-10 max-w-2xl p-2 mb-8 bg-gray-200 rounded-lg"
          />
          <label htmlFor="message" className="text-slate-200">
            Message
          </label>
          <textarea
            name="message"
            className="w-full h-32 max-w-2xl p-2 mb-8 bg-gray-200 rounded-lg resize-y"
            placeholder="Mon message"
          ></textarea>
          <button className="px-8 py-2 font-medium border-2 border-gray-600 rounded-md text-slate-200 hover:bg-slate-200 hover:text-gray-800 hover:border-gray-800">
            Envoyer
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
