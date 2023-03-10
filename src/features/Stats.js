// import React from 'react'
// import { AppContext } from '../App'

const Stats = ({props}) => {

  let amounted = props.amounted

  const addCommas = (num) => { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }

  return (
    <>
      <div>
        <span>${addCommas(amounted)}</span>
        <span>of ${addCommas(props.target)} backed</span>
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