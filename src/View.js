import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from './store/Actions'
import Header from './layouts/Header'
import Intro from './features/Intro'
import Stats from './features/Stats'
import Pledges from './features/Pledges'
import Modal from './features/Modal'
import { fetchProjectDetails } from './utils/functions/getProjectDetails'
import { fetchPledges } from './utils/functions/getPledges'

const View = props => {

  React.useEffect(() => {    
    fetchPledges(props)
    const interval = setInterval(() => fetchProjectDetails(props), 5000)

    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <main className='cards flex'>
        <section className='cards__firstSection'>
          <Intro />
        </section>
        <section className='cards__secondSection'>
          <Stats props={props} />
        </section>
        <section className='cards__thirdSection'>
          <Pledges props={props} />
        </section>
      </main>
      <Modal props={props} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    target: state.project.target,
    days: state.project.days,
    amounted: state.project.amounted,
    backers: state.project.backers,
    pledgeID: state.pledge.id,
    pledgeName: state.pledge.name,
    description: state.pledge.description,
    total: state.pledge.total,
    minAmount: state.pledge.minAmount
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)