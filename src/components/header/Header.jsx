import "./header.css"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DateRange } from "react-date-range"
import { useState } from "react"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import { useNavigate } from "react-router-dom"


const Header = ({type}) => {
  const [destination, setDestination] = useState("")

  const [openOptions, setOpenOptions] = useState(false)
  const [options,setOptions] = useState({
    adult: 1,
    children:0,
    rooms:1
  });


  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const navigate = useNavigate()

  const handleOption = (name , operation) => {
    setOptions((prev)=> {
      return {
        ...prev, 
        [name]: operation === "i" ? options[name] + 1 :  options[name]  - 1
      }
    })

  }
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date,options } })

  }
 
  return (
    <div className="header">
      <div className= {type==="list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>stays</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>AirPort Taxis</span>
          </div>
        </div>
        { type!== "list" &&  
         <> <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
          <p className="headerDescription">
            Get rewarded for yours travels - Unclock instant saving of 
            10% or more with free BookTn account.
          </p>
          <button className="headerButton">SignIn / Register</button>
         
          <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input
                  type="text" 
                  placeholder="Where's your Destination" 
                  className="headerSearchInput" 
                  onChange={e=>setDestination(e.target.value)}
                  />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                <span onClick={()=> setOpenDate(!openDate)} className="HeaderSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to 
                ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                {openDate &&<DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span
                onClick={()=> setOpenOptions(!openOptions)}
                 className="HeaderSearchText">
                  {`${options.adult} adult . 
                  ${options.children} children .
                  ${options.rooms} rooms`} 
                </span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adults</span>
                        <div className="optionCounter">
                          <button 
                          disabled= {options.adult <=1 }
                          className="optionCountButton" onClick={()=> handleOption("adult", "d")}> - </button> 
                          <span className="optionCounterNumber">{options.adult}</span>
                          <button className="optionCountButton" onClick={()=> handleOption("adult", "i")}> + </button> 
                        </div>
                    </div>
                    <div className="optionItem">
                          <span className="optionText">Children</span>
                          <div className="optionCounter">
                          <button 
                          disabled= {options.children <= 0 }
                          className="optionCountButton" onClick={()=> handleOption("children", "d")}> - </button> 
                          <span className="optionCounterNumber">{options.children}</span>
                          <button className="optionCountButton"onClick={()=> handleOption("children", "i")}> + </button> 
                        </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button 
                          disabled= {options.rooms <=1 }
                          className="optionCountButton" onClick={()=> handleOption("rooms", "d")}> - </button> 
                          <span className="optionCounterNumber">{options.rooms}</span>
                          <button className="optionCountButton" onClick={()=> handleOption("rooms", "i")}> + </button> 
                        </div>
                    </div>
                </div> }
            </div>
            <div className="headerSearchItem">
               <button className="headerButton" onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  )
}

export default Header