import axios from 'axios'

let getPledges = 'http://localhost/crowdfunding-app/src/utils/php/getPledges.php'

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