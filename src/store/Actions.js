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

export const mapDispatchToProps = {
  addPledges
}