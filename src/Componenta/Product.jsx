import axios from "axios"
import { useEffect, useState } from "react"

function Product() {
  
  const [value,setvalue]=useState([])

  const fetchdata=()=>{
    axios.get("http://localhost:3000/products")
    .then((res)=>{
      setvalue(res.data)

    })
    .then((err)=>console.log(err))


  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div style={{display:"grid", gridTemplateColumns: "repeat(3,1fr)"}}>

   {value.map((el)=>(
    <div key={el.id} style={{boxshadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
    <img src={el.image} alt="" height={300} width={300}  />
    <h1>{el.title}</h1>
    <p>{el.price}</p>
    <button>Edit</button>
    <button>delete</button>

  </div>
   )
  )}

      
      
    </div>
  )
}

export default Product
