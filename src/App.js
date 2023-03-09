import React from 'react'
import View from './View'
import './styles/main.css'
  
export const AppContext = React.createContext()

const App = () => {

  React.useEffect(() => {
    setModal({ init: false })
  }, [])

  const [ pledge, setPledge ] = React.useState({ show: false, input: -1 })
  const [ modal, setModal ] = React.useState({ init: true, show: false })
  const [ showSuccess, setShowSuccess ] = React.useState( false )

  const pledgeValue = { pledge, setPledge }
  const modalValue = { modal, setModal }
  const successValue = { showSuccess, setShowSuccess }

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