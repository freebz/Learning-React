// http://localhost:3000/#/58d9caee-6ea6-4d7b-9984-65b145031979


<Route exact path="/:id" component={UniqueIDHeader} />


const UniqueIDHeader = ({ match }) => <h1>{match.params.id}</h1>
