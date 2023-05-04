import { gql } from '@apollo/client';

const ADD_BAZAR = gql`
    mutation addBazar(
        $name: String!
        $price: Int!
        $description: String!
        # $memberId: ID!
        ){
            addBazar(
                name: $name,
                price: $price,
                description: $description,
                # memberId: $memberId
            ) {
                name
                price
                description
            }
        }

`

export { ADD_BAZAR };