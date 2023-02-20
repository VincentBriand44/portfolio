const ProjectPopupBox = ({ popup, setImageOnly }) => {
  const { title, links, desc, file } = popup

  return (
    <>
      <div className='flex items-center justify-center w-full h-1/3 md:h-full bg-slate-900 md:w-1/3'>
        <img
          className={`object-contain ${file ? 'w-full h-full' : 'w-16 h-16'}`}
          src={
            file
              ? `/src/assets/img/projects/${file}`
              : '/src/assets/img/no-image.webp'
          }
          alt={title}
          onClick={() => file && setImageOnly(true)}
        />
      </div>
      <div className='flex flex-col items-center justify-between w-full h-full p-4 md:w-2/3'>
        <div className='w-full'>
          <h2 className='font-bold'>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className='flex gap-4 justify-content'>
          {links?.map(link => (
            <a href={link} target='_blank' key={link}>
              <button className='px-8 py-2 rounded-md bg-slate-900 hover:ring-2 ring-inset'>
                {regex.test(link) ? 'Accèder au Github' : 'Vister le site'}
              </button>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectPopupBox