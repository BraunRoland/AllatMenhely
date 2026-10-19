import type { AllatListaProps } from "../types/types";

function AllatLista({allatok, eletkorNovelese, allatTorlese}: AllatListaProps) {
    return (
        <>
        <div className="row">
            <div className="col sm-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Név</th>
                            <th>Kor</th>
                            <th>Életkor növelése</th>
                            <th>Állat törlése</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allatok.map(allat => (
                                <tr key={allat.id}>
                                    <td>{allat.nev}</td>
                                    <td>{allat.kor}</td>
                                    <td><button className="btn btn-warning" onClick={()=> {eletkorNovelese(allat.id)}}>Hozzáadás</button></td>
                                    <td><button className="btn btn-danger" onClick={()=> {allatTorlese(allat.id)}}>Törlés</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default AllatLista;