import { NavLink } from"react-router-dom";

export const CountryCard=({country})=>{
    const{flags,name,population,region,capital}=country;
    return <li className="country-card card">
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt={flags.alt}/>
            <div className="CountryInfo">
                <p className="Card-Title">{name.common.length > 10 
                ? name.common.slice(0,10) + "..."
                :name.common}</p>
                <p>
                    <span className="Card-description">Population:</span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span className="Card-description">Region:</span>
                    {region}
                </p>
                <p>
                    <span className="Card-description">Capital:</span>
                    {capital[0]}
                </p>

               <NavLink to={`/country/${country?.name?.common}`}>
  <button>Details</button>
</NavLink>

            </div>
            
        </div>
    </li>

};