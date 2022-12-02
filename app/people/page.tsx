import React,{use} from "react";
import Tableindex from "../../components/ReactTable";

export async function getData(){
    let data = await fetch(`https://swapi.py4e.com/api/people`);
    return data.json();
}

export default function Page(){
    let {results}= use(getData());
    const columns =[
    { Header: "Name", accessor: "name" },
    { Header: "Height", accessor: "height" },
    { Header: "Mass", accessor: "mass" },
    { Header: "Birth Year", accessor: "birth_year" },
    ];
    return<Tableindex results={results} columns={columns}/>;
}