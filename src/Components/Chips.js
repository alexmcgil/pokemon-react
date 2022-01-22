import React from 'react';
import {Box} from "@mui/material";
import ButtonChips from "./ButtonChip";


function Chips(props) {

    return <Box
        sx={{
            width: "484px",
            margin: "auto 12px auto 0",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center,"
        }} onClick={(e) => { props.pokemonHandler(e); }}
    >
            {props.pokemon.map((val, index) => (
                <ButtonChips key={index} pokemon={val}/>
            ))}
    </Box>
}

export default Chips;
