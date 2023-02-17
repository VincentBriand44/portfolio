import { createContext, useState } from 'react'

const ScrollContext = createContext()

const ScrollContextProvider = ({ children }) => {
  const [scrollable, setScrollable] = useState(true)

  return (
    <ScrollContext.Provider
      value={{
        scrollable,
        setScrollable
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollContext
export { ScrollContextProvider }
