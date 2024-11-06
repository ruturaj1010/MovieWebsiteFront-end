export { removeTv } from '../reducers/TvReducer';
import { loadTv } from '../reducers/TvReducer';
import axios from '../../utils/Axios';

export const asyncLoadTv = ( id ) => async ( dispatch, getState ) => {
    try {
        const detail = await axios.get( `/tv/${id}` );
        const externalids = await axios.get( `/tv/${id}/external_ids` );
        const recommendations = await axios.get( `/tv/${id}/recommendations` );
        const similar = await axios.get( `/tv/${id}/similar` );
        const translations = await axios.get( `/tv/${id}/translations` );
        const videos = await axios.get( `/tv/${id}/videos` );
        const watchproviders = await axios.get( `/tv/${id}/watch/providers` );

        let theUltimateData = {
            detail: detail.data,
            externalids: externalids.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations : translations.data.translations.map(item=> item.name),
            videos: videos.data.results.find( m => ( m.type === 'Trailer' ) ),
            watchProviders: watchproviders.data
        }
        
        dispatch( loadTv( theUltimateData ) )
        // console.log( theUltimateData );

    } catch ( error ) {
        console.log( "Error :", error );
    }
}

export default asyncLoadTv;

