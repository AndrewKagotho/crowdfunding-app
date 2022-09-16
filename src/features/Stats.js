const Stats = ({props}) => {

let amounted = props.amounted

const comma = (num) => {
  for(let x=num.length-1; x>=0; x--) {

    // num[x] = ',' + num[x]
    num+=20
  }
}

comma(amounted)

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