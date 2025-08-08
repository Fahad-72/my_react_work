import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/layout/UI/loader";
import { CountryCard } from "../components/layout/CountryCard";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      const res = await getCountryData();
      if (res.status === 200) {
        const sortedData = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedData);
        console.log("countries that are fetched::::",countries  );
      }
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

console.log("countries fetched::::",countries  );


  if (isLoading) return <Loader />;

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((CurCountry, index) => (
          <CountryCard country={CurCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};
