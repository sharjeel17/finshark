import React from 'react'
import DeletePortfolio from './DeletePortfolio'
import { Link } from 'react-router-dom';

type Props = {
    portfolioValue: string
    deleteFromPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, deleteFromPortfolio }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        <Link to={`/company/${portfolioValue}`} >
          <p className="pt-6 text-xl font-bold">{portfolioValue}</p>
        </Link>
        <DeletePortfolio portfolioValue={portfolioValue} deleteFromPortfolio={deleteFromPortfolio} />
    </div>
  )
}

export default CardPortfolio