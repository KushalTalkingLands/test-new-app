import React,{use} from "react";
import Tableindex from "../../components/ReactTable";

export async function getData(){
    let data = await fetch(`https://swapi.py4e.com/api/planets`);
    return data.json();
}
export default function Page(){
    let {results}= use(getData());
    const columns = [
        {  
        Header: 'Name',  
        accessor: 'name'  
       },
       {  
       Header: 'Diameter',  
       accessor: 'diameter'  
       },
       {  
        Header: 'Climate',  
        accessor: 'climate'  
        },
        {  
            Header: 'Population',  
            accessor: 'population'  
        }
    ]
    return<Tableindex results={results} columns={columns}/>;
}