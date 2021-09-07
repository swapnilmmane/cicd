export default /* GraphQL */ `
    type Pin {
        id: ID!
        title: String!
        description: String
        createdOn: DateTime!
        savedOn: DateTime!
        createdBy: PinCreatedBy
    }

    type PinCreatedBy {
        id: String!
        type: String!
        displayName: String!
    }

    input PinCreateInput {
        title: String!
        description: String
    }

    input PinUpdateInput {
        title: String
        description: String
    }

    type PinsListMeta {
        limit: Number
        before: String
        after: String
    }

    enum PinsListSort {
        createdOn_ASC
        createdOn_DESC
    }

    type PinsList {
        data: [Pin]
        meta: PinsListMeta
    }

    type PinQuery {
        getPin(id: ID!): Pin
        listPins(limit: Int, before: String, after: String, sort: PinsListSort): PinsList!
    }

    type PinMutation {
        # Creates and returns a new Pin entry.
        createPin(data: PinCreateInput!): Pin!

        # Updates and returns an existing Pin entry.
        updatePin(id: ID!, data: PinUpdateInput!): Pin!

        # Deletes and returns an existing Pin entry.
        deletePin(id: ID!): Pin!
    }

    extend type Query {
        pins: PinQuery
    }

    extend type Mutation {
        pins: PinMutation
    }
`;
