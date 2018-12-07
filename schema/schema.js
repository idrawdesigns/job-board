const graphql = require('graphql')
const _ = require('lodash')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLSchema
} = graphql

//dummy data
let jobs = [
  {
    id: '1',
    title: 'React Developer',
    companyName: 'Blue Heaven',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget auctor orci. Aliquam lacinia sapien eros, sed lacinia dui molestie sit amet. Duis nec ex sed felis vulputate convallis a id nisl. Aenean consequat non lorem eget feugiat. Donec scelerisque erat sed iaculis faucibus',
    jobType: 'Full-Time',
    location: 'India',
    salary: '40000',
    educationLevel: 'University',
    industry: 'TECH',
    createdAt: '12-12-2018',
    deadlineDate: '12-01-2019'
  },
  {
    id: '2',
    title: 'Node Developer',
    companyName: 'I draw designs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget auctor orci. Aliquam lacinia sapien eros, sed lacinia dui molestie sit amet. Duis nec ex sed felis vulputate convallis a id nisl. Aenean consequat non lorem eget feugiat. Donec scelerisque erat sed iaculis faucibus',
    jobType: 'Full-Time',
    location: 'Kenya',
    salary: '60000',
    educationLevel: 'University',
    industry: 'Hospitality',
    createdAt: '10-10-2018',
    deadlineDate: '12-12-2018'
  },
  {
    id: '3',
    title: 'Vue Developer',
    companyName: 'IBM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget auctor orci. Aliquam lacinia sapien eros, sed lacinia dui molestie sit amet. Duis nec ex sed felis vulputate convallis a id nisl. Aenean consequat non lorem eget feugiat. Donec scelerisque erat sed iaculis faucibus',
    jobType: 'Full-Time',
    location: 'Sudan',
    salary: '90000',
    educationLevel: 'Diploma',
    industry: 'Goverment',
    createdAt: '10-12-2018',
    deadlineDate: '11-01-2019'
  }
]

const JobType = new GraphQLObjectType({
  name: 'job',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLNonNull(GraphQLString) },
    companyName: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    jobType: { type: GraphQLNonNull(GraphQLString) },
    location: { type: GraphQLNonNull(GraphQLString) },
    salary: { type: GraphQLInt },
    educationLevel: { type: GraphQLString },
    industry: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    deadlineDate: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    job: {
      type: JobType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(jobs, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
