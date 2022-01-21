import React from 'react';
import ContainerReact from "./Components/ContainerReact";
import {Container} from "@mui/material";

function App() {

    return (
        <Container sx={{
            padding: 0,
        }}>
                <ContainerReact/>
        </Container>
    )
}

export default App;
