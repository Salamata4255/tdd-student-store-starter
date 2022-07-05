import './About.css'
import Navbar from '../Navbar/Navbar'

export default function About(){
    return (
        <div className='About' id="About">
            <div className='content'>
                <h3>About Us</h3>
                <div className='summary'>
                    <div className='text'>
                        <p>
                            We sell products for a good cause. Our sales  contribute highly to constructing a better place for all.
                        </p>
                        <p>
                            The products we offer target everyone everywhere and are at an affordable price, all in one place. Quality is at the core front of our mission.
                        </p>
                    </div>
                    <div className='media'>
                        <img src="./src/images/about.png" alt="student store" 
                        height = "180" width="180"/>
                    </div>
                </div>
            </div>
        </div>
    )
}