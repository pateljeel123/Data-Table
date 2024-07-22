import { Link } from "react-router-dom"


function Navigation() {
  return (
    <div style={{justifyContent:"space-between",display:"flex"}}>
     

      <Link to={"/"}>home</Link>
      <Link to={"/product"}>product</Link>
      <Link to={"/addproduct"}>addproduct</Link>
      
    </div>
  )
}

export default Navigation
