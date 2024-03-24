import '../result-container/Header.css'

function Header() {
    return (
        <div className='blueContainer'>
            <p className='para  firstp'>Your Result</p>
            <div className='score'>
                <h1>76</h1>
                <p className='para secondp'>of 100</p>
            </div>
            <h2>Great</h2>
            <p className='para thirdp'>
                Your performance exceed 65% of the people conducting the test here!</p>
        </div>
    )
}

export default Header