import "./search.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/18464259.webp?k=7237deed7ed4b49d4c6e29bf2bc4133cf9931c21a1a6508d53cfa70c25b4f0bd&o=&s=1"
         alt="" 
         className="siImg" 
         />
         <div className="siDescription">
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp"> Free Airport taxi </span>
            <span className="siSubtitle">
                Studio Apartment with Air Conditioning
            </span>
            <span className="siFeatures">
                Entire studio ¤ 1 bathrom ¤ 21m² ¤ 1 full bed
            </span>
            <span className="siCancelOp"> Free Cancellation </span>
            <span className="siCancelOpSubtitle"> 
            You can cancel later, so lock in this great price today!
             </span>
         </div>

         <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.8</button>
                </div>

                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton"> See Availability</button>

                </div>

         </div>

    </div>
  )
}

export default SearchItem