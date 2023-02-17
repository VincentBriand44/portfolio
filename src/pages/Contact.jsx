import { email, socials } from '../assets/json/config.json'

const Contact = () => (
  <div
    className='flex flex-col items-center justify-center h-full page text-slate-800 snap-center'
    id='contact'
  >
    {email && <p>Email: <a href={`mailto:${email}`}>{email}</a></p>}


    {socials.map((social, index) => (
      <a href={social.link} key={index}>
        <img src={social.icon} alt="" />
        <p>{social.title}</p>
      </a>
    ))}
  </div>
)

export default Contact
