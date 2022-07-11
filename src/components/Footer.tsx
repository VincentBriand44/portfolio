import React from 'react';

const Footer = () => {
  const navbar = [
    {
      title: 'Présentation',
      link: '#Presentation',
      image: 'pencil.png',
    },
    {
      title: 'Languages',
      link: '#Languages',
      image: 'coding.png',
    },
    {
      title: 'Projects',
      link: '#Projects',
      image: 'project.png',
    },
    {
      title: 'Contact',
      link: '#Contact',
      image: 'mail.png',
    },
  ];

  return (
    <footer className="flex justify-center">
      <div className="fixed grid w-screen max-w-2xl grid-cols-4 text-xs pointer-events-none select-none bottom-4 md:text-base md:bottom-16 text">
        {navbar.map((nav) => (
          <div className="text-center">
            <a
              href={nav.link}
              className="flex flex-col pointer-events-auto hover:animate-bounce"
            >
              <div className="mx-auto border rounded-full w-14 h-14 border-slate-900/[.5] bg-slate-600/[.3] hover:bg-slate-800/[.3]">
                <img
                  src={`/src/img/${nav.image}`}
                  alt={nav.title}
                  className="p-4 hover:animate-pulse"
                  draggable="false"
                />
              </div>
            </a>
            {nav.title}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
