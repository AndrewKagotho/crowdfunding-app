import axios from 'axios'
import { url } from '../config'

let getProjectDetails = `${url}/api`
let totalArray = []

export const fetchProjectDetails = props => {
  axios.get(getProjectDetails)
  .then((response) => {
    props.addProjectDetails(
      response.data[0][0].target,
      response.data[0][0].days,
      response.data[1][0]['SUM(amount)'],
      response.data[2][0].count
    )
    
    for(let i=0; i<response.data[3].length; i++)
      totalArray[i] = response.data[3][i].total

    props.updatePledgeTotals(totalArray)
  })
}