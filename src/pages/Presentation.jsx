import noImage from '../assets/img/no-image.webp'
import {
  background,
  description,
  fullname,
  image
} from '../assets/json/config.json'

const Presentation = () => (
  <section
    className={`flex flex-col items-center justify-center h-full bg-center bg-cover pb-24 md:pb-40 page snap-center`}
    style={{ backgroundImage: `url(${background})` }}
    id='presentation'
  >
    <img
      src={image ?? noImage}
      alt={`photo de ${fullname}`}
      className={`object-cover w-40 h-40 mx-auto my-5 rounded-full bg-slate-900 ${
        !image && 'p-8'
      }`}
      draggable='false'
    />
    <h1 className='text-3xl font-bold'>{fullname}</h1>
    <p className='max-w-4xl mx-4 mt-10 text-center'>{description}</p>
  </section>
)

export default Presentation
