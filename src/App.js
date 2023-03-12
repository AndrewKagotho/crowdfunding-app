import React from 'react'
import View from './View'
import './styles/main.css'
  
export const AppContext = React.createContext()

const App = () => {

  const [ pledge, setPledge ] = React.useState({ showAll: false, input: -1 })
  const [ modal, setModal ] = React.useState({ show: false })
  const [ success, setSuccess ] = React.useState({ show: false })
  const [ form, setForm ] = React.useState({ pledgeID: '', amount: 0, total: '' })

  const pledgeValue = { pledge, setPledge }
  const modalValue = { modal, setModal }
  const successValue = { success, setSuccess }
  const formData = { form, setForm }

  const values = { pledgeValue, modalValue, successValue, formData }

  return (
    <div className='App'>
      <AppContext.Provider value={values} >
        <View />
      </AppContext.Provider>
    </div>
  )
}

export default App