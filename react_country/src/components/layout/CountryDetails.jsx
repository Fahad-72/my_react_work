import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryindiData } from "../../api/postApi";
import { Loader } from "../../components/layout/UI/loader";

export const CountryDetails = () => {
  const Params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

 useEffect(() => {
  startTransition(async () => {
    try {
      const res = await getCountryindiData(Params.id);
      console.log("API response:", res);
      if (res.status === 200) {
        setCountry(res.data); // Use res.data directly — NOT res.data[0]
      } else {
        console.error("Unexpected status:", res.status);
      }
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  });
}, [Params.id]);


  if (!country || isPending) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className="flag"
          />

          <div className="country-content">
            <p className="card-title">{country.name.official}</p>

            <div className="infoContainer">
              <p>
                <span className="card-description">Native Names:</span>{" "}
                {country.name.nativeName
                  ? Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="card-description">Region:</span>{" "}
                {country.region}
              </p>
              <p>
                <span className="card-description">Subregion:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="card-description">Capital:</span>{" "}
                {country.capital?.[0] || "N/A"}
              </p>
              <p>
                <span className="card-description">Top Level Domain:</span>{" "}
                {country.tld?.[0] || "N/A"}
              </p>
              <p>
                <span className="card-description">Currencies:</span>{" "}
                {country.currencies
                  ? Object.keys(country.currencies)
                      .map((key) => country.currencies[key].name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Languages:</span>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="country-card-Backbtn">
          <NavLink to="/country" className="Backbtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
