export const getAllCharacters = async ()=> {
    const response = await fetch('https://potterhead-api.vercel.app/api/characters');
    const data: CharacterType[] = await response.json();
    console.log(data)
    return data

}