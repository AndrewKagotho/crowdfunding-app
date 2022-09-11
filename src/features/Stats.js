const Stats = () => {
  return (
    <>
      <div>
        <span>$89,914</span>
        <span>of $100,000 backed</span>
      </div>
      <div>
        <span>5,007</span>
        <span>total backers</span>
      </div>
      <div>
        <span>56</span>
        <span>days left</span>
      </div>
      <progress max='100' min='0' value='75'/>
    </>
  )
}

export default Stats