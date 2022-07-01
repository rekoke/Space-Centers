import styled from 'styled-components'

export const StyledDeparturesList = styled.div`
    flex: 1 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .num-flights{
        display: flex;
        flex-direction: column;
        color: ${props =>props.theme.colors.primary};
        margin-bottom: 35px;
        span{
            font-weight: 900;
            margin-top: 5px;
        }
    }
    h3{
        color: ${props =>props.theme.colors.text};
        margin-bottom: 20px;
    }
    .list-container{
        flex: 1 1;
        overflow: scroll;
        ul{
            overflow: scroll;
            height: 100%;
        }
        li{
            display: flex;
            margin-bottom: 15px;
            transition: all .5s;
            img{
                width: 45px;
                height: 45px;
                background: #f1f1f1;
                padding: 2px;
                border-radius: 5px;
            }
            .departure-container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 10px;
                color: ${props =>props.theme.colors.primary};
                &__where{
                    font-weight: 900;
                }
                &__when{
                   color: ${props =>props.theme.colors.text};
                   margin-top: 3px;
                   font-size: 14px;
                }
            }
        }
    }
`;
