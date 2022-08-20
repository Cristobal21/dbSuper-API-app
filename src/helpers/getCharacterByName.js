

export const getCharacterByName = async ( name ) => {

    const url = `https://dragon-ball-super-api.herokuapp.com/api/characters/${ name }`
    const resp = await fetch(url)
    const data = await resp.json()

    const character = {
        id: data.id,
        nombre: data.name,
        img: data.imageUrl,
        origen: data.originplanet,
        rol: data.role,
        especie: data.specie,
        estado: data.status,
        transformacion: data.transform,
        universo: data.universe
    }

    return character
    
}