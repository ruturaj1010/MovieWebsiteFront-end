import { loadPeople } from "../reducers/PeopleReducer";
export { removePeople } from "../reducers/PeopleReducer";
import axios from "../../utils/Axios"


export const asyncLoadPeople = ( id ) => async ( dispatch, getState ) => {
    try {
        const detail = await axios.get( `/person/${id}` );
        const externalids = await axios.get( `/person/${id}/external_ids` );
        const combinedCredits = await axios.get( `/person/${id}/combined_credits` );
        const movieCredits = await axios.get( `/person/${id}/movie_credits` );
        const tvCredits = await axios.get( `/person/${id}/tv_credits` );

        let theUltimateData = {
            detail: detail.data,
            externalids: externalids.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data
        }

        dispatch( loadPeople( theUltimateData ) )
        // console.log( theUltimateData );

    } catch ( error ) {
        console.log( error );
    }
}

export default asyncLoadPeople; 2