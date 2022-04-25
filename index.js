const {ApolloServer}=require("apollo-server")
const {typeDefs}=require("./schema/type-defs")
const {resolvers}=require("./schema/resolvers")

const server=new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req})=>{
        return {userName:"Prateek",request: req}
    }
});

server.listen({port:4001}).then(({url})=>{
    console.log(`API Running: ${url}`);
})
