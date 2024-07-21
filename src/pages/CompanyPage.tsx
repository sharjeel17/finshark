import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCompanyProfile } from "../api/FinancialApi";
import { CompanyProfile } from "../interfaces/company.interface";
import Sidebar from "../components/Sidebar";
import CompanyDashboard from "../components/CompanyDashboard";

type Props = {};

const CompanyPage = (props: Props) => {
  const { ticker } = useParams();
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile>();
  const [companyProfileError, setCompanyProfileError] = useState<string>("");

  useEffect(() => {
    const getProfileInit = async () => {
      if (ticker) {
        const result = await getCompanyProfile(ticker);

        if (typeof result === "string") {
          setCompanyProfileError(result);
        } else if (Array.isArray(result.data)) {
          setCompanyProfileError("");

          result.data.length > 0
            ? setCompanyProfile(result.data[0])
            : setCompanyProfileError(
                "Please enter a correct company identifier"
              );
        }
      }
    };

    getProfileInit();
  }, []);

  return (
    <div>
      {companyProfileError && !companyProfile ? (
        <h1>{companyProfileError}</h1>
      ) : (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard />
        </div>
      )}
    </div>
  );
};

export default CompanyPage;
