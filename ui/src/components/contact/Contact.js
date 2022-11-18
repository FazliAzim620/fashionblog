import { TextField, Typography,TextareaAutosize,Box, Container ,Button } from '@mui/material'
import { useState } from 'react';



const Contact = () => {
const [name,setName]=useState();
const [userEmail,setUserEmail]=useState();
const [userMessage,setUserMessage]=useState()
const [formData,setFormData]=useState({})
const [imageurl,setImage]=useState()
const [imgUrl,setUrl]=useState()
  const fetching=()=>{

    setFormData({
    userName:name,
  userEmail,
userMessage})

console.log(setFormData)
   // POST request using fetch inside useEffect React hook
   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(  formData)
};
fetch('http://localhost:3000/users', requestOptions)
    .then(response => response.json())
    .then(data => alert('data successfully transfer'));
  }

  ///////////////////////////////////////////////////////
  const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = () => {
        const base64data = reader.result;   
        resolve(base64data);
       setImage(base64data)
       console.log('base url',imageurl)
      }
    });
  }

  return (
   <Container  >
     <Box sx={{mt:'4rem'}}>
        <Typography variant='h4' align='center' >Contact <b style={{color:"red"}}>Now</b></Typography>
     
    </Box>
    <Box sx={{display:'flex',justifyContent:'center',mt:'3rem',width:{xs:'90%',md:'100%'},mb:'2rem'}}>
    <form style={{width:'50%'}}>
     
        <TextField type="text" placeholder='Please Name' variant='filled' sx={{width:'100%'}} onChange={(e)=>setName(e.target.value)}/>
        <TextField type="email" placeholder='Email...' variant='filled' sx={{width:'100%'}} onChange={(e)=>setUserEmail(e.target.value)}/>
        <TextareaAutosize
  aria-label="Message..."
//   minRows={3}
  variant='filled'
  placeholder="Message ..."
//   sx={{width:'100%'}}
  style={{resize:'none',width:'99%',marginTop:'0.5rem',height:"5rem",background:''}}
  onChange={(e)=>setUserMessage(e.target.value)}
/>

    <Button onClick={fetching}>submit</Button>
    </form>
    </Box>
   </Container>
  )
}

export default Contact