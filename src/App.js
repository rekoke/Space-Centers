import "./App.css";
import {  ApolloProvider } from "@apollo/client";
import GetCenters from "./Components/GetCenters";
import { client } from "./GraphQL/Settings";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "./Components/GlobalStyles";
import { COLORS, SHADOW } from './Components/ThemeConstants';

const AppContainer = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.background};
    & header{
        color: ${(props) => props.theme.colors.primary};
        text-align: left;
        background: white;
        margin-top: 0;
        min-height: 60px;
        display: flex;
        align-items: center;
        & h1 {
            max-width: 900px;
            width: 100%;
            display: block;
            margin: 0 auto;
            padding-left: 40px;
        }
    }
    & main{
        flex: 1 1;
        width: 100%;
        max-width: 900px;
        margin: 50px auto 0;
        position: relative;
    }
    & footer{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        left: 0;
        right: 0;
        opacity: 0.8;
        font-size: 14px;
        color: ${(props) => props.theme.colors.primary};
        user-select: none;
        min-height: 50px;
        opacity: .3;
    }
`;

    function App() {
        return(
            <ApolloProvider client={client}>
                <ThemeProvider theme={{ colors: COLORS, boxShadow: SHADOW }}>
                    <GlobalStyles />
                    <AppContainer>
                        <header>
                            <h1>Alvaro's Spacious</h1>
                        </header>
                        <main>
                            <GetCenters/>
                        </main>
                        <footer>Made with ♥ by me</footer>
                    </AppContainer>
                </ThemeProvider>
            </ApolloProvider>
        )
    }

    export default App;
