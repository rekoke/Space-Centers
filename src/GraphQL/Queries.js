import { gql } from "@apollo/client";

export const LOAD_CENTERS = gql`
    query spaceCenters($page: Int!, $pageSize: Int!){
        spaceCenters(page: $page, pageSize: $pageSize){
            pagination{
                total
            }
            nodes{
                name,
                id
            }
        }
    }
`;

export const FIND_CENTER = gql`
    query spaceCenter($id: ID!){
        spaceCenter(id: $id){
            name,
            description
        }
    }
`;

export const FIND_FLIGHTS = gql`
    query flights($from: ID, $page: Int!){
        flights(from: $from, page: $page, pageSize: 10){
            pagination{
                total
            }
            nodes{
                id,
                launchSite{
                    name,
                    planet{
                        name
                    }
                }
                landingSite{
                    name,
                    planet{
                        name
                    }
                }
                departureAt
            }
        }
    }
`;
