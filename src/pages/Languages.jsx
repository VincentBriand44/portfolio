import languages from '../json/languages.json'

const Languages = () => (
  <div
    className='flex items-center justify-center h-full pb-24 page md:pb-40 snap-center'
    id='languages'
  >
    <div className={`grid grid-cols-1 gap-2 lg:gap-10 lg:grid-cols-5`}>
      {languages.map(({ title, file, childs }) => (
        <div key={title} className='flex items-center gap-4 lg:flex-col'>
          <div className='flex flex-col text-center'>
            <div className='flex items-center justify-center w-24 h-24 bg-black/[.3] rounded-full lg:w-32 lg:h-32 select-none'>
              <img
                className='w-16 h-16 lg:w-20 lg:h-20'
                src={`/src/img/languages/${file}`}
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
                      src={`/src/img/languages/${file}`}
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
