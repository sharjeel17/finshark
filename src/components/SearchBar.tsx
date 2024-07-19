import React, { useState } from 'react'
import { searchCompanies } from '../api/FinancialApi';
import { CompanySearch } from '../interfaces/company.interface';

interface Props {
  setSearchResult: (result: CompanySearch[]) => void;
}

const SearchBar: React.FC<Props> = ({ setSearchResult }: Props): JSX.Element => {

  const [search, setSearch] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  
  const onSearchSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
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
      <section className="relative bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form
            className="relative flex flex-col w-full p-4 space-y-4 bg-darkBlue rounded-[20px] md:flex-row md:space-y-0 md:space-x-3"
            onSubmit={onSearchSubmit}
          >
            <input
              className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
              id="search-input"
              placeholder="Search companies"
              value={search}
              onChange={handleSearchChange}
            ></input>
          </form>
        </div>
      </section>
      <div>
        {searchError && <h2>{searchError}</h2>}
      </div>
    </>
  )
}

export default SearchBar;