import styled from "styled-components";

export const StyledPager = styled.div`
    ul{
        display: flex;
        justify-content: center;
        margin-top: 30px;
        li{
            display: none;
            margin: 0 10px;
            opacity: .6;
            cursor: pointer;
            transition: opacity .2s;
            &:hover{
                opacity: 1;
            }
        }
        li.previous,
        li.next{
            display: block;
        }
    }
`;
