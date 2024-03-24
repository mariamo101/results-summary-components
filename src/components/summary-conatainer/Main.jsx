import '../summary-conatainer/Main.css'
import Header from '../result-container/Header'
import reaction from '../images/icon-reaction.svg'
import memory from '../images/icon-memory.svg'
import verbal from '../images/icon-verbal.svg'
import visual from '../images/icon-visual.svg'

function Main() {
    return (
        <div className='whiteContainer'>
           <Header/>
          <div className='summary container'>
          <h3>Summary</h3>
          <section className='rectangle first'>
          <section className='icons'>
            <img src={reaction} alt=''/>
            <p className='reactionP'>Reaction</p>
            </section>
            <section className='scores'>
              <span className='leftScor'>80</span>
              <span className='rightScor'>/ 100</span>
            </section>
          </section>
          <section className='rectangle second'>
            <section className='icons'>
          <img src={memory} alt=''/>
          <p className='memoryP'>Memory</p>
          </section>
          <section className='scores'>
          <span className='leftScor'>92</span>
              <span className='rightScor'>/ 100</span>
          </section>
          </section>
          <section className='rectangle third'>
          <section className='icons'>
          <img src={verbal} alt=''/>
          <p className='verbalP'>Verbal</p>
          </section>
          <section className='scores'>
          <span className='leftScor'>61</span>
              <span className='rightScor'>/ 100</span>
          </section>
          </section>
          <section className='rectangle fourth'>
          <section className='icons'>
          <img src={visual} alt=''/>
          <p className='visualP'>Visual</p>
          </section>
          <section className='scores'>
          <span className='leftScor'>73</span>
              <span className='rightScor'>/ 100</span>
          </section>
          </section>
          <button >Continue</button>
          </div>
        </div>
    )
}

export default Main

