import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import Chips from "./Chips";
import TerminDefinition from "./TerminDefinition";


function ChipsContainer(){

    const [pokemons, setPokemons] = useState([
        {name: "loading...", url: "https://pokeapi.co/404"}
    ])

    const [selectedUrl, setSelectedUrl] = useState(null)

    const get10Pokemon = () => {
        const axios = require('axios');
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10")
            .then((response) => {
                setPokemons(response.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const pokemonHandler = (e) => {
        for (let name in pokemons){
            if (pokemons[name]["name"] === e.target.textContent){
                let url = pokemons[name].url
                setSelectedUrl(url)

            }
        }

    }

    useEffect(() => {
        get10Pokemon()
    }, [])



    return  <Box
        sx={{
            margin: "54px auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            padding: "0 150px",
        }}
    >
        <Chips pokemon={pokemons} pokemonHandler={pokemonHandler}/>
        <TerminDefinition url={selectedUrl}/>
    </Box>
}

export default ChipsContainer;
