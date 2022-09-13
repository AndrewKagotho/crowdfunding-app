import React from 'react'

let submitPledge = 'http://localhost/crowdfunding-app/src/utils/php/submitPledge.php'
let prevCards = [0,1]
let firstSelection = true
let isHidden = false

const Modal = ({props}) => {

  const expandCardRef = React.useRef([])
  const pledgeCardRef = React.useRef([])
  const radioRef = React.useRef([])
  const nameInputRef = React.useRef([])
  const amountInputRef = React.useRef([])

  const disableInputs = (arg) => {
    for(let i=0; i<nameInputRef.current.length; i++ ) {
      if(i===arg) {
        continue
      }
      else {
        nameInputRef.current[i].disabled = 'true'
        amountInputRef.current[i].disabled = 'true'
      }
    }
  }

  const expandCard = (arg) => {
    disableInputs(arg)
    radioRef.current[arg].checked = 'true'

    for(let a=0; a<prevCards.length; a++) {
      prevCards[0] = prevCards[1]
    }
    prevCards[1] = arg

    for(let i=0; i<prevCards.length; i++ ) {
      if(i===0) {
        pledgeCardRef.current[prevCards[i]].style.boxShadow = 'none'
        expandCardRef.current[prevCards[i]].style.display = 'none'
      }
      else {
        pledgeCardRef.current[prevCards[i]].style.boxShadow = '0 0 3px 1px hsl(176, 50%, 47%)'
        expandCardRef.current[prevCards[i]].style.display = 'flex'
      }
    }
    reverseExpandCard()
  }

  const reverseExpandCard = () => {
    if(!firstSelection && prevCards[0] === prevCards[1]) {
      if(!isHidden) {
        pledgeCardRef.current[prevCards[1]].style.boxShadow = 'none'
        expandCardRef.current[prevCards[1]].style.display = 'none'
        isHidden = true
      }
      else if(isHidden) {
        pledgeCardRef.current[prevCards[1]].style.boxShadow = '0 0 3px 1px hsl(176, 50%, 47%)'
        expandCardRef.current[prevCards[1]].style.display = 'flex'
        isHidden = false
      }
    }
    
    firstSelection = false
  }

  const pledges = props.pledgeName.map((item, index) =>
    <li key={index} ref={(item) => pledgeCardRef.current[index] = item}>
      <div className='grid' onClick={() => expandCard(index)}>
        <div>
          <input className='radio' type='radio' id='bamboo' name='pledge' ref={(item) => radioRef.current[index] = item}/>
          <span className='test'></span>
        </div>
        <div className='modal__card__header'>
          <label htmlFor='bamboo' >{props.pledgeName[index]}</label>
          <input type='hidden' name='namex' defaultValue={props.pledgeName[index]} ref={(item) => nameInputRef.current[index] = item}/>
          <span>Pledge ${props.minAmount[index]} or more</span>
          <span><b>{props.total[index]}</b> left</span>
        </div>
        <div></div>
        <p>{props.description[index]}</p>
      </div>
      <div className='modal__card__expand' ref={(item) => expandCardRef.current[index] = item}>
        <span>Enter your pledge</span>
        <div>
          <span>$</span>
          <input type='text' name='amount' defaultValue={props.minAmount[index]} ref={(item) => amountInputRef.current[index] = item}/>
        </div>
        <button type='submit'>Continue</button>
      </div>
    </li>    
  )

  return (
    <div className='modal cards'>
      <section className='modal__card'>
        <h2>Back this project</h2>
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
        <span className='description'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</span>
        <form action={submitPledge} method='POST'>
          <ul className='flex'>{pledges}</ul>
        </form>
      </section>
    </div>
  )
}

export default Modal