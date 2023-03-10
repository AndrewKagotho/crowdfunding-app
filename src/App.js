import React from 'react'
import View from './View'
import './styles/main.css'
  
export const AppContext = React.createContext()

const App = () => {

  React.useEffect(() => {
    setModal({ init: false })
  }, [])

  const [ pledge, setPledge ] = React.useState({ showAll: false, input: -1 })
  const [ modal, setModal ] = React.useState({ show: false })
  const [ success, setSuccess ] = React.useState({ show: false })

  const pledgeValue = { pledge, setPledge }
  const modalValue = { modal, setModal }
  const successValue = { success, setSuccess }

  const values = { pledgeValue, modalValue, successValue }

  return (
    <div className='App'>
      <AppContext.Provider value={values} >
        <View />
      </AppContext.Provider>
    </div>
  )
}

export default App