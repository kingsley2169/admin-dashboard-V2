import { Box, Button, Container } from '@mui/material'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";


const content = () => {
  const  toolbarOptions  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3] }],
        ["bold", "italic", "underline","strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};
  return (
    <Container style={{paddingBottom: '20px'}}>
      <Container className='upload-form'>
        <Box sx={{backgroundColor: '#fafafa', 
            width: 1000, 
            height: 'auto',
            border: '0.5px solid'
        }}>
          <ReactQuill
            theme="snow"
            placeholder={"Write something awesome..."}
            modules={toolbarOptions}
          />
        </Box>
      </Container>
        <Button variant='outlined' style={{display: 'flex', justifyContent: 'center', alignContent: 'center', margin: 'auto'}}>Submit</Button>
    </Container>
  )
}

export default content