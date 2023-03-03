import { FunctionComponent } from 'react'

type Props = {
  text: string
}

const PageEmpty: FunctionComponent<Props> = ({ text }) => (
  <div className='flex flex-col items-center justify-center w-full h-full'>
    <h2 className='text-xl font-bold text-center text-white'>{text}</h2>
  </div>
)

export default PageEmpty
