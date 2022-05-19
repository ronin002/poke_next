import Image from 'next/image'

import styles from '../../styles/Pokemon.module.css'

import {useRouter} from 'next/router'

import lineReader from 'line-reader'

const fs = require('fs');
const readline = require('readline');

export const getStaticPaths = async() => {

    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    // params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: {pokemonId: (index+1).toString() },
        }
    })

    return {
        paths,
        fallback:true,
    }
}

export const getStaticProps = async(context) => {

    let pokemon_id = 0
    let id_pokemon = 0
    
    let pokemon_name = '';
    
    const name = context.params.pokemonId.toLowerCase()
    console.log(`name->:${name}` );


    const fileStream = fs.createReadStream('./src/resource/pokemonsnames.txt');

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
  
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        //console.log(`Line from file: ${line}`);

        let str = line;
        let arr = str.split(",");

        pokemon_name = arr[0];
        pokemon_id = arr[1];
        
        //console.log(`Nome e ID: ${pokemon_name} - ${pokemon_id }`);

        if (name == pokemon_name){
            id_pokemon = pokemon_id
            break
        }

    }

   
   

    //const id = context.params.pokemonId
    console.log(`id:${id_pokemon}` );
    console.log(`name:${name}` );

    /*
    if (id_pokemon != 0){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}`)

        const data = await res.json()

        return {
            props: {pokemon:data},
        }
    }
    
    else if (id_pokemon != 0){
         return {
             props: {pokemon:'notfound'},
         }
    }*/

     return {
             props: {pokemon:`[{"id":${id_pokemon}}]`},
         }
}

export default function Pokemon({pokemon}){

    const router = useRouter()

    if (router.isFallback){
        return <div>Carregando...</div>
    }

    return(
        <div className={styles.pokemon_container}>
            <h1>{pokemon}</h1>
        </div>
    )
}