import axios from 'axios'
// http://localhost/crowdfunding-app/src/utils/php/getPledges.php
// https://andrewkagotho.github.io/crowdfunding-app/
// https://github.com/AndrewKagotho/crowdfunding-app/blob/master/src/utils/php/getPledges.php
let getPledges = 'https://github.com/AndrewKagotho/crowdfunding-app/blob/master/src/utils/php/getPledges.php'
// let getPledges = 'https://files.000webhost.com/crowdfunding-app/getPledges.php'

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