import React from 'react';
import {Box} from "@mui/material";
import ButtonChips from "./ButtonChip";


function Chips(props) {

    // Вешаем обработчик событий на div (Box в mui), после отслеживаем свойство .textContent по event.target
    return <Box
        onClick={(e) => { props.pokemonHandler(e); }}
        sx={{
            width: "484px",
            margin: "auto 12px auto 0",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center,"
        }}>
            {/* Парсим кнопки методом map, задаём key по индексу, т.к. удалять определенные кнопки не планируем */}
            {props.pokemon.map((val, index) => (
                <ButtonChips key={index} pokemon={val}/>
            ))}
    </Box>
}

export default Chips;
