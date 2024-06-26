import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CheckboxOptions from '../../Component/CourserDrop';
import RadioButtonOptions from '../../Component/GenderDrop';
import DropdownOptions from '../../Component/DesigDrop';
import { useDispatch, useSelector } from 'react-redux';
import { getData, postData } from '../../Redux/data/action';

function Create() {
      
    const[name,setName]=useState([])
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState([])
    const [imageData, setImageData] = useState(null);
    const navigate=useNavigate()
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [designation, setDesignation] = useState('');
    const [isValidemail,setIsValidEmail]=useState('')
    const dispatch=useDispatch()
    const mainData=useSelector((store)=>store.data.dataGet)
    const [detailName,setDetailName]=useState('')
    const [number,setNumber]=useState('')
    const [address,setAddress]=useState('')


  const handleSelectedOptionsChange = (newOptions) => {
    setOptions(newOptions);
  };

  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };



  useEffect(()=>{
    dispatch(getData())
  },[])

  const isEmail=mainData.map((item)=>{
    return item.email
  })


  const handleOptionChangeDesi = (designation) => {
    setDesignation(designation);
  };


     const handleFileUpload = (event) => {
    const file = event.target.files[0];

  
    if (file) {
      const reader = new FileReader();
   
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setImageData(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

 
  const handleUpload = () => {
    
    const imageId = generateUniqueId();
    console.log('Image Data:', imageData);
    console.log('Image ID:', imageId);
   
  };

  console.log("imgeuri.....",imageData)

    const handleName=(e)=>{
        let value=e.target.value 
        setName(value)
    }
    const handleEmail=(e)=>{
              let value=e.target.value 
        setEmail(value)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(value));
    }
    const handleDetailName=(e)=>{
      let value=e.target.value
      setDetailName(value)
    }
    const handleDetailNum=(e)=>{
       let value=e.target.value
      setNumber(value)
    }
    const handleDetailAddress=(e)=>{
       let value=e.target.value
      setAddress(value)
    }

  
    const handleMobile=(e)=>{
              let value=e.target.value 
        setMobile(value)
    }
 
    const handleBack=()=>{
      navigate(-1)
    }
  
const updatedDate = new Date();
const dateOnly = updatedDate.toLocaleDateString();


    const handleSubmit=()=>{
      if(!name||!email){
        alert("Please fill the form")
      }
      if(!isValidemail){
        alert("Please enter valid email Id")
      }
      if(mobile.length!==10){
        alert("Please enter valid mobile number")
      }
      if(isEmail.includes(email)){
        alert('Email Id is already exist')
      }
      else{
        let data={
            name:name,
            email:email,
            mobile:mobile,   
            update:dateOnly,
            designation:designation,
            gender:selectedOption,
            course: options,
            detail:[{
              detailname:detailName,
              number:number,
              address:address
            }],
        
      }

      dispatch(postData(data))  
      alert("Data added")
      navigate(-1)
      }
      
    }

  return (
   <div>
       <div style={{padding:50, display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
       <text style={{fontSize:25,fontWeight:500,padding:20}}>Create Employ</text>
    
        <div class="w-70% md:w-70% lg:w-70%"  style={{display:"flex",justifyContent:"center",padding:40,border:'1px solid grey',borderRadius:30}}>
  
<div  style={{textAlign:"left",padding:20,gap:20,border:"",display:"flex",flexDirection:"column",}}>
     

        <label>Name</label>
         <label>Email</label>
          <label>Mobile</label>
           <label>Designation</label>
           <label >Gender</label>
            <label >Course</label>
             <label >Img upload</label>
                
</div>

<div style={{padding:20,gap:20,border:"",display:"flex",flexDirection:"column",}}>


<input onChange={handleName} placeholder='name...'/>
<input  onChange={handleEmail} placeholder='email...'/>


<input onChange={handleMobile} placeholder='mobile...'/>
<CheckboxOptions
        selectedOptions={options}
        onSelectedOptionsChange={handleSelectedOptionsChange}
      />
 <RadioButtonOptions
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
 <DropdownOptions
        selectedOption={designation}
        onOptionChange={handleOptionChangeDesi}
      />

<input onChange={handleDetailName} placeholder='DetailName...'/>
<input onChange={handleDetailNum} placeholder='DetailNum...'/>
<input onChange={handleDetailAddress} placeholder='Address...'/>
<hr></hr>
<input onChange={handleDetailAddress} placeholder='Address...'/>

      

 <input type="file" accept="image/png" onChange={handleFileUpload} />
      {imageData && (
        <div>
          <img src={imageData} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
          <button onClick={handleUpload}>Upload Image</button>
        </div>
      )}
 

</div>

        </div>
    <hr style={{padding:10}}></hr>
        <div style={{display:"flex",gap:30}}>
         <button style={{borderRadius:20,padding:10,background:"#B22222",color:"white"}} onClick={handleBack}>Go back</button>
        
        <button style={{borderRadius:20,padding:10,background:"#2F4F4F",color:"white"}} onClick={handleSubmit}>Submit</button>
      </div>
       </div>
    </div>
  )
}

export default Create