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
const Notifications = require("../models/notification");
const Employee = require("../models/employee");

const UserQuery = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    userId: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    profileImage: { type: GraphQLInt },
    membership: { type: GraphQLBoolean },
    time: { type: GraphQLInt },
    accountStatus: { type: GraphQLString },
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
    notifications: { type: new GraphQLList(NotificationQuery) },
  }),
});

const NotificationQuery = new GraphQLObjectType({
  name: "Notifications",
  fields: () => ({
    content: { type: GraphQLString },
    timestamp: { type: GraphQLID },
    id: { type: GraphQLID },
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
    commentId: { type: GraphQLID },
    username: { type: GraphQLString },
    timestamp: { type: GraphQLID },
    text: { type: GraphQLString },
    likes: { type: GraphQLInt },
    dislikes: { type: GraphQLInt },
  }),
});

const StockQuery = new GraphQLObjectType({
  name: "Stock",
  fields: () => ({
    stockId: { type: GraphQLID },
    ticker: { type: GraphQLString },
    name: { type: GraphQLString },
    about: { type: GraphQLString },
    creation: { type: GraphQLInt },
    prediction: { type: GraphQLFloat },
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

const EmployeeQuery = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    employeeId: { type: GraphQLID },
    username: { type: GraphQLString },
    permissions: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    users: {
      type: new GraphQLList(UserQuery),
      resolve(parent) {
        return User.find({});
      },
    },
    stocks: {
      type: new GraphQLList(StockQuery),
      resolve(parent) {
        return Stock.find({});
      },
    },
    comments: {
      type: new GraphQLList(CommentQuery),
      resolve(parent) {
        return Comment.find({});
      },
    },
    employees: {
      type: new GraphQLList(EmployeeQuery),
      resolve(parent) {
        return Employee.find({});
      },
    },
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
    searchStocks: {
      type: new GraphQLList(StockQuery),
      args: {
        ticker: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Stock.find({ ticker: args.ticker });
      },
    },
    searchComments: {
      type: new GraphQLList(CommentQuery),
      args: {
        commentId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Comment.find({ commentId: args.commentId });
      },
    },
    searchUsers: {
      type: new GraphQLList(UserQuery),
      args: {
        username: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.find({ username: args.username });
      },
    },
    searchEmployees: {
      type: new GraphQLList(EmployeeQuery),
      args: {
        employeeId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Employee.find({ employeeId: args.employeeId });
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
        membership: { type: GraphQLString },
        accountStatus: { type: GraphQLString },
        darkmode: { type: GraphQLBoolean },
        invisible: { type: GraphQLBoolean },
        allowCommentsOnTrades: { type: GraphQLBoolean },
        profileImage: { type: GraphQLInt },
        notification: { type: GraphQLString },
        timestamp: { type: GraphQLID },
        notificationId: { type: GraphQLID },
      },
      resolve(parent, args) {
        let user = new User({
          userId: args.userId,
          username: args.username,
          password: args.password,
          money: args.money,
          membership: args.membership,
          accountStatus: args.accountStatus,
          darkmode: false,
          invisible: false,
          allowCommentsOnTrades: true,
          profileImage: 0,
          notifications: [
            {
              content: args.notification,
              timestamp: args.timestamp,
              id: args.notificationId,
            },
          ],
        });
        return user.save();
      },
    },
    createStock: {
      type: StockQuery,
      args: {
        stockId: { type: GraphQLID },
        ticker: { type: GraphQLString },
        name: { type: GraphQLString },
        about: { type: GraphQLString },
        creation: { type: GraphQLInt },
        prediction: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        let stock = new Stock({
          name: args.name,
          ticker: args.ticker,
          stockId: args.stockId,
          about: args.about,
          creation: args.creation,
          prediction: args.prediction,
        });
        return stock.save();
      },
    },
    createComment: {
      type: CommentQuery,
      args: {
        userId: { type: GraphQLID },
        commentId: { type: GraphQLID },
        username: { type: GraphQLString },
        timestamp: { type: GraphQLID },
        text: { type: GraphQLString },
        likes: { type: GraphQLInt },
        dislikes: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let comment = new Comment({
          userId: args.userId,
          commentId: args.commentId,
          username: args.username,
          timestamp: args.timestamp,
          text: args.text,
          likes: args.likes,
          dislikes: args.dislikes,
        });
        return comment.save();
      },
    },
    createEmployee: {
      type: EmployeeQuery,
      args: {
        username: { type: GraphQLString },
        employeeId: { type: GraphQLID },
        permissions: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        let employee = new Employee({
          username: args.username,
          employeeId: args.employeeId,
          permissions: args.permissions,
          password: args.password,
        });
        return employee.save();
      },
    },
    updateComment: {
      type: CommentQuery,
      args: {
        commentId: { type: GraphQLID },
        text: { type: GraphQLString },
        likes: { type: GraphQLInt },
        dislikes: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Comment.update(
          { commentId: args.commentId },
          {
            $set: {
              text: args.text,
              likes: args.likes,
              dislikes: args.dislikes,
            },
          }
        );
      },
    },
    updateStock: {
      type: StockQuery,
      args: {
        stockId: { type: GraphQLID },
        about: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Stock.update(
          { stockId: args.stockId },
          {
            $set: {
              about: args.about,
            },
          }
        );
      },
    },
    updateUser: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        membership: { type: GraphQLString },
        accountStatus: { type: GraphQLString },
        money: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          {
            $set: {
              membership: args.membership,
              accountStatus: args.accountStatus,
              money: args.money,
            },
          }
        );
      },
    },
    updateEmployee: {
      type: EmployeeQuery,
      args: {
        employeeId: { type: GraphQLID },
        permissions: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Employee.update(
          { employeeId: args.employeeId },
          {
            $set: {
              employeeId: args.employeeId,
              permissions: args.permissions,
              password: args.password,
            },
          }
        );
      },
    },
    updateSettingsEmployee: {
      type: EmployeeQuery,
      args: {
        username: { type: GraphQLString },
        employeeId: { type: GraphQLID },
        permissions: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Employee.update(
          { employeeId: args.employeeId },
          {
            $set: {
              username: args.username,
              employeeId: args.employeeId,
              permissions: args.permissions,
              password: args.password,
            },
          }
        );
      },
    },
    updateUserNotification: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        content: { type: GraphQLString },
        timestamp: { type: GraphQLID },
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          {
            $push: {
              notifications: {
                content: args.content,
                timestamp: args.timestamp,
                id: args.id,
              },
            },
          }
        );
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
    deleteStock: {
      type: StockQuery,
      args: {
        stockId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Stock.findOneAndDelete({
          stockId: args.stockId,
        });
      },
    },
    deleteComment: {
      type: CommentQuery,
      args: {
        commentId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Comment.findOneAndDelete({
          commentId: args.commentId,
        });
      },
    },
    deleteUser: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.findOneAndDelete({
          userId: args.userId,
        });
      },
    },
    deleteEmployee: {
      type: EmployeeQuery,
      args: {
        employeeId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Employee.findOneAndDelete({
          employeeId: args.employeeId,
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
