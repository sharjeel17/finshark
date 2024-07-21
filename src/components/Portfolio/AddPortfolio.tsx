import React from "react";

type Props = {
  symbol: string;
  addToPortfolio: (e: React.BaseSyntheticEvent) => void;
};

const AddPortfolio = ({ symbol, addToPortfolio }: Props) => {
  return (
    <div className="mt-2">
      <form onSubmit={addToPortfolio}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button
          type="submit"
          className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
        >
          Add to portfolio
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
