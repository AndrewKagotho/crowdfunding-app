import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppContext } from '../../App'
import { fetchPledges } from './pledgesSlice'

const PledgeView = () => {

  const data = useSelector(state => state.pledges)
  const dispatch = useDispatch()

  const { pledgeValue, modalValue } = React.useContext(AppContext)
  const { setPledge } = pledgeValue
  const { setModal } = modalValue

  React.useEffect(() => {
    dispatch(fetchPledges())
    // eslint-disable-next-line
  }, [])

  const pledgeList = data.pledges.map((pledgeItem, index) => {
    let classList, action = () => { setModal(true); setPledge({ showAll: true, input: index }) }

    if (pledgeItem.total === 0) {
      classList = 'outOfStock'
      action = () => { }
    }

    if (index === 0) return (<li key={index} style={{ display: 'none' }} />)

    return (
      <li className={classList} key={pledgeItem.pledgeID}>
        <h3>{pledgeItem.name}</h3>
        <span>Pledge ${pledgeItem['minimum amount']} or more</span>
        <p>{pledgeItem.description}</p>
        <span><b>{pledgeItem.total}</b> left</span>
        <button onClick={action}>Select reward</button>
      </li>
    )
  }
  )

  return (
    <>
      <h2>About this project</h2>
      <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
      <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      <div className='cards__thirdSection'>
        {data.loading && <li>Loading...</li>}
        {!data.loading && data.pledges.length ? (
          <ul className='flex'>
            {pledgeList}
          </ul>
        ) : null}
        {!data.loading && data.error ? <li>Error: {data.error.message}</li> : null}
      </div>
    </>
  )
}

export default PledgeView