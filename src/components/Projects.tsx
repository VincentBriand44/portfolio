import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Projet 1',
      file: 'html.png',
      link: '#',
    },
    {
      title: 'Projet 1',
      file: 'html.png',
      link: '#',
    },
    {
      title: 'Projet 1',
      file: 'html.png',
      link: '#',
    },
    {
      title: 'Projet 1',
      file: 'html.png',
      link: '#',
    },
    {
      title: 'Projet 1',
      file: 'html.png',
      link: '#',
    },
    {
      title: 'Projet 1',
      file: 'html.png',
      link: '#',
    },
    {
      title: 'Projet 1',
      file: 'html.png',
      link: '#',
    },
    {
      title: 'Projet 1',
      file: 'html.png',
      link: '#',
    },
  ];
  return (
    <div
      className="page flex items-center justify-center h-screen"
      id="Projects"
    >
      <div className={`grid grid-cols-1 gap-2 lg:gap-10 lg:grid-cols-5`}>
        {projects.map((project) => (
          <div className="flex items-center lg:flex-col">
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
  );
};

export default Projects;
