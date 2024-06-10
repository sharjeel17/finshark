import React, { useState } from 'react'
import { searchCompanies } from '../api/FinancialApi';
import { CompanySearch } from '../interfaces/company.interface';

interface Props {
  setSearchResult: (result: CompanySearch[]) => void;
}

const SearchBar: React.FC<Props> = ({ setSearchResult }: Props): JSX.Element => {

  const [search, setSearch] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  
  const onSearch = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const result = await searchCompanies(search);
    console.log(result);

    if(typeof result === "string"){
      setSearchError(result)
      console.log(searchError);

    } 
    else if (Array.isArray(result.data)){
      setSearchError("");
      setSearchResult(result.data);
    }
    
  }

  return (
    <>
      <div>
          <input value={search} onChange={handleChange}></input>
          <button onClick={onSearch}>Search</button>
      </div>
      <div>
        {searchError && <h2>{searchError}</h2>}
      </div>
    </>
  )
}

export default SearchBar;