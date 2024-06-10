import { useState } from 'react'
import './App.css'
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import { CompanySearch } from './interfaces/company.interface'

function App() {
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

  return (
    <>
      <SearchBar setSearchResult={setSearchResult}/>
      <CardList searchResult={searchResult} />
    </>
  )
}

export default App
