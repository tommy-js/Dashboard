const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean,
  GraphQLSchema,
} = graphql;

const User = require("../models/user");
const Follower = require("../models/follower");
const Trade = require("../models/trade");
const Comment = require("../models/comment");
const Stock = require("../models/stock");
const Share = require("../models/share");
const Reference = require("../models/referencetrade");
const Settings = require("../models/settings");
const Watchlist = require("../models/watchlist");

const UserQuery = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    userId: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    profileImage: { type: GraphQLString },
    money: { type: GraphQLFloat },
    darkmode: { type: GraphQLBoolean },
    invisible: { type: GraphQLBoolean },
    allowCommentsOnTrades: { type: GraphQLBoolean },
    followed: { type: new GraphQLList(FollowerQuery) },
    followers: { type: new GraphQLList(FollowerQuery) },
    stocks: { type: new GraphQLList(StockQuery) },
    shares: { type: new GraphQLList(ShareQuery) },
    trades: { type: new GraphQLList(TradeQuery) },
    referenceTrades: { type: new GraphQLList(ReferenceTradeQuery) },
    comments: { type: new GraphQLList(CommentQuery) },
    watchlist: { type: new GraphQLList(WatchlistQuery) },
  }),
});

const WatchlistQuery = new GraphQLObjectType({
  name: "Watchlist",
  fields: () => ({
    stockId: { type: GraphQLID },
    title: { type: GraphQLString },
    ticker: { type: GraphQLString },
    timestamp: { type: GraphQLInt },
  }),
});

const SettingsQuery = new GraphQLObjectType({
  name: "Settings",
  fields: () => ({
    darkmode: { type: GraphQLBoolean },
    invisible: { type: GraphQLBoolean },
    allowCommentsOnTrades: { type: GraphQLBoolean },
  }),
});

const FollowerQuery = new GraphQLObjectType({
  name: "Follower",
  fields: () => ({
    followerId: { type: GraphQLID },
    id: { type: GraphQLID },
    followerName: { type: GraphQLString },
    blocked: { type: GraphQLBoolean },
  }),
});

const TradeQuery = new GraphQLObjectType({
  name: "Trade",
  fields: () => ({
    price: { type: GraphQLFloat },
    tradeId: { type: GraphQLID },
    timestamp: { type: GraphQLID },
    title: { type: GraphQLString },
    ticker: { type: GraphQLString },
    shares: { type: GraphQLInt },
    gain: { type: GraphQLInt },
    comments: { type: new GraphQLList(CommentQuery) },
  }),
});

const ReferenceTradeQuery = new GraphQLObjectType({
  name: "Reference",
  fields: () => ({
    tradeAuthorID: { type: GraphQLID },
    tradeAuthorUsername: { type: GraphQLString },
    price: { type: GraphQLInt },
    tradeId: { type: GraphQLID },
    timestamp: { type: GraphQLID },
    title: { type: GraphQLString },
    ticker: { type: GraphQLString },
    shares: { type: GraphQLInt },
    gain: { type: GraphQLInt },
  }),
});

const CommentQuery = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    userId: { type: GraphQLID },
    username: { type: GraphQLString },
    timestamp: { type: GraphQLID },
    text: { type: GraphQLString },
    likes: { type: GraphQLID },
    dislikes: { type: GraphQLID },
  }),
});

const StockQuery = new GraphQLObjectType({
  name: "Stock",
  fields: () => ({
    stockId: { type: GraphQLID },
    ticker: { type: GraphQLString },
    name: { type: GraphQLString },
    about: { type: GraphQLString },
    creation: { type: GraphQLString },
    prediction: { type: GraphQLInt },
    comments: { type: new GraphQLList(CommentQuery) },
  }),
});

const ShareQuery = new GraphQLObjectType({
  name: "Share",
  fields: () => ({
    stockId: { type: GraphQLID },
    shareId: { type: GraphQLID },
    shares: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.findOne({ userId: args.userId });
      },
    },
    stock: {
      type: StockQuery,
      args: {
        stockId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Stock.find({ stockId: args.stockId });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        money: { type: GraphQLFloat },
        darkmode: { type: GraphQLBoolean },
        invisible: { type: GraphQLBoolean },
        allowCommentsOnTrades: { type: GraphQLBoolean },
        profileImage: { type: GraphQLID },
      },
      resolve(parent, args) {
        let user = new User({
          userId: args.userId,
          username: args.username,
          password: args.password,
          money: args.money,
          darkmode: false,
          invisible: false,
          allowCommentsOnTrades: true,
          profileImage: 0,
        });
        return user.save();
      },
    },
    updateMoney: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        money: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          { $set: { money: args.money } },
          { upsert: true, new: true }
        );
      },
    },
    deleteCommentStock: {
      type: CommentQuery,
      args: {
        stockId: { type: GraphQLID },
        commentId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Stock.update(
          { stockId: args.stockId },
          { $pull: { comments: { commentId: args.commentId } } }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
