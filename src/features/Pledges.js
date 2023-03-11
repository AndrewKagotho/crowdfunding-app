import React from 'react'
import { AppContext } from '../App'

const Pledges = ({props}) => {

  const { pledgeValue, modalValue } = React.useContext(AppContext)
  const { setPledge } = pledgeValue
  const { setModal } = modalValue

  React.useEffect(() => { document.body.style.overflow = 'hidden' }, [])
  
  const pledges = props.pledgeName.map((item, index) => {
    let classList, action = () => { setModal({ show: true }); setPledge({ showAll: true, input: index }) }

    if(parseInt(props.total[index]) === 0) {
      classList = 'outOfStock'
      action = () => {}
    }

    if(index === 0) return ( <li key={index} style={{ display: 'none'}}/> )
  
    return (
      <li className={classList} key={index}>
        <h3>{item}</h3>
        <span>Pledge ${props.minAmount[index]} or more</span>
        <p>{props.description[index]}</p>
        <span><b>{props.total[index]}</b> left</span>
        <button onClick={ action }>Select reward</button>
      </li>
      )}
  )

  return (
    <>
      <h2>About this project</h2>
      <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
      <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      <div className='cards__thirdSection'>
        <ul className='flex'>
          {pledges}
        </ul>
      </div>
    </>
  )
}

export default Pledges