import { FunctionComponent, PropsWithChildren } from 'react'

const PageEmpty: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    <h2 className="text-xl font-bold text-center text-white">{children}</h2>
  </div>
)

export default PageEmpty
