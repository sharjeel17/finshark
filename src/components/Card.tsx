import React from "react";
import { CompanySearch } from "../interfaces/company.interface";


type Props = {
    id: string
    company: CompanySearch
}

const Card: React.FC<Props> = ({ company }: Props): JSX.Element => {
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
    </div>
  )
}

export default Card