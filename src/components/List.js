import Item from "./Item"

function List() {
    return (
        <>
            <h1> Lista teste </h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2004} />
                <Item marca="Volkvagen" ano_lancamento={2018} />
                <Item ano_lancamento={2013} />
                <Item/>
            </ul>
        </>
    )
}
export default List