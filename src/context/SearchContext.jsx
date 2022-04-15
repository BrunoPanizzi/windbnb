import { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export default function SearchProvider({ children }) {
  const [location, setLocation] = useState('Helsinki, Finland')

  return (
    <SearchContext.Provider value={{ location, setLocation }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
