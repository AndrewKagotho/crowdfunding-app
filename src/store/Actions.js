const addProjectDetails = (x1,x2,x3,x4) => {
  return {
    type: 'ADD_PROJECT_DETAILS',
    target: x1,
    days: x2,
    amounted: x3,
    backers: x4
  }
}
const addPledges = (x1,x2,x3,x4,x5) => {
  return {
    type: 'ADD_PLEDGES',
    id: x1,
    name: x2,
    description: x3,
    total: x4,
    minAmount: x5
  }
}

const updatePledgeTotals = (x1) => {
  return {
    type: 'UPDATE_PLEDGE_TOTALS',
    total: x1
  }
}

const resetPledgeData = () => { return { type: 'RESET_PLEDGE_DATA' }}

export const mapDispatchToProps = {
  addProjectDetails,
  addPledges,
  updatePledgeTotals,
  resetPledgeData
}