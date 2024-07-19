import React from "react";
import { CompanySearch } from "../interfaces/company.interface";
import AddPortfolio from "./Portfolio/AddPortfolio";
import { Link } from "react-router-dom";


type Props = {
    id: string;
    company: CompanySearch;
    addToPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ company, addToPortfolio, id }: Props): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg"
      key={id}
      id={id}
    >
      <Link to={`/company/${company.symbol}`}>
        <h2 className="font-bold text-center text-veryDarkViolet">
          {company.name} ({company.symbol})
        </h2>
      </Link>
      
      <p className="text-veryDarkBlue">{company.currency}</p>
      <p className="font-bold text-veryDarkBlue">
        {company.exchangeShortName} - {company.stockExchange}
      </p>
      <AddPortfolio
        addToPortfolio={addToPortfolio}
        symbol={company.symbol}
      />
    </div>
  )
}

export default Card