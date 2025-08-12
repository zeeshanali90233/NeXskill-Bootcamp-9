import { useParams } from "react-router";

const Detail = () => {
    let params = useParams();

    return (
        <div>
            DETAIL PAge of {params.id}
        </div>
    )
}

export default Detail