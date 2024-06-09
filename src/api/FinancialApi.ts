import axios from 'axios'
import { CompanySearch } from '../interfaces/company.interface'

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_FINANCIAL_PREP_API_KEY}`
        )

        return data;

    } catch (error) {

        if(axios.isAxiosError(error)){
            console.log("Axios error");
            console.log(error.message);
            return error.message;
        }
        
        else {
            console.log("Unexpected error");
            console.error(error);
            return "Unexpected error";
        }
    }
}