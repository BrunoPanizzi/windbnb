import GlobalStyles from './assets/styles/GlobalStyles'

import SearchProvider from './context/SearchContext'

import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <>
      <GlobalStyles />
      <SearchProvider>
        <Header />
        <Content />
      </SearchProvider>
    </>
  )
}

export default App
