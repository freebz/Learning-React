<Route path="/members/:gender/:state/:city"
       component="Member" />


// http://localhost:3000/members/female/california/truckee


const Member = ({ match }) =>
  <div className="member">
    <ul>
      <li>성별: {match.params.gender}</li>
      <li>주: {match.params.state}</li>
      <li>도시: {match.params.city}</li>
    </ul>
  </div>
