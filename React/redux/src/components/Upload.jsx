import React from 'react';
import S3 from 'react-aws-s3';
import {useRef} from 'react';

const Upload=()=> {
  const fileInput=useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let file=fileInput.current.files[0];
    let newFileName=fileInput.current.files[0].name;
    console.log(event);

    const config={
      bucketName: "clipperrevature",
      dirName: "photos",
      region : "us-east-1",
      accessKeyId:"AKIARKUKJ6TY3AFJJPG6",
      secretAccessKey: "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",
      s3Url:"https://clipperrevature.s3.amazonaws.com/"
    
   };
   const ReactS3Client= new S3(config);
    ReactS3Client.uploadFile(file, newFileName)
      .then(data=>{
      console.log(data);
      if (data.status===204){
        console.log("success");
      }else {
        console.log("fail");
      }
      });
    };


  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input type="file"    ref={fileInput} />
        <button type='submit'>Upload </button>
      </form>
    </div>
    
  )
}
export default Upload
