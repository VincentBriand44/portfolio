const Contact = () => (
  <div
    className='flex flex-col items-center justify-center h-full page text-slate-800 snap-center'
    id='contact'
  >
    <label htmlFor='name' className='text-slate-200'>
      Prénom/NOM
    </label>
    <input
      type='text'
      name='name'
      id=''
      placeholder='Prénom NOM'
      className='w-full h-10 max-w-2xl p-2 mb-8 bg-gray-200 rounded-lg'
    />
    <label htmlFor='email' className='text-slate-200'>
      Email
    </label>
    <input
      type='email'
      name='email'
      placeholder='exemple@email.fr'
      className='w-full h-10 max-w-2xl p-2 mb-8 bg-gray-200 rounded-lg'
    />
    <label htmlFor='subject' className='text-slate-200'>
      Sujet
    </label>
    <input
      type='text'
      name='subject'
      placeholder='Mon sujet'
      className='w-full h-10 max-w-2xl p-2 mb-8 bg-gray-200 rounded-lg'
    />
    <label htmlFor='message' className='text-slate-200'>
      Message
    </label>
    <textarea
      name='message'
      className='w-full h-32 max-w-2xl p-2 mb-8 bg-gray-200 rounded-lg resize-y'
      placeholder='Mon message'
    ></textarea>
    <button className='px-8 py-2 font-medium border-2 border-gray-600 rounded-md text-slate-200 hover:bg-slate-200 hover:text-gray-800 hover:border-gray-800'>
      Envoyer
    </button>
  </div>
)

export default Contact
