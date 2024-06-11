import React from "react";
import { CompanySearch } from "../interfaces/company.interface";
import AddPortfolio from "./Portfolio/AddPortfolio";


type Props = {
    id: string;
    company: CompanySearch;
    addToPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ company, addToPortfolio }: Props): JSX.Element => {
  return (
    <div>
        <h2>
            {company.name} ({company.symbol})
        </h2>
        <p>
            {company.currency}
        </p>
        <h3>
           {company.exchangeShortName} - {company.stockExchange}
        </h3>
        <AddPortfolio symbol={company.symbol} addToPortfolio={addToPortfolio}/>
    </div>
  )
}

export default Card