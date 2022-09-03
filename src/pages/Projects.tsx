import projects from '../json/projects.json'

const Projects = () => (
  <div
    className='flex items-center justify-center h-full page snap-center'
    id='projects'
  >
    <div className={`grid grid-cols-2 gap-2 lg:gap-10 lg:grid-cols-3`}>
      {projects.map(
        ({ title, file, link }, index) =>
          index < 9 && (
            <a
              href={link ?? undefined}
              key={index}
              className='flex items-center lg:flex-colflex flex-col mb-2 text-center justify-center w-32 md:w-48 lg:w-64 aspect-video bg-black/[.3] rounded-lg select-none bg-cover font-bold hover:bg-black/[.5] hover:text-white bg-center'
              style={{ backgroundImage: `url(/src/img/projects/${file})` }}
            >
              <p>{title}</p>
            </a>
          )
      )}
    </div>
  </div>
)

export default Projects
