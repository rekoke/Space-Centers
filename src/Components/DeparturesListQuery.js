import React from 'react';
import { Query } from '@apollo/client/react/components';
import { FIND_FLIGHTS } from '../GraphQL/Queries';
import DeparturesList from './DeparturesList';
import LoadingEllipsis from "./LoadingEllipsis";

const DeparturesListQuery = ({from}) => (
    <Query query={FIND_FLIGHTS} variables={{from:from, page: 0}}>
        {({ data, fetchMore, loading }) =>
        loading ? <LoadingEllipsis /> : 
        (
            <DeparturesList
                departures={data?.flights.nodes || []}
                total={data?.flights.pagination.total || 0}
                onLoadMore={() =>
                    fetchMore({
                    variables: {
                        from: from,
                        page: data.flights.nodes.length + 1
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;
                        const newObject = Object.assign({}, prev, {
                            flights: {
                                pagination: prev.flights.pagination,
                                __typename: prev.flights.__typename,
                                nodes: [...prev.flights.nodes, ...fetchMoreResult.flights.nodes]
                            }
                        });
                        return newObject;
                    }
                    })
                }
            />
        )
        }
    </Query>
);

export default DeparturesListQuery;
