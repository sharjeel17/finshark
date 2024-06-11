
import CardPortfolio from './CardPortfolio'

type Props = {
    portfolioValues: string[];
    deleteFromPortfolio: (e: React.BaseSyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, deleteFromPortfolio }: Props) => {
  return (
    <div>
        {portfolioValues.map((portfolioValue) => {
            return (
                <CardPortfolio key={portfolioValue} portfolioValue={portfolioValue} deleteFromPortfolio={deleteFromPortfolio}/>
            )
        })}
    </div>
  )
}

export default ListPortfolio