import useFetch from "../hooks/useFetch";

const FeaturedProperties = () => {
  const { data,loading, error}=useFetch("");
  return (
    <div className="fp" style={{
        width: "100%",
        maxWidth: "1024px",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px"}}>
      <div className="fpItem" style={{
          flex:"1",
          gap: "10px",
          display: "flex",
          flexDirection: "column"
      }}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
          style={{width: "100%",height: "250px",objectFit: "cover"}}
        />
        <span className="fpName" style={{color: "#333",fontWeight:"bold"}}>Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice" style={{fontWeight: "500"}}>Starting from $120</span>
        <div className="fpRating">
          <button style={{
            backgroundColor: "#003580",
            color: "white",
            border: "none",
            padding: "3px",
            marginRight: "10px",
            fontWeight: "bold"
          }}>8.9</button>
          <span style={{fontSize: "14px"}}>Excellent</span>
        </div>
      </div>
      <div className="fpItem" style={{
          flex:"1",
          gap: "10px",
          display: "flex",
          flexDirection: "column"
      }}>        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
          style={{width: "100%",height: "250px",objectFit: "cover"}}
        />
        <span className="fpName" style={{color: "#333",fontWeight:"bold"}}>Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice" style={{fontWeight: "500"}}>Starting from $140</span>
        <div className="fpRating">
          <button style={{
            backgroundColor: "#003580",
            color: "white",
            border: "none",
            padding: "3px",
            marginRight: "10px",
            fontWeight: "bold"
          }}>9.3</button>
          <span style={{fontSize: "14px"}}>Exceptional</span>
        </div>
      </div>
      <div className="fpItem" style={{
          flex:"1",
          gap: "10px",
          display: "flex",
          flexDirection: "column"
      }}>        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
          style={{width: "100%",height: "250px",objectFit: "cover"}}
        />
        <span className="fpName" style={{color: "#333",fontWeight:"bold"}}>Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice" style={{fontWeight: "500"}}>Starting from $99</span>
        <div className="fpRating">
          <button style={{
            backgroundColor: "#003580",
            color: "white",
            border: "none",
            padding: "3px",
            marginRight: "10px",
            fontWeight: "bold"
          }}>8.8</button>
          <span style={{fontSize: "14px"}} >Excellent</span>
        </div>
      </div>
      <div className="fpItem" style={{
          flex:"1",
          gap: "10px",
          display: "flex",
          flexDirection: "column"
      }}>        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
          style={{width: "100%",height: "250px",objectFit: "cover"}}
        />
        <span className="fpName" style={{color: "#333",fontWeight:"bold"}}>Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice" style={{fontWeight: "500"}}>Starting from $105</span>
        <div className="fpRating">
          <button style={{
            backgroundColor: "#003580",
            color: "white",
            border: "none",
            padding: "3px",
            marginRight: "10px",
            fontWeight: "bold"
          }}>8.9</button>
          <span style={{fontSize: "14px"}}>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;