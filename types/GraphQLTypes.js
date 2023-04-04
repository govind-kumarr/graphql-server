import {
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

//Lenses Type
export const LensType = new GraphQLObjectType({
  name: "lens",
  fields: {
    _id: { type: GraphQLID },
    img: { type: GraphQLString },
    ratingV: { type: GraphQLFloat },
    ratingC: { type: GraphQLInt },
    name: { type: GraphQLString },
    size: { type: GraphQLString },
    tags: { type: GraphQLString },
    colorO: { type: GraphQLInt },
    dprice: { type: GraphQLInt },
    OgPrice: { type: GraphQLInt },
    offer: { type: GraphQLString },
  },
});
