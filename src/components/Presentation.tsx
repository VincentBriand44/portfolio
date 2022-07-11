import React from 'react';

const Header = () => {
  return (
    <header
      className="page flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.png')] pb-24 md:pb-40"
      id="Presentation"
    >
      <img
        src="/src/img/vincentbriand.jpg"
        alt="photo de Vincent BRIAND"
        className="object-cover w-40 h-40 mx-auto my-5 rounded-full"
        draggable="false"
      />
      <h1 className="text-3xl font-bold">Vincent BRIAND</h1>
      <p className="max-w-4xl mt-10 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est
        lorem ipsum dolor sit amet. Et tortor consequat id porta nibh venenatis
        cras sed. Risus nec feugiat in fermentum posuere urna nec. Nunc sed id
        semper risus in hendrerit. Dictum fusce ut placerat orci nulla
        pellentesque dignissim. Odio aenean sed adipiscing diam donec adipiscing
        tristique risus nec. Augue ut lectus arcu bibendum at varius vel
        pharetra. Turpis egestas pretium aenean pharetra magna. Cursus sit amet
        dictum sit amet justo donec enim. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim. Neque aliquam vestibulum morbi blandit.
      </p>
    </header>
  );
};

export default Header;
