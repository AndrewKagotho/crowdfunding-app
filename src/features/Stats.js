const Stats = ({props}) => {
  return (
    <>
      <div>
        <span>${props.amounted}</span>
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
      <progress max={props.target} min='0' value={props.amounted}/>
    </>
  )
}

export default Stats