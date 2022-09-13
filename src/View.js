import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { mapDispatchToProps } from './store/Actions'
import Header from './layouts/Header'
import Intro from './features/Intro'
import Stats from './features/Stats'
import Pledges from './features/Pledges'
import Modal from './features/Modal'

let getPledges = 'http://localhost/crowdfunding-app/src/utils/php/getPledges.php'

const View = (props) => {

  React.useEffect(() => {
    fetchPledges()
    // eslint-disable-next-line
  }, [])

  const fetchPledges = () => {
    axios.get(getPledges)
    .then((response) => {
      let resArray = response.data
      let recordIndex = 0
      while(recordIndex < resArray.length) {
        props.addPledges(
          resArray[recordIndex].pledgeID,
          resArray[recordIndex].name,
          resArray[recordIndex].description,
          resArray[recordIndex].total,
          resArray[recordIndex]['minimum amount']
        )
        recordIndex++ 
      }
    })
  }

  return (
    <>
      <Header />
      <div className='body_content cards flex'>
        <section className='cards__firstSection'>
          <Intro />
        </section>
        <section className='cards__secondSection'>
          <Stats />
        </section>
        <section className='cards__thirdSection'>
          <Pledges props={props} />
        </section>
      </div>
      <Modal props={props} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pledgeID: state.pledge.id,
    pledgeName: state.pledge.name,
    description: state.pledge.description,
    total: state.pledge.total,
    minAmount: state.pledge.minAmount
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)