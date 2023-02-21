import languages from '../assets/json/languages.json'

const Languages = () => (
  <div
    className='flex items-center justify-center h-full pb-24 page lg:pb-40 snap-center'
    id='languages'
  >
    <div
      className={`flex flex-wrap justify-center w-full p-8 ${
        languages.length > 7 && 'overflow-x-scroll'
      } sm:overflow-hidden sm:w-full sm:px-32 max-h-full flex-col gap-2 lg:gap-10 lg:flex-row gap-x-12 max-w-screen-2xl`}
    >
      {languages.map(({ title, file, childs }) => (
        <div key={title} className='flex items-center gap-2 lg:flex-col'>
          <div className='flex flex-col text-center'>
            <div className='flex justify-center items-center w-14 h-14 bg-black/[.3] rounded-full lg:w-28 lg:h-28 select-none'>
              <img
                className='w-8 h-8 lg:w-16 lg:h-16'
                src={
                  file
                    ? `/src/assets/img/languages/${file}`
                    : '/src/assets/img/no-image.webp'
                }
                draggable='false'
                title={title}
              />
            </div>
            {/* <p>{title}</p> */}
          </div>
          <div className='flex flex-wrap justify-center w-24 ml-2 lg:ml-0 lg:w-32 last:mt-0'>
            {childs.map(({ title, file }, i, a) => {
              let marginTop = '0'
              if (i === a.length - 1 && (a.length - 1) % 3 === 0) {
                marginTop = '10px'
              } else if ((i + 2) % 3 === 0 && i !== a.length - 1) {
                marginTop = '10px'
              }
              return (
                <div
                  key={i}
                  className='flex flex-col items-center w-1/3'
                  style={{ marginTop }}
                >
                  <div className='flex items-center justify-center w-8 h-8 text-center bg-white rounded-full select-none'>
                    <img
                      src={`/src/assets/img/languages/${file}`}
                      className='w-6 h-6'
                      draggable='false'
                      title={title}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Languages
