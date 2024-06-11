import React from 'react'
import CardPortfolio from './CardPortfolio'

type Props = {
    portfolioValues: string[]
}

const ListPortfolio = ({ portfolioValues }: Props) => {
  return (
    <div>
        {portfolioValues.map((portfolioValue) => {
            return (
                <CardPortfolio key={portfolioValue} portfolioValue={portfolioValue}/>
            )
        })}
    </div>
  )
}

export default ListPortfolio