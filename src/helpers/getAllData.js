

export const getAllData = async () => {

    const url = `https://dragon-ball-super-api.herokuapp.com/api/characters`
    const resp = await fetch(url)
    const data = await resp.json()

    // const newData = []
    // const allData = data.concat(newData)

    const characters = data.map( info => ({
        id: info.id,
        nombre: info.name,
        img: info.imageUrl,
        origen: info.originplanet,
        rol: info.role,
        especie: info.specie,
        estado: info.status,
        transformacion: info.transform,
        universo: info.universe
    }) )

    return characters
    
}