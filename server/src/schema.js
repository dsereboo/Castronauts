//GQL tags allow graphql to be parsed as requied by Apollo libraries
const {gql}= require("apollo-server")

//Schema definitions
const typeDefs= gql`
"A track is a group of moudles that teaches a specific topic"
    type Track{
        "Unique identifiere for track"
        id:ID!
        "Title o"
        title:String!
        author: Author!
        thumbnail:String
        "Length of track in terms of minutes"
        length:Int
        modulesCount:Int
    }

"Author of a complete track or a module"
    type Author{
        id:ID!
        name:String!
        photo:String
    }

    type Query{
        "Get tracks array for homepage grid"
        tracksForHome:[Track!]!
    }
`;


module.exports= typeDefs;
