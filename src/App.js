import React, { createContext, useState } from 'react'
import View from './View'
import './styles/main.css'

export const AppContext = createContext()

const App = () => {

  const [pledge, setPledge] = useState({ showAll: false, input: -1 })
  const [modal, setModal] = useState(false)
  const [success, setSuccess] = useState({ show: false })
  const [form, setForm] = useState({ pledgeID: '', amount: 0, total: '' })

  const pledgeValue = { pledge, setPledge }
  const modalValue = { modal, setModal }
  const successValue = { success, setSuccess }
  const formData = { form, setForm }

  const values = {
    pledgeValue,
    modalValue,
    successValue,
    formData
  }

  return (
    <div className='App'>
      <AppContext.Provider value={values} >
        <View />
      </AppContext.Provider>
    </div>
  )
}

export default App