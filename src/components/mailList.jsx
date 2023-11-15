const MailList = () => {
  return (
    <div className="mail" style={{
        width: "100%",
        marginTop: "50px",
        backgroundColor: "#003580",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "50px"
    }}>
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email"  style={{
             width: "300px",
             height: "30px",
             padding: "10px",
             border: "none",
             marginRight: "10px",
             borderRadius: "5px"
        }}/>
        <button style={{
             height: "50px",
             backgroundColor: "#0071c2",
             color: "white",
             fontWeight: "500",
             border: "none",
             borderRadius: "5px",
             cursor: "pointer"
        }}>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList