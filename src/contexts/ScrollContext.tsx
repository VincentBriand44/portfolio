import {
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react'

type Props = PropsWithChildren<{
  scrollable: boolean
  setScrollable: Dispatch<SetStateAction<boolean>>
}>

const ScrollContext = createContext({} as Props)

const ScrollContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [scrollable, setScrollable] = useState(true)

  return (
    <ScrollContext.Provider
      value={{
        scrollable,
        setScrollable,
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollContext
export { ScrollContextProvider }
