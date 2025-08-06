import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/layout/UI/loader";
import { CountryCard } from "../components/layout/CountryCard";


export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries ,setCountries ] = useState([]);

   
    useEffect(() => {
  startTransition(async () => {
    const res = await getCountryData(); // assuming this fetches the list
    if (res.status === 200) {
      const sortedData = res.data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedData);
    }
  });
}, []);


    if(isPending) return <Loader />;
    return (
        <section className="country-section" > 
        <ul className="grid grid-four-cols">
            {countries.map((CurCountry,index)=>{
                return<CountryCard country ={CurCountry} key ={index}/>
            })}</ul>


        </section>
    );
}