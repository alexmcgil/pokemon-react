import React from 'react';
import {Box} from "@mui/material";
import Chips from "./Chips";
import TerminDefinition from "./TerminDefinition";


function ChipsContainer(){

    // Заменяем подложку данных на настоящие в следующем коммите
    const data = ["bulbasaur","ivysaur","venusaur","charmander", "charizard", "weedle","pikachu","rikachu","slowpoke", "magick carp"]

    let dataTermin = {
        name: "bulbasaur",
        img: "picture.png",
        description: {
            number: 78,
            id: 1,
            height: 7,
            attack: 49
        }
    }


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
        <Chips data={data}/>
        <TerminDefinition dataTermin={dataTermin}/>
    </Box>
}

export default ChipsContainer;
