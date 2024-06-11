import React, { SyntheticEvent, useState } from 'react'
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import { CompanySearch } from './interfaces/company.interface'
import ListPortfolio from './components/Portfolio/ListPortfolio'
import Navbar from './components/Navbar'


function App() {
  
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const addToPortfolio = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if(portfolioValues.find((value) => value === e.target[0].value)) return;

    setPortfolioValues([...portfolioValues, e.target[0].value])
  }

  const deleteFromPortfolio = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const filteredValues = portfolioValues.filter((value) => value !== e.target[0].value);
    setPortfolioValues(filteredValues);
  }
  
  return (
    <>
    <Navbar />
      <SearchBar setSearchResult={setSearchResult}/>
      <ListPortfolio portfolioValues={portfolioValues} deleteFromPortfolio={deleteFromPortfolio} />
      <CardList searchResult={searchResult} addToPortfolio={addToPortfolio}/>
    </>
  )
}

export default App
