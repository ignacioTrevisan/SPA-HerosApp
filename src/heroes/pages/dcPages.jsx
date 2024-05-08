import { HeroesList } from "../components/index"

export const DcPages = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <h1>DC Comics</h1>
            <hr />

            <HeroesList publisher={'DC Comics'} />
        </div >
    )
}
