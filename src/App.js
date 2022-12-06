import React from 'react'
import View from './View'
import './styles/main.css'

function App() {

  // const [state, setState] = React.useState({data: ''})

  // React.useEffect(() => {
  //   fetch('/api')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json))
  // }, [])

  // React.useEffect(() => {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message))
  // }, [])

  return (
    <div className='App'>
      <View />
    </div>
  )
}

export default App