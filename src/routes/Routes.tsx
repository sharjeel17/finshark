import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import CompanyPage from "../pages/CompanyPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "company/:ticker",
                element: <CompanyPage />
            }
        ]
    }
]);