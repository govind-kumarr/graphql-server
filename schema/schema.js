import {
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { LensModel } from "../model/Lens.model.js";
import { LensType } from "../types/GraphQLTypes.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    lens: {
      type: LensType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return LensModel.findById(args.id);
      },
    },
    lenses: {
      type: GraphQLList(LensType),
      resolve() {
        return LensModel.find();
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addLens: {
      type: LensType,
      args: {
        img: { type: GraphQLNonNull(GraphQLString) },
        ratingV: { type: GraphQLFloat },
        ratingC: { type: GraphQLInt },
        name: { type: GraphQLNonNull(GraphQLString) },
        size: { type: GraphQLString },
        tags: { type: GraphQLString },
        colorO: { type: GraphQLInt },
        dprice: { type: GraphQLNonNull(GraphQLInt) },
        OgPrice: { type: GraphQLInt },
        offer: { type: GraphQLString },
      },
      async resolve(parent, args) {
        // console.log(args);
        const lens = {
          ...args,
        };
        await LensModel.insertMany([lens]);
        return lens;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
