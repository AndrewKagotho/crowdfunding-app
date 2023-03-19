import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProject } from './projectSlice'

const ProjectView = () => {

  const data = useSelector(state => state.project)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchProject())
    // eslint-disable-next-line
  }, [])

  let totalBacked, target, backers, days

  if (data.project.length !== 0) {
    totalBacked = data.project[1][0]['SUM(amount)']
    target = data.project[0][0].target
    backers = data.project[2][0]['count']
    days = data.project[0][0].days
  }

  const addCommas = num => { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }

  return (
    <>
      {data.loading && <span>Loading...</span>}
      {!data.loading && data.project.length ? (
        <>
          <div>
            <span>${addCommas(totalBacked)}</span>
            <span>of ${addCommas(target)} backed</span>
          </div>
          <div>
            <span>{backers}</span>
            <span>total backers</span>
          </div>
          <div>
            <span>{days}</span>
            <span>days left</span>
          </div>
          <progress max={target} min='0' value={totalBacked} />
        </>
      ) : null}
      {!data.loading && data.error ? <span>Error: {data.error.message}</span> : null}
    </>
  )
}

export default ProjectView