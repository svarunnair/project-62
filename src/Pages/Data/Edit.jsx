import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DesigDrop from '../../Component/DesigDrop';
import CourseDrop from '../../Component/CourserDrop';
import GenderDrop from '../../Component/GenderDrop';
import GenderRadioButtons from '../../Component/GenderDrop';
import CheckboxOptions from '../../Component/CourserDrop';
import RadioButtonOptions from '../../Component/GenderDrop';
import DropdownOptions from '../../Component/DesigDrop';
import { useDispatch, useSelector } from 'react-redux';
import { getData, patchData } from '../../Redux/data/action';

function Create() {
    const localData = JSON.parse(localStorage.getItem('data'))||[];
      
    const[name,setName]=useState([])
    const[email,setEmail]=useState([])
    const[mobile,setMobile]=useState([])
    const [imageData, setImageData] = useState(null);
    const [desig,setDesig]=useState([])
    const [gender,setGender]=useState("")
    const navigate=useNavigate()
    const [options, setOptions] = useState([]);
    const [designation, setDesignation] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [isValidemail,setIsValidEmail]=useState('')
    const params=useParams()
    const dispatch=useDispatch()
    const paramsId=params.id
    const mainData=useSelector((store)=>store.data.dataGet)

    console.log("mainDataa",mainData)

      useEffect(()=>{
    dispatch(getData())
  },[])

  const isEmail=mainData.map((item)=>{
    return item.email
  })
  console.log("isEmail",isEmail)

  const handleSelectedOptionsChange = (newOptions) => {
    setOptions(newOptions);
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

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
    const handleMobile=(e)=>{
              let value=e.target.value 
        setMobile(value)
    }
  
    const handleBack=()=>{
      navigate(-1)
    }
    const handleDesi=(e)=>{

        setDesig(e)
    }
    const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
    

   const updatedDate = new Date();
const dateOnly = updatedDate.toLocaleDateString();
console.log("Date Only:", dateOnly);

    const handleSubmit=()=>{
      if(!name||!email){
        alert("Please fill the form")
      }
      if(!isValidemail){
         alert("Please enter valid mail Id")
      }
      if(isEmail.includes(email)){
        alert('Email Id is already exist')
      }
      if(mobile.length!==10){
         alert("Please enter valid Mobile number")
      }
      else{
        let data={
           name:name,
            email:email,
            mobile:mobile,   
            update:dateOnly,
            desig:desig,
            gender:selectedOption,
        
      }
      dispatch(patchData(paramsId,data))
   
      alert("Data added")
      navigate(-1)
      }
      
    }

  return (
   <div>
       <div style={{padding:50, display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
       <text style={{fontSize:25,fontWeight:500,padding:20}}>Edit Data</text>
    
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


<input type='number' onChange={handleMobile} placeholder='mobile...'/>
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

      

 <input type="file" accept="image/*" onChange={handleFileUpload} />
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