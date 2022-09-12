import Header from './layouts/Header'
import Intro from './features/Intro'
import Stats from './features/Stats'
import Pledges from './features/Pledges'

const View = () => {
  return (
    <>
      <Header />
      <div className='body_content cards flex'>
        <section className='cards__firstSection'>
          <Intro />
        </section>
        <section className='cards__secondSection'>
          <Stats />
        </section>
        <section className='cards__thirdSection'>
          <Pledges />
        </section>
      </div>
      <div className='modal cards'>
        <section className='modal__card'>
          <h2>Back this project</h2>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
          <span className='description'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</span>
          <form className='flex'>
            <section>
              <div className='grid'>
                <div><input type='radio' id='nopledge'/></div>
                <div>
                  <label htmlFor='nopledge'>Pledge with no reward</label>
                </div>
                <div></div>
                <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
              </div>
            </section>
            <section>
              <div className='grid'>
                <div><input type='radio' id='bamboo'/></div>
                <div>
                  <label htmlFor='bamboo'>Bamboo Stand</label>
                  <span>Pledge $25 or more</span>
                  <span><b>101</b> left</span>
                </div>
                <div></div>
                <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
              </div>
              <hr/>
              <div className='modal__card__expand'>
                <span>Enter your pledge</span>
                <div>
                  <span>$25</span>
                </div>
                <button>Continue</button>
              </div>
            </section>
            <section>
              <div className='grid'>
                <div><input type='radio' id='black'/></div>
                <div>
                  <label htmlFor='black'>Black Edition Stand</label>
                  <span>Pledge $75 or more</span>
                  <span><b>64</b> left</span>
                </div>
                <div></div>
                <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
              </div>
            </section>
            <section>
              <div className='grid'>
              <div><input type='radio' id='mahogany'/></div>
              <div>
                <label htmlFor='mahogany'>Mahogany Special Edition</label>
                <span>Pledge $200 or more</span>
                <span><b>0</b> left</span>
              </div>
              <div></div>
              <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
              </div>
            </section>
          </form>
        </section>
      </div>
    </>
  )
}

export default View