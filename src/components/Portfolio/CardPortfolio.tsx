import React from 'react'

type Props = {
    portfolioValue: string
}

const CardPortfolio = ({ portfolioValue }: Props) => {
  return (
    <div>
        <p>{portfolioValue}</p>
    </div>
  )
}

export default CardPortfolio