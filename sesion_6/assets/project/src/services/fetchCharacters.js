export async function getCharacters(page) {
    try{
        const response = await fetch(['https://rickandmortyapi.com/api/character/?page', page].join('='));
        if(!response.ok) throw new Error('Something went wrong');
        return await response.json();
    }
    catch(error){
        return new Error(error);
    }
}