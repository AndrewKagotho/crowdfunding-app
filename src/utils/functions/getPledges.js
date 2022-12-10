import axios from 'axios'

let getPledges = 'https://crowdfunding-app-ak.herokuapp.com/api/pledges'

export const fetchPledges = (props) => {
  props.resetPledgeData()
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