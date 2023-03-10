import React from 'react'
import { AppContext } from '../App'

const Intro = () => {

  const { pledgeValue, modalValue } = React.useContext(AppContext)
  const { setPledge } = pledgeValue
  const { setModal } = modalValue

  const bookmarkButtonRef = React.useRef()
  const svgCircleRef = React.useRef()
  const svgPathRef = React.useRef()

  const bookmark = () => {
    bookmarkButtonRef.current.textContent = 'Bookmarked'
    bookmarkButtonRef.current.style.fontWeight = '700'
    bookmarkButtonRef.current.style.color = 'hsl(176, 50%, 40%)'
    svgCircleRef.current.style.fill = 'hsl(176, 50%, 40%)'
    svgPathRef.current.style.fill = '#FFF'
  }

  return (
    <>
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fillRule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <span className='description'>A beautiful and handcrafted monitor stand to reduce neck and eye strain.</span>
      <div className='cards__firstSection__actions'>
        <button onClick={() => { setModal({ show: true }); setPledge({ showAll: true, input: -1 })}}>Back this project</button>
        <div onClick={ bookmark }>
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle ref={svgCircleRef} fill="#2F2F2F" cx="20" cy="20" r="20"/><path ref={svgPathRef} fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
          <button ref={bookmarkButtonRef}>Bookmark</button>
        </div>
      </div>
    </>
  )
}

export default Intro