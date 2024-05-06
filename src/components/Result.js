export default function Result({term}){
    console.log(term);

    let listResult = term.map(element => {
        return <li key={element+1}>{element}</li>;
    });
    console.log(listResult);

    return (
        <>
        <h3>Resultado</h3>
        <span>Término de la serie: </span>
        <strong><em>{term[term.length-1]}</em></strong>
        <h4>Secuencia de la serie</h4>
        <div>
            <ul>
                {listResult}
            </ul>
        </div>
        </>
    )
}