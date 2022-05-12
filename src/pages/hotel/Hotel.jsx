import "./hotel.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"


import { faCircleArrowLeft, faCircleArrowRight, faLocationDot , faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Hotel = () => {



  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }
  const handleMove = (direction) => {
    let newSliderNumber;
    if (direction==="left") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber -1
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber +1
    }
    setSlideNumber(newSliderNumber)
  }
  const photos = [ 
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/338029453.jpg?k=2c364409cb1d96586c42f488957344bdb1a2750adf4a9ea891c576566f4b8ed2&o=&hp=1"
    },
     {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/338029317.jpg?k=6abe27c9e3fe8027947047dc0b565348f9f92f0aab008e1f54ed929329ee4aa4&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/338037003.jpg?k=2cea78eaa1f7334c0a398966bbd80c1204ddd4a71d652729a03d80e18670dd61&o=&hp=1"
    },
     {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/338029498.jpg?k=761d104543a5b54afe7a93e1231882dc5e0c80868e44b72dee55926ef54bdf7c&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/338037003.jpg?k=2cea78eaa1f7334c0a398966bbd80c1204ddd4a71d652729a03d80e18670dd61&o=&hp=1"
    },
     {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/338029676.jpg?k=7012cc6ef697d3de670ec2c8d9a8d21c8ec0ae5b9f582de032336a2f0604e518&o=&hp=1"
    }
  ];
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
       {open &&
        <div className="slider">
          <FontAwesomeIcon  onClick={()=> setOpen(false)} className="close" icon={faCircleXmark}/>
          <FontAwesomeIcon   className="arrow" icon={faCircleArrowLeft} onClick={()=> handleMove("left")}/>
          <div className="sliderWrapper">
            <img src= {photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon className="arrow" icon={faCircleArrowRight} onClick={()=> handleMove("right")}  />
          
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span> Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center </span>
          <span className="hotelPriceHighLight">
            Book a stay over $ 120 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((pic,i)=> (
              <div className="hotelImgwrapper">
                <img onClick={()=> handleOpen(i)} src={pic.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDescription">Situated in Myrtle Beach in the South Carolina region, Heron Pointe B-9 has a patio. 
                The air-conditioned accommodation is 450 m from Myrtle Beach, and guests benefit from private parking available on site and free WiFi.
                The apartment has 2 bedrooms, a TV with satellite channels and a fully equipped kitchen that provides guests with a dishwasher, a microwave, a washing machine, a fridge and an oven. 
                Towels and bed linen are offered in this accommodation.
                Arcadia Beach is 2.8 km from the apartment, while Carolina Opry Theater is 1.4 km from the property. 
                The nearest airport is Myrtle Beach International Airport, 16 km from Heron Pointe B-9.
                Heron Pointe B-9 has been welcoming Booking.com guests since 15 Jun 2021.
                Distance in property description is calculated using © OpenStreetMap
                  </p>
              </div>
              <div className="hoteldDetailsPrice">
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>Located in the real heart of Krakow, this property has an excellent score of 9.2</span>
                  <h2>
                    <b>$820</b> (9 nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
              </div>
              
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel