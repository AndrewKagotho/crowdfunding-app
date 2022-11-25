const Stats = ({props}) => {

let amounted = props.amounted

  return (
    <>
      <div>
        <span>${addCommas(amounted)}</span>
        <span>of ${addCommas(props.target)} backed</span>
      </div>
      <div>
        <span>{addCommas(props.backers)}</span>
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

function addCommas(arg) {
    return arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}