import React from 'react';

const Languages = () => {
  const languages = [
    {
      title: 'HTML',
      file: 'html.png',
      childs: [],
    },
    {
      title: 'CSS',
      file: 'css.png',
      childs: [
        {
          title: 'Tailwind CSS',
          file: 'tailwindcss.png',
        },
        {
          title: 'Bootstrap',
          file: 'bootstrap.png',
        },
      ],
    },
    {
      title: 'JS',
      file: 'js.png',
      childs: [
        {
          title: 'Node JS',
          file: 'node.png',
        },
        {
          title: 'React',
          file: 'react.png',
        },
        {
          title: 'React',
          file: 'react.png',
        },
      ],
    },
    {
      title: 'PHP',
      file: 'php.png',
      childs: [],
    },
    {
      title: 'SQL',
      file: 'sql.png',
      childs: [],
    },
  ];
  return (
    <div
      className="page flex items-center justify-center h-screen pb-24 md:pb-40"
      id="Languages"
    >
      <div className={`grid grid-cols-1 gap-2 lg:gap-10 lg:grid-cols-5`}>
        {languages.map((language) => (
          <div className="flex items-center lg:flex-col">
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
            <div className="flex flex-wrap justify-center w-24 ml-2 lg:ml-0 lg:w-32 last:mt-0">
              {language.childs.map((child, i) => {
                let marginTop = '0';
                if (
                  i === language.childs.length - 1 &&
                  (language.childs.length - 1) % 3 === 0
                ) {
                  marginTop = '10px';
                } else if (
                  (i + 2) % 3 === 0 &&
                  i !== language.childs.length - 1
                ) {
                  marginTop = '10px';
                }
                return (
                  <div
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
  );
};

export default Languages;
