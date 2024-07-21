import Card from "./Card";
import { CompanySearch } from "../interfaces/company.interface";
import { v4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  addToPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const CardList = ({ searchResults, addToPortfolio }: Props) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={v4()}
              company={result}
              addToPortfolio={addToPortfolio}
            />
          );
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  );
};

export default CardList;
