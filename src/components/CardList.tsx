import Card from './Card';
import { CompanySearch } from '../interfaces/company.interface';
import { v4 } from 'uuid';

interface Props {
  searchResult: CompanySearch[];
  addToPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const CardList = ({ searchResult, addToPortfolio }: Props) => {
  return (
    <div>
      { searchResult.length > 0 ? ( 
          searchResult.map((company) => {
            return (
              <Card key={v4()} id={company.symbol} company={company} addToPortfolio={addToPortfolio}/>
            );
          })
        ) : (
          <h3> No Result </h3>
        )}
        
    </div>
  )
}

export default CardList