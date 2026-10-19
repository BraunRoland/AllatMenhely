import type { AllatVezerloProps } from "../types/types";

function AllatVezerlo({allatHozzaadasa, osszesHozzadas}: AllatVezerloProps) {
    return (
        <>
        <div className="row">
            <div className="col-sm-12">
                <button onClick={() => {allatHozzaadasa()}} className="btn btn-success">Állat Hozzáadása</button>
                <button onClick={() => {osszesHozzadas()}} className="btn btn-primary">Kor Hozzáadása</button>
            </div>
        </div>
        </>
    )
}

export default AllatVezerlo;