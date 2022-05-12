import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/962986/pexels-photo-962986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Dublin</h1>
                <h2>154 properties</h2>

            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/2563984/pexels-photo-2563984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Jam</h1>
                <h2>43 properties</h2>

            </div>
        </div>


        <div className="featuredItem ">
            <img src="https://images.pexels.com/photos/1000738/pexels-photo-1000738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg sidibou" />
            <div className="featuredTitle">
                <h1>Austin,Texas</h1>
                <h2>306 properties</h2>

            </div>
        </div>
    </div>
  )
}

export default Featured