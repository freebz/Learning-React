const ColorDetails = ({ title, color }) =>
  <div className="color-details"
       style={{backgroundColor: color}}>
    <h1>{title}</h1>
    <h1>{color}</h1>
  </div>
