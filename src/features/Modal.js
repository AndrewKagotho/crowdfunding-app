import React from 'react'

const Modal = ({props}) => {

  const expandCardRef = React.useRef([])
  const pledgeCardRef = React.useRef([])

  const expandCard = (x) => {
    for(let i=0; i<pledgeCardRef.current.length; i++ ) {
      if(x===i) {
        pledgeCardRef.current[i].style.boxShadow = '0 0 3px 1px hsl(176, 50%, 47%)'
        expandCardRef.current[i].style.display = 'flex'
      }
      else {
        pledgeCardRef.current[i].style.boxShadow = 'none'
        expandCardRef.current[i].style.display = 'none'
      }
    }
  }

  const pledges = props.pledgeName.map((item, index) => {
    if(index===0)
      return (
        <li key={index} onClick={() => expandCard(index)} ref={(item) => pledgeCardRef.current[index] = item}>
          <div className='grid'>
            <div><input type='radio' id='bamboo'/></div>
            <div>
              <label htmlFor='bamboo'>{props.pledgeName[index]}</label>
            </div>
            <div></div>
            <p>{props.description[index]}</p>
          </div>
          <div className='modal__card__expand' ref={(item) => expandCardRef.current[index] = item}>
            <span>Enter your pledge</span>
            <div>
              <input type='text' defaultValue={props.minAmount[index]}/>
            </div>
            <button>Continue</button>
          </div>
        </li>
      )
      else
        return (
          <li key={index} onClick={() => expandCard(index)} ref={(item) => pledgeCardRef.current[index] = item}>
            <div className='grid'>
              <div><input type='radio' id='bamboo'/></div>
              <div>
                <label htmlFor='bamboo'>{props.pledgeName[index]}</label>
                <span>Pledge ${props.minAmount[index]} or more</span>
                <span><b>{props.total[index]}</b> left</span>
              </div>
              <div></div>
              <p>{props.description[index]}</p>
            </div>
            <div className='modal__card__expand' ref={(item) => expandCardRef.current[index] = item}>
              <span>Enter your pledge</span>
              <div>
                <span>$</span><input type='text' defaultValue={props.minAmount[index]}/>
              </div>
              <button>Continue</button>
            </div>
          </li>
        )
  })

  return (
    <div className='modal cards'>
      <section className='modal__card'>
        <h2>Back this project</h2>
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
        <span className='description'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</span>
        <form>
          <ul className='flex'>{pledges}</ul>
        </form>
      </section>
    </div>
  )
}

export default Modal