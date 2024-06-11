import React from 'react'

type Props = {
    symbol: string;
    addToPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const AddPortfolio = ({ symbol, addToPortfolio }: Props) => {
    
    return (
        <form onSubmit={addToPortfolio}>
            <input readOnly={true} hidden={true} value={symbol} />
            <button type='submit'>Add to portfolio</button>
        </form>
    )
}

export default AddPortfolio