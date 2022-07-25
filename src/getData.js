import axios from "axios";

export const getRepos = async(org) => {
    const link = "https://api.github.com/orgs/"+org+"/repos";
    const results = await axios.get(link,{
        headers: {
            Authorization: process.GITHUB_TOKEN,
          }}
    );
    const arrayNames = results.data.map(element => {
        return element.name;
    });
    console.log(arrayNames);
    return arrayNames;
 };