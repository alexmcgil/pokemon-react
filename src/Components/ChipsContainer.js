import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import Chips from "./Chips";
import TerminDefinition from "./TerminDefinition";


function ChipsContainer() {

    // Стейт для массива покемонов, которые пойдут в кнопки
    const [pokemons, setPokemons] = useState([
        {name: "loading...", url: "https://pokeapi.co/404"}
    ])

    // Стейт для ссылки на покемона, которого выбрали
    const [selectedUrl, setSelectedUrl] = useState(null)


    // Асинхронная функция, которая делает запрос через axios на сервер pokeapi,
    // чтобы получить список 10'и покемонов
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

    // Обработчик события, чтобы отследить, какого покемона выбрали
    const pokemonHandler = (e) => {
        // Проверяем, у какого покемона совпадает поле "name" со значением кнопки
        for (let key in pokemons) {
            if (pokemons[key].name === e.target.textContent) {
                // Передаём в стейт ссылку на выбранного покемона
                let url = pokemons[key].url
                setSelectedUrl(url)

            }
        }

    }

    // Хук для запуска асинхронного get10Pokemon, когда компонент примонтируется
    useEffect(() => {
        get10Pokemon()
        // Пустая зависимость, чтобы get10Pokemon вызвался всего 1 раз
    }, [])


    return <main>
        <Box
            sx={{
                margin: "54px auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
            }}
        >
            {/* В props'ах передаём список покемонов для кнопок и обработчик событий */}
            <Chips pokemon={pokemons} pokemonHandler={pokemonHandler}/>

            {/* В props'ах передаём ссылку на выбранного покемона */}
            <TerminDefinition url={selectedUrl}/>
        </Box>
    </main>
}

export default ChipsContainer;
