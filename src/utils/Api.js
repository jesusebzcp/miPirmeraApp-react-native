

const Base = `https://yts.lt/api/v2/`

class Api {
    async getSuggestion(id){
        const query = await fetch(`${Base}movie_suggestions.json?movie_id=10%{id}`);
       const data = await query.json();

       return data
    }

 
}
 
export default new Api();