export type Allat = {
    id: number,
    nev: string;
    kor: number;
}

export type AllatListaProps = {
    allatok: Allat[];
    eletkorNovelese: (id: number) => void;
    allatTorlese: (id: number) => void;
}

export type AllatVezerloProps = {
    allatHozzaadasa: () => void;
    osszesHozzadas: () => void;
}