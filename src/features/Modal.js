import React from 'react'
import axios from 'axios'
import { AppContext } from '../App'
import { fetchProjectDetails } from '../utils/functions/getProjectDetails'
import { url } from '../utils/functions/getProjectDetails'

let submitPledge = `${url}/api`
let pledgeHistory = [0,0]

const Modal = ({props}) => {

  const { pledgeValue, modalValue, successValue } = React.useContext(AppContext)
  const { pledge, setPledge } = pledgeValue
  const { modal, setModal } = modalValue
  const { success, setSuccess } = successValue

  const [formData, setFormData] = React.useState({ pledgeID: '', amount: '', total: '' })
  
  const modalRef = React.useRef()
  const selectPledgeRef = React.useRef()
  const successPledgeRef = React.useRef()
  const radioRef = React.useRef([])
  const expandCardRef = React.useRef([])
  const pledgeCardRef = React.useRef([])

  React.useEffect(() => {
    if(modal.show) modalRef.current.style.display = 'block'
    else modalRef.current.style.display = 'none'

    if(pledge.showAll) {
      selectPledgeRef.current.style.display = 'block'
      if (pledge.input !== -1) expandPledge(pledge.input)      
    }
    else selectPledgeRef.current.style.display = 'none'

    if(success.show) {
      successPledgeRef.current.style.display = 'block'
      selectPledgeRef.current.style.display = 'none'
    }
    else successPledgeRef.current.style.display = 'none'

    // eslint-disable-next-line
  }, [pledge, success])

  const expandPledge = (num) => {
    radioRef.current[num].checked = 'true'

    pledgeHistory[0] = pledgeHistory[1]
    pledgeHistory[1] = num

    pledgeCardRef.current[pledgeHistory[0]].style.boxShadow = 'none'
    expandCardRef.current[pledgeHistory[0]].style.display = 'none'
    pledgeCardRef.current[pledgeHistory[1]].style.boxShadow = '0 0 3px 1px hsl(176, 50%, 47%)'
    expandCardRef.current[pledgeHistory[1]].style.display = 'flex'
  }

  const hideModal = () => {
    setModal({ show: false })
    setPledge({ ...pledge, showAll: false })
    if(success.show) setSuccess({ show: false })
  }
  
  const handleChange = (e) => setFormData({ ...formData, amount: e.target.value })

  const handleSubmit = (e) => {
    axios.post(submitPledge, formData)
    .then((response) => {
        if(response) {
          setSuccess({ show: true })
          fetchProjectDetails(props)
        }
      }
    )
    e.preventDefault()
  }

  const pledges = props.pledgeName.map((item, index) => {
    let tag, rem

    if(index !== 0) {
      tag = ( <span>Pledge ${props.minAmount[index]} or more</span> )
      rem = ( <span><b>{props.total[index]}</b> left</span> )
    }

  return (
    <li key={index} ref={(item) => pledgeCardRef.current[index] = item} onClick={() =>
      setFormData({ ...formData, pledgeID: props.pledgeID[index], total: props.total[index] })
    }>
      <div className='modal__card__main' onClick={() => setPledge({ ...pledge, input: index })}>
        <div className='modal__card__header'>
          <div>
            <div className='radio'>
              <input type='radio' id={`pledge${index}`} name='pledge' ref={(item) => radioRef.current[index] = item}/>
              <span></span>
            </div>
            <label htmlFor={`pledge${index}`}>{item}</label>
          </div>
          {tag}
          {rem}
        </div>
        <p>{props.description[index]}</p>
      </div>
      <div className='modal__card__expand' ref={(item) => expandCardRef.current[index] = item}>
        <span>Enter your pledge</span>
        <div>
          <span>$</span>
          <input type='text' name='amount' defaultValue={props.minAmount[index]} onChange={ handleChange }/>
        </div>
        <button type='submit'>Continue</button>
      </div>
    </li>
  )}
  )

  return (
    <div className='modal cards' ref={modalRef}>
      <section className='modal__card' ref={selectPledgeRef}>
        <h2>Back this project</h2>
        <svg onClick={ hideModal } width="15" height="15"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
        <span className='description'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</span>
        <form onSubmit={ handleSubmit }>
          <ul className='flex'>
            {pledges}
          </ul>
        </form>
      </section>
      <section className='modal__completed' ref={successPledgeRef}>
        <svg width="64" height="64"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
        <h2>Thanks for your support!</h2>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <button onClick={ hideModal }>Got it</button>
      </section>
    </div>
  )
}

export default Modal