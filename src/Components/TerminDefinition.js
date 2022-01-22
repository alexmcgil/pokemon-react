import React, {useEffect, useState} from 'react';
import {Box, createTheme, ThemeProvider, Typography} from "@mui/material";


// Костомная тема для заголовка и параграфов
const theme = createTheme({
    typography: {
        h1: {
            fontSize: 48,
            color: "#A0A0A0",
            fontFamily: "Raleway",
            textTransform: "capitalize",
            fontWeight: 700,
            boxSizing: "border-box"
        },
        p: {
            display: "block",
            fontFamily: "Raleway",
            fontSize: "17px",
            lineHeight: "26px",
            textAlign: "left",
            color: "#A0A0A0"
        }
    },
});


function TerminDefinition(props) {

    // Стейт для выбранного покемона, которого будем отрисовывать
    const [selectedPokemon, setSelectedPokemon] = useState({
        // Изначальные значения для стейта, данные приближены к тем, что будем парсить
        name: "Выберите покемона",
        sprites: {
            front_default: "https://avatars.githubusercontent.com/u/19692032?v=4"
        },
        stats: [
            null,
            {
                base_stat: null
            },
        ],
        moves: []
    })


    // Асинхронная функция для запроса данных c сервера poke.io
    const getPokemon = (url) => {

        // Если url не задан, функция прерывется return'ом
        if (url == null) {
            return
        }
        const axios = require('axios');
        axios.get(url)
            .then((response) => {
                setSelectedPokemon(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // Хук для запроса на сервер, если через пропсы компонента получила ссылку на покемона
    useEffect(() => {
        getPokemon(props.url)
    }, [props.url])

    // Кастомный inline стиль для изображения
    const imgStyle = {
        width: "160px",
        height: "160px",
        margin: "0 auto",
        objectFit: "cover"
    }

    return <Box
        sx={{
            padding: "44px 44px 16px",
            width: "484px",
            height: "440px",
            backgroundColor: "#000",
        }}
    >
        <ThemeProvider theme={theme}>
            {/* Парсинг имени покемона */}
            <Typography variant="h1">{selectedPokemon.name}</Typography>
            <Box
                sx={{
                    margin: "44px 0 39px",
                    marginTop: "44px",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                }}>
                {/* Парсинг изображения покемона */}
                <img
                    style={imgStyle}
                    src={selectedPokemon.sprites.front_default}
                    alt={selectedPokemon.name}/>
            </Box>

            {/* Если компонента получила ссылку на покемона и сервер вернул данные,
            то отрисовываем информацию о покемоне */}
            <Typography variant="p">
                {selectedPokemon.moves.length > 0 && "Снялса в "}
                {selectedPokemon.moves.length > 0 && selectedPokemon.moves.length}
                {selectedPokemon.moves.length === 1 && " серии"}
                {selectedPokemon.moves.length > 1 && " сериях"}
            </Typography>
            <Typography variant="p">
                {selectedPokemon.id && "id:"} {selectedPokemon.id}
            </Typography>
            <Typography variant="p">
                {selectedPokemon.id && "height:"} {selectedPokemon.height}
            </Typography>
            <Typography variant="p">
                {selectedPokemon.stats[1].base_stat && "attack:"} {selectedPokemon.stats[1].base_stat}
            </Typography>
        </ThemeProvider>
    </Box>
}

export default TerminDefinition;
