import { description, fullname } from '../assets/json/config.json'

const Presentation = () => (
  <header
    className="flex flex-col items-center justify-center h-full bg-[url('/src/assets/img/background.png')] pb-24 md:pb-40 page snap-center"
    id='presentation'
  >
    <img
      src='/src/assets/img/picture.jpg'
      alt={`photo de ${fullname}`}
      className='object-cover w-40 h-40 mx-auto my-5 rounded-full'
      draggable='false'
    />
    <h1 className='text-3xl font-bold'>{fullname}</h1>
    <p className='max-w-4xl mt-10 text-center mx-4'>{description}</p>
  </header>
)

export default Presentation
