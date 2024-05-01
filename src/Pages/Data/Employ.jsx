import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteData, getData } from '../../Redux/data/action'
import RefreshIcon from '@mui/icons-material/Refresh';


function Employ() {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const mainData=useSelector((store)=>store.data.dataGet)
  const loading=useSelector((store)=>store.data.isLoading)
  const [search,setSearch]=useState([])
  const [page,setPage]=useState(1)
  const [initial,setInitial]=useState(0)
  const [final,setFinal]=useState(4) 
  const [render,setRender]=useState(false)
  const sliceData=search.slice(initial,final)
  const dataLength = mainData.length;
  
useEffect(()=>{
  setSearch(mainData)
  
},[])


const handleSortId=()=>{
 let sortId=mainData.sort((a,b)=>{
  return a._id.localeCompare(b._id);
})
      setSearch([...sortId])
}
const handledash=()=>{
  navigate('/')
}

const handleSort=()=>{
 let sortName = mainData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
      setSearch([...sortName])
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
    setRender(true)
    
  }
  const handleSearch=(e)=>{
    let value = e.target.value 
    let filterData=mainData.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()))
    setSearch(filterData)
  }


  useEffect(()=>{
    dispatch(getData())
    setRender(false)
  },[render])

  useEffect(()=>{
    setSearch(mainData)
  },[mainData])


  const handlePre=()=>{
    if(initial===0&&final===4){
      setInitial(0)
      setFinal(4)
    }
    else{
       setFinal(final-4)
    setInitial(initial-4)
    setPage(page-1)
    
    }
   
  }
  const handleNext=()=>{
    if(final<dataLength){
     setInitial(initial+4)
    setFinal(final+4)
    setPage(page+1)
    
    }
    
  }
      
  return (

    <>

    {loading?<RefreshIcon/>:<div style={{marginBottom:50,padding:50,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  
  <div style={{display:"flex",gap:80}}>
  <button onClick={handledash}>Dashboard</button>
   <button onClick={handleCreate}>Create new data</button>         
<button onClick={handleSort} >Sort by Name</button>
<button onClick={handleSortId} >Sort by Id</button>
<div><text>Search</text><input onChange={handleSearch} placeholder='search here...'/></div>
<text >Total Count : {dataLength}</text>
</div>
 
    <div style={{display:"flex",justifyContent:"center"}}>

        <table style={{}}>
      <thead >
    
   
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
        {sliceData?.map((item,index)=>(
          <tr style={{border:"2px solid grey"}}>
            <td style={{border:"2px solid grey"}}>
              {item._id}
            </td>
             <td style={{border:"2px solid grey"}}>
              <img style={{width:"40%"}} src={item.image}/>
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
    <div style={{display:"flex",gap:30}}>
    <button onClick={handlePre}>pre</button>
<text>{page}</text>
<button onClick={handleNext}>next</button>
</div>
    </div>}

    </>
  )
}

export default Employ