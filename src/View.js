import React from 'react'
import Header from './layouts/Header'
import Intro from './features/Intro'
import ProjectView from './features/project/ProjectView'
// import Pledges from './features/Pledges'
import PledgeView from './features/pledges/PledgeView'
import ModalView from './features/pledges/ModalView'
// import Modal from './features/Modal'
// import { fetchProjectDetails } from './utils/functions/getProjectDetails'
// import { fetchPledges } from './utils/functions/getPledges'

const View = () => {

  React.useEffect(() => {    
    // fetchPledges(props)
    // fetchProjectDetails(props)

    // const interval = setInterval(() => fetchProjectDetails(props), 5000)
    // return () => clearInterval(interval)
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
          <ProjectView />
        </section>
        <section className='cards__thirdSection'>
          <PledgeView />
        </section>
      </main>
      <ModalView />
    </>
  )
}

export default View