import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/layout/UI/loader";
import { CountryCard } from "../components/layout/CountryCard";
import { SearchFilter } from "../components/layout/UI/searchfilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      const res = await getCountryData();
      if (res.status === 200) {
        setCountries(res.data); // removed sorting
        console.log("countries fetched::::", res.data);
      }
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true; // keep all if search is empty
  };

  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  // Main logic for search + filter
  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  if (isLoading) return <Loader />;

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filteredCountries.map((CurCountry, index) => (
          <CountryCard country={CurCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};
