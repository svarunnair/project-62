import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteData, getData } from '../../Redux/data/action'


function Employ() {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const mainData=useSelector((store)=>store.data.dataGet)
   const [sort,setSort]=useState([mainData])
  
 console.log("sort",sort)

  useEffect(()=>{
    setSort(mainData)
  },[mainData])
  
const dataLength = mainData.length;

const handleSortId=()=>{
 let sortId=mainData.sort((a,b)=>{
  return a._id.localeCompare(b._id);
})
      setSort([...sortId])
}




const handleSort=()=>{
 let sortName = mainData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
      setSort([...sortName])
}

  const handleCreate=()=>{
    navigate('/create')
  }

  const handleEdit=(id)=>{
    navigate(`/edit/${id}`)
  }
  const handleDelete=(id)=>{
    dispatch(deleteData(id))
    alert("Data Deleted")
    window.location.reload()
  }

  useEffect(()=>{
    dispatch(getData())
  },[])
  
  return (
    <div style={{display:"flex",justifyContent:"center"}}>

        <table style={{padding:50,marginTop:"40px"}}>
      <thead >
     <div style={{display:"flex",gap:30}}>
   <button onClick={handleCreate}>Create new data</button>          
<button onClick={handleSort} >Sort by Name</button>
<button onClick={handleSortId} >Sort by Id</button>
<text >Total Count : {dataLength}</text>
</div>
   <div><text>Search</text><input  placeholder='search here...'/></div>
        <tr style={{border:"1px solid green",background:"#8FBC8F"}}>
          <th style={{border:"2px solid grey"}}>Unique ID</th>
           <th style={{border:"2px solid grey"}}>Image</th>
           <th style={{border:"2px solid grey"}}>Name</th>
           <th style={{border:"2px solid grey"}}>Email</th>
           <th style={{border:"2px solid grey"}}>Mobile No.</th>
            <th style={{border:"2px solid grey"}}>Designation</th>
             <th style={{border:"2px solid grey"}}>Gender</th>
              <th style={{border:"2px solid grey"}}>Course</th>
               <th style={{border:"2px solid grey"}}>Create Date</th>
               <th style={{border:"2px solid grey"}}>Actions</th>
        </tr>

      </thead>
      <tbody>
        {sort.map((item,index)=>(
          <tr style={{border:"2px solid grey"}}>
            <td style={{border:"2px solid grey"}}>
              {item._id}
            </td>
             <td style={{border:"2px solid grey"}}>
              <image src={item.image}/>
            </td>
            <td style={{border:"2px solid grey"}}>
              {item.name}
            </td>
             <td style={{border:"2px solid grey"}}>
              {item.email}
            </td>
             <td style={{border:"2px solid grey"}}>
              {item.mobile}
            </td>
             <td style={{border:"2px solid grey"}}>
               {item.designation}
            </td>
             <td style={{border:"2px solid grey"}}>
             {item.gender}
            </td>
             <td style={{border:"2px solid grey"}}>
               {item.course}
            </td>
            <td style={{border:"2px solid grey"}}>
             {item.update}
            </td>

            <td style={{border:"",display:"flex", gap:"10px"}}>
              <button onClick={()=>handleEdit(item._id)}  style={{background:"#B22222",color:"white",padding:8,borderRadius:12}}>Edit</button>
               <button onClick={()=>handleDelete(item._id)} style={{background:"#B22222",color:"white",padding:8,borderRadius:12}}>Delete</button>
           
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Employ