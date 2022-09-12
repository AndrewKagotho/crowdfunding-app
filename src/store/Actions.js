const addPledges = (x1,x2,x3,x4) => {
  return {
    type: 'ADD_PLEDGES',
    name: x1,
    description: x2,
    total: x3,
    minAmount: x4
  }
}

export const mapDispatchToProps = {
  addPledges
}