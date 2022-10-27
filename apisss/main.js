// alert("Hola api")


// const request = require('request');

// const URL_API= 'https://pokeapi.co/api/v2/pokemon'

// const pedirPokemon =(pokemon)=>{
//     request.get('https://pokeapi.co/api/v2/pokemon/ditto', (error, response, body)=>{
//         // console.log('Responde',response)
//         // console.log('error',error)
//         // console.log('body',body)

//         const data = JSON.parse(body)
//         console.log(data.name);
//         console.log(data)
//     })
// }

// pedirPokemon();


const request = require('request');

const URL_API= 'https://rickandmortyapi.com/api'

const pedirPokemon =(pokemon)=>{
    request.get('https://rickandmortyapi.com/api/character', (error, response, body)=>{
        // console.log('Responde',response)
        // console.log('error',error)
        // console.log('body',body)

        const data = JSON.parse(body)
        // console.log(data.name);
        //  console.log(data.results[0])
        console.log(data.results[0]['id'])
        console.log(data.results[0]['name'])
    })
}

pedirPokemon();