const Stats = ({props}) => {

let amounted = props.amounted

// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

  return (
    <>
      <div>
        <span>${amounted}</span>
        <span>of ${props.target} backed</span>
      </div>
      <div>
        <span>{props.backers}</span>
        <span>total backers</span>
      </div>
      <div>
        <span>{props.days}</span>
        <span>days left</span>
      </div>
      <progress max={props.target} min='0' value={amounted}/>
    </>
  )
}

export default Stats