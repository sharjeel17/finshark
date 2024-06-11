import React, { SyntheticEvent, useState } from 'react'
import './App.css'
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import { CompanySearch } from './interfaces/company.interface'
import ListPortfolio from './components/Portfolio/ListPortfolio'

function App() {
  
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const addToPortfolio = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if(portfolioValues.find((value) => value === e.target[0].value)) return;
    
    setPortfolioValues([...portfolioValues, e.target[0].value])
  }
  
  return (
    <>
      <SearchBar setSearchResult={setSearchResult}/>
      <ListPortfolio portfolioValues={portfolioValues} />
      <CardList searchResult={searchResult} addToPortfolio={addToPortfolio}/>
    </>
  )
}

export default App
