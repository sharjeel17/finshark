import { useState } from 'react'
import SearchBar from '../components/SearchBar';
import ListPortfolio from '../components/Portfolio/ListPortfolio';
import CardList from '../components/CardList';
import { CompanySearch } from '../interfaces/company.interface';

type Props = {}

const SearchPage = (props: Props) => {
    const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
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
        <SearchBar setSearchResults={setSearchResults}/>
        <ListPortfolio portfolioValues={portfolioValues} deleteFromPortfolio={deleteFromPortfolio} />
        <CardList searchResults={searchResults} addToPortfolio={addToPortfolio}/>
      </>
    )
};

export default SearchPage;