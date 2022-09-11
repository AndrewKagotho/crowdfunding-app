const Pledges = () => {
  return (
    <>
      <h2>About this project</h2>
      <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
      <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      <div className='cards__thirdSection flex'>
        <section>
          <h3>Bamboo Stand</h3>
          <span>Pledge $25 or more</span>
          <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
          <span><b>101</b> left</span>
          <button>Select reward</button>
        </section>
        <section>
          <h3>Black Edition Stand</h3>
          <span>Pledge $75 or more</span>
          <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
          <span><b>64</b> left</span>
          <button>Select reward</button>
        </section>
        <section>
          <h3>Mahogany Special Edition</h3>
          <span>Pledge $200 or more</span>
          <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
          <span><b>0</b> left</span>
          <button>Out of Stock</button>
        </section>
      </div>
    </>
  )
}

export default Pledges