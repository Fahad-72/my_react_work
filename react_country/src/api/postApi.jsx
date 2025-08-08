import axios from "axios";

const api =axios.create({
    baseURL:"https://restcountries.com/v3.1",

});
//Http get methods//

export const getCountryData =()=>{
    return api.get("/all?fields=name,population,region,capital,flags");
};

//http get methos for ind countries names

// in postApi.js
export const getCountryindiData = ({name}) => {
  return api.get(
    `/name/${name}?fulltext=true&fields=name,population,region,subregion,
    capital,tld,currencies,languages,borders,flags`
  );
};







