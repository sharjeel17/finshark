import Card from './Card';
import { CompanySearch } from '../interfaces/company.interface';
import { v4 } from 'uuid';

interface Props {
  searchResult: CompanySearch[]
}

const CardList = ({ searchResult }: Props) => {
  return (
    <div>
      { searchResult.length > 0 ? ( 
          searchResult.map((company) => {
            return (
              <Card key={v4()} id={company.symbol} company={company} />
            );
          })
        ) : (
          <h3> No Result </h3>
        )}
        
    </div>
  )
}

export default CardList