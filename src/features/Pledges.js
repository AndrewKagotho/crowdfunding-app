import React from 'react'

const Pledges = ({props, modalRef, radioRef, selectPledgeRef, successPledgeRef}) => {

  React.useEffect(() => {document.body.style.overflow = 'hidden'})

  // const showCheckedModal = (arg) => {
  //   modalRef.current.style.display = 'block'
  //   radioRef.current[arg].checked = 'true'

  //   if (typeof window != 'undefined' && window.document) {
  //     document.body.style.overflow = 'hidden';
  //   }
  // }

  const showModal = () => {
    modalRef.current.style.display = 'block'
    selectPledgeRef.current.style.display = 'block'
    successPledgeRef.current.style.display = 'none'
  }
  
  const pledges = props.pledgeName.map((item, index) => 
    <li key={index}>
      <h3>{props.pledgeName[index]}</h3>
      <span>Pledge ${props.minAmount[index]} or more</span>
      <p>{props.description[index]}</p>
      <span><b>{props.total[index]}</b> left</span>
      <button onClick={() => showModal()}>Select reward</button>
    </li>
  )

  return (
    <>
      <h2>About this project</h2>
      <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
      <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      <div className='cards__thirdSection'>
        <ul className='flex'>{pledges}</ul>
      </div>
    </>
  )
}

export default Pledges