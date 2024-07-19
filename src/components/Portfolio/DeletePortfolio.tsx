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
            <button 
              type='submit' 
              className="block w-full py-3  duration-300 border-2 rounded-lg text-white bg-red-500 hover:text-red-500
                         hover:bg-white border-red-500"
             >
              Delete</button>
        </form>
    </div>
  )
}

export default DeletePortfolio