import styled from "styled-components";

export const StyledCenters = styled.div`
    & ul{
        display: grid;
        grid-template-rows: repeat(3, 22vh);
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        padding: 0 20px;
        & li{
            background: white;
            border-radius: 5px;
            box-shadow: ${(props) => props.theme.boxShadow.primary};
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            border: 2px solid transparent;
            transition: border .3s;
            justify-content: flex-start;
            &:hover{
                border: 2px solid;
                border-color: ${(props) => props.theme.colors.primary};
            }
            h3{
                color: ${(props) => props.theme.colors.primary};
                font-size: 16px;
                margin: 0;
                text-align: center;
                margin-top: 10px;
            }
            img{
                max-height: 70%;
            }
        }
    }
`;
