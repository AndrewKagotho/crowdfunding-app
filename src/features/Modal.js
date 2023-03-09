import React from 'react'
import axios from 'axios'
import { AppContext } from '../App'
import { fetchProjectDetails } from '../utils/functions/getProjectDetails'
import { url } from '../utils/functions/getProjectDetails'

let submitPledge = `${url}/api`
let prevCards = [0,1]
let firstSelection = true
let isHidden = false

const Modal = ({props, modalRef, radioRef, selectPledgeRef, successPledgeRef}) => {

  const expandCardRef = React.useRef([])
  const pledgeCardRef = React.useRef([])
  const nameInputRef = React.useRef([])
  const amountInputRef = React.useRef([])

  const [formData, setFormData] = React.useState({
    pledgeID: '',
    amount: '',
    total: ''
  })

  const { pledgeValue, modalValue, successValue } = React.useContext(AppContext)
  const { pledge, setPledge } = pledgeValue
  const { modal, setModal } = modalValue
  const { showSuccess, setShowSuccess } = successValue

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

  const expandCard = (arg) => {
    disableInputs(arg)
    radioRef.current[arg].checked = 'true'

    prevCards[0] = prevCards[1]
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

  if(!modal.init) {
    if(modal.show) modalRef.current.style.display = 'block'
    else modalRef.current.style.display = 'none'

    if(pledge.show) {
      selectPledgeRef.current.style.display = 'block'
      if(pledge.input !== -1) expandCard(pledge.input)      
    }
    else selectPledgeRef.current.style.display = 'none'

    if(showSuccess) successPledgeRef.current.style.display = 'block'
    else successPledgeRef.current.style.display = 'none'
  }
  
  const handleChange = (e) => {setFormData({...formData, amount: e.target.value})}

  const hideModal = () => {
    setModal({...modal, show: false })
    setPledge({...pledge, show: false })
  }

  const showSuccessModal = () => {
    selectPledgeRef.current.style.display = 'none'
    successPledgeRef.current.style.display = 'block'
  }

  const pledges = props.pledgeName.map((item, index) =>
    <li key={index} ref={(item) => pledgeCardRef.current[index] = item} onClick={() =>
      setFormData({...formData,
        pledgeID: props.pledgeID[index],
        total: props.total[index]
      })
    }>
      <div className='grid' onClick={() => setPledge({...pledge, input: index })}>
        <div className='radio'>
          <input type='radio' id='bamboo' name='pledge' ref={(item) => radioRef.current[index] = item}/>
          <span></span>
        </div>
        <div className='modal__card__header'>
          <label htmlFor='bamboo' >{props.pledgeName[index]}</label>
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
          <input type='text' name='amount' defaultValue={props.minAmount[index]} onChange={handleChange}/>
        </div>
        <button type='submit'>Continue</button>
      </div>
    </li>
  )

  const handleSubmit = (e) => {
    axios.post(submitPledge, formData)
    .then((response) => {
        if(response)
          showSuccessModal()
      }
    )
    e.preventDefault()
  }

  return (
    <div className='modal cards' ref={modalRef}>
      <section className='modal__card' ref={selectPledgeRef}>
        <h2>Back this project :{pledge.input}</h2>
        <svg onClick={hideModal} width="15" height="15"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
        <span className='description'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</span>
        <form onSubmit={handleSubmit}>
          <ul className='flex'>
            {pledges}
          </ul>
        </form>
      </section>
      <section className='modal__completed' ref={successPledgeRef}>
        <svg width="64" height="64"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
        <h2>Thanks for your support!</h2>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <button onClick={() => {hideModal(); fetchProjectDetails(props)}}>Got it</button>
      </section>
    </div>
  )
}

export default Modal