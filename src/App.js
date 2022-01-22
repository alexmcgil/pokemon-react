import React from 'react';
import ContainerReact from "./Components/ContainerReact";
import {Container} from "@mui/material";


function App() {

    return (
        <Container sx={{
            maxWidth: "1280px",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <ContainerReact/>
        </Container>
    )
}

export default App;
