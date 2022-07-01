import styled from 'styled-components'

export const StyledCenterDescription = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.boxShadow.primary};
    position: absolute;
    top: 0;
    height: calc(66vh + 2rem);
    width: 400px;
    right: 0;
    border: 2px solid;
    padding: 40px 20px;
    box-sizing: border-box;
    transform: ${props => props.drawerOpen ? 'translateX(26%)' : 'translateX(60%)'};
    opacity: ${props => props.drawerOpen ? '1' : '0'};
    border-color: ${props => props.drawerOpen ? props.theme.colors.primary : 'transparent'};
    z-index: ${props => props.drawerOpen ? 2 : -1};
    transition: all .3s;
    &:before {
        content: "";
        width: 80%;
        height: 80px;
        position: fixed;
        background: linear-gradient(to top,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
        bottom: 40px;
    }
    h1{
        color: ${props =>props.theme.colors.primary};
    }
    p{
        color: ${props =>props.theme.colors.text};
    }
    .close {
        position: absolute;
        right: 15px;
        top: 15px;
        width: 32px;
        height: 32px;
        background-color:#e7e8eb;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        &:before,
        &:after{
            position: absolute;
            left: 15px;
            content: ' ';
            height: 25px;
            width: 2px;
            background-color: ${props =>props.theme.colors.primary};
            top: 4px;
        }
        &:before {
        transform: rotate(45deg);
        }
        &:after {
        transform: rotate(-45deg);
        }
    }
`;
