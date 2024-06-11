import React from 'react'

type Props = {
    portfolioValue: string;
    deleteFromPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const DeletePortfolio = ({ portfolioValue, deleteFromPortfolio }: Props) => {

  return (
    <div>
        <form onSubmit={deleteFromPortfolio}>
            <input hidden={true} readOnly value={portfolioValue}/>
            <button type='submit'>Delete</button>
        </form>
    </div>
  )
}

export default DeletePortfolio