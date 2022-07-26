import Footer from '../components/Footer'
import Header from '../components/Header'
import './Home.css'
import pic from '../images/illustration-mockups.svg'
import '../assets/css/line-awesome.min.css'
// import images from '../images'

const HomeScreen = () => {
    //    const style = {
    //     backgroundImage:""
    //    }
    return (
        <div>
            <Header />
            <div  className="main">
                <img src={pic} style= {{margin: "1em"}}/>
                <div className='main-contents' style= {{margin: "1em"}}>
                    <h1>Build the Community Your Fans will Love</h1>
                    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <button>Register</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeScreen