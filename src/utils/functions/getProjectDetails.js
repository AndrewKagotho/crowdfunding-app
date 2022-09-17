import axios from 'axios'

let getProjectDetails = 'http://localhost/crowdfunding-app/src/utils/php/getProjectDetails.php'

export const fetchProjectDetails = (props) => {
  axios.get(getProjectDetails)
  .then((response) => {
    props.addProjectDetails(
      response.data[0].target,
      response.data[0].days,
      response.data[1]['SUM(amount)'],
      response.data[2]
    )
    props.updatePledgeTotals(response.data[3])
  })
}