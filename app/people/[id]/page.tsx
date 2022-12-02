export default function Page({params}){
    console.log(params);
    let id = params.id;
    let name = params.site;
    return <div>This is the page of people information with id :{id}</div>;
}