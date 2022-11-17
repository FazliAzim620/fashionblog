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
} from "@mui/material";
import { useEffect, useState } from "react";
import ClothImage from "../../static/image1.jpg";
import ClothImage2 from "../../static/image2.jpg";
import ClothImage3 from "../../static/image3.jpg";

const Blog = () => {
  const [imageUpload, setImageUpload] = useState();
  const [PostTitle, setPostTitle] = useState();
  const [description, setDescription] = useState();
  const [imgName,setImageName]=useState()

  const BlogBox = styled(Box)({
    padding: "5px",
  });
  const BlogTypography = styled(Typography)({
    fontWeight: "900",
    display: "flex",
    justifyContent: "center",
    padding: "5px 0",
  });
  const [cardData, setCardData] = useState([
    {  id:1,
      image: ClothImage,
      title: "Cloths",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    { id:2,
      image: ClothImage2,
      title: "Shorts",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    { id:3,
      image: ClothImage3,
      title: "Shorts",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ]);

  const CreatePost = () => {
    let newData={
        id:cardData.length+1,
        image:imageUpload,
        title:PostTitle,
        desc:description}
        
     localStorage.setItem('newData',JSON.stringify(newData));
     let getData=localStorage.getItem('newData')

        setCardData([...cardData,JSON.parse(getData)])
        setPostTitle('')
     setImageName('')
        setDescription('')

  };


const DeleteCard=(index)=>{
    
//    let newArr= cardData.filter((items,index)=>{
//     return items.id!==index
//    })

   let getData=cardData.filter((item,ind)=>{
    return ind!==index
})


   setCardData(getData)
console.log('deleted data',getData)
}
  return (
    <>
      <BlogBox sx={{ marginBottom: { xs: "0", sm: "0", md: "300px" } }}>
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
            justifyContent: "space-between",
            rowGap: { md: "55vh",xl:'35vh', sm: "0", xs: "0" },
            flexWrap: "wrap",
            flexDirection: { md: "row", sm: "column", xs: "column" },
          }}
        >
            
          {cardData.map((items, index) => (
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
                    objectFit: "cover",
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
                    <Button sx={{color:'red'}} onClick={()=>DeleteCard(index)}>Delete</Button>
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
            width: "50%",
            mt:'3rem'
          }}
        >
          <Button
            variant="contained"
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
         
            <input
              type="file"
              hidden
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
            placeholder="Title..."
            value={PostTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="desc..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
          type='submit'
            sx={{
              background: "blue",
              color: "white",
              "&:hover": {
                color: "blue",
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
