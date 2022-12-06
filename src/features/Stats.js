const Stats = ({props}) => {

let amounted = props.amounted

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

// function addCommas(arg) {
//   return arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// }