import useFetch from "../hooks/useFetch";

const Featured = () => {
  const { data, loading, error}= useFetch("/hotels/countByCity?cities=agadir,marakich,bni mellel")
 console.log(data)
  return (
    <div className="featured" style={{
        width: "100%",
        maxWidth: "1024px",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        zIndex: "1"
    }}>
      {loading ? ( "loading please wait"):(
        <>
      <div className="featuredItem" style={{
        position: "relative",
        color: "white",
        borderRadius: "10px",
        overflow: "hidden",
        height: "250px",
        flex:"1"
      }}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
          style={{width: "100%",  height: "100%",  objectFit: "cover"}}
        />
        <div className="featuredTitles" style={{position: "absolute",bottom: "20px",left: "20px"}}>
          <h2>Morocoo</h2>
          <h4>{data[0]} properties</h4>
        </div>
      </div>
      
      <div className="featuredItem" style={{
        position: "relative",
        color: "white",
        borderRadius: "10px",
        overflow: "hidden",
        height: "250px",
        flex:"1"
      }}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
          style={{width: "100%",  height: "100%",  objectFit: "cover"}}
        />
        <div className="featuredTitles" style={{position: "absolute",bottom: "20px",left: "20px"}}>
          <h2>London</h2>
          <h4>{data[1]} properties</h4>
        </div>
      </div>
      <div className="featuredItem" style={{
        position: "relative",
        color: "white",
        borderRadius: "10px",
        overflow: "hidden",
        height: "250px",
        flex:"1"
      }}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
          style={{width: "100%",  height: "100%",  objectFit: "cover"}}
        />
        <div className="featuredTitles" style={{position: "absolute",bottom: "20px",left: "20px"}}>
          <h2>Berlin</h2>
          <h4>{data[2]} properties</h4>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;