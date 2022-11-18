import {
  Box,
  styled,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Input,
  Button,
  CardActions,
  Modal
} from "@mui/material";
import { useEffect, useState } from "react";
import ClothImage from "../../static/image1.jpg";
import ClothImage2 from "../../static/image2.jpg";
import ClothImage3 from "../../static/image3.jpg";
import CloseIcon from '@mui/icons-material/Close';

const Blog = () => {
  const [imageUpload, setImageUpload] = useState();
  const [PostTitle, setPostTitle] = useState();
  const [description, setDescription] = useState();
  const [imgName,setImageName]=useState()
  const [open, setOpen] = useState(false);
  const [newData,setNewData]=useState()
  const BlogBox = styled(Box)({
    padding: "5px",
  });
  const BlogTypography = styled(Typography)({
    fontWeight: "900",
    display: "flex",
    justifyContent: "center",
    padding: "5px 0",
  });
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  width:{xs:'300',md:'400'},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const CreatePost = () => {
  //   if(imageUpload){
  //   var newData={
  //       id:newData?.length+1,
  //       image:imageUpload,
  //       title:PostTitle,
  //       desc:description}
  //   }else{
            
       
  //       handleOpen()
       
  //    }
  //       setImageUpload('')
  //       setPostTitle('')
  //    setImageName('')
  //       setDescription('')

  // };

////////////////////
// GET DATA FROM //////////
/////////////////////
useEffect(()=>{
  fetch('http://localhost:3000/blog')
  .then((response) => response.json())
  .then((data) =>setNewData(data))
},[])

const DeleteCard=(index)=>{

   let getData=newData.filter((item,ind)=>{
    return item.id!==index
})
   setNewData(getData)
   

fetch(`http://localhost:3000/blog/${index}`, { method: 'DELETE' })
.then(() => this.setState({ status: 'Delete successful' }))



  ////////////////////////////////////////////////////////////////////////////////////////

}
/////////////////////////////
/////////// POST DATA TO API
//////////////////////



// ///
const CreatePost = () => {
// console.log('title=>',PostTitle,'description=>',imageUpload)
  if(imageUpload){
  var myPost={
      image:imageUpload,
      title:PostTitle,
      desc:description}
  }else{
          
     
      handleOpen()
     
   }
   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(  myPost)
  };
  fetch('http://localhost:3000/blog', requestOptions)
    .then(response => response.json())
    .then(data => {alert('data successfully transfer')
    console.log('transfer data ',data)});
  }
//       setImageUpload('')
//       setPostTitle('')
//    setImageName('')
//       setDescription('')

//////////////////////////////

  return (
    <>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
       
        <Box sx={style}>
        <CloseIcon onClick={handleClose} sx={{float:'right',color:'red'}}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
        Please Upload some file to Blog
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Your blog must contain atleast Image and little description 
          </Typography>
        </Box>
      </Modal>
      <BlogBox sx={{ mb: { xs: "0", sm: "0", md: "300px" } ,mt:'3rem'}}>
        <Typography
          variant="h5"
          align="center"
          mt={2}
          sx={{ fontWeight: "400" }}
        >
      
          Fashion <b style={{ color: "red" }}>Blog</b>
         
          {/* <img src={ClothImage} /> */}
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 1 }}
          mt={2}
          sx={{
            display: "flex",
            justifyContent: `${newData?.length>2? "space-between":'center'}`,
            rowGap: { md: "55vh",xl:'35vh', sm: "0", xs: "0" },
            flexWrap: "wrap",
            flexDirection: { md: "row", sm: "column", xs: "column" },
          }}
        >
            
          {newData?.map((items, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{ height: "10vh" }}
              key={index}
            >
              <Card sx={{height:'25rem'}}>
                <CardMedia
                  component="img"
                  src={items.image}
                  sx={{
                    height: { md: "200px", sm: "300px" },
                    objectFit: "cover"
           
                }}
                  alt="card Image"
                />
                <CardContent>
                  <BlogTypography variant="h5">{items.title}</BlogTypography>
                  <Typography variant="body2" sx={{height:'5rem',overflow:'scroll','&::-webkit-scrollbar':{
            width:0,
        },}}>{items.desc}</Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{color:'red'}} onClick={()=>DeleteCard(items.id)}>Delete</Button>
                 {/* <Button onClick={APIData}>show data</Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </BlogBox>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <FormControl
          sx={{
            width: {xs:'90%',md:"50%"},
            mt:'4rem'
          }}
        >
          <Button
            variant='outlined'
            component="label"
            sx={{
              background: "transparent",
              color: "blue",
              "&:hover": {
                background: "transparent",
                color: "blue",
              },
            }}
          >
            {imgName?`${imgName}`:'Image Upload'}
         
            <Input
              type="file"
           sx={{display:'none'}}
              onChange={(e) => {
                let filePath = URL.createObjectURL(e.target.files[0]);
                let imageName=e.target.files[0].name
              setImageName(imageName)
        
                
                setImageUpload(filePath);

              }}
            />
          </Button>

          <Input
            type="text"
            sx={{background:{xs:'#e0e0e0',md:'transparent'}}}
            placeholder="Title..."
            value={PostTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="desc..."
            value={description}
            sx={{background:{xs:'#e0e0e0',md:'transparent'}}}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
          type='submit'
            sx={{
              background: "#616161",
              color: "white",
              mt:'1rem',
              "&:hover": {
                color: "#616161",
                background:'white',
                boxShadow: 'inset 4px -5px 23px -7px rgba(0,0,0,0.75)'
              },
            }}
            onClick={CreatePost}
          >
            Create Post
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Blog;
