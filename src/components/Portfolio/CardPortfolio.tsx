import React from 'react'
import DeletePortfolio from './DeletePortfolio'

type Props = {
    portfolioValue: string
    deleteFromPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, deleteFromPortfolio }: Props) => {
  return (
    <div>
        <p>{portfolioValue}</p>
        <DeletePortfolio portfolioValue={portfolioValue} deleteFromPortfolio={deleteFromPortfolio} />
    </div>
  )
}

export default CardPortfolio