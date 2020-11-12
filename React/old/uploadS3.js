
import React from 'react';
import S3 from 'react-aws-s3';
import {useRef} from 'react';

const k = 'FDRHJTP5OERDYWG5AIKA'
const sk = 'alFfEe0dQoojA6sxVK0qFdXJzrM9cmpSEp8Cs9Nz'
let splitString = (str) => {
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    return reverseArr.join("");
}

const Upload=()=> {
  const fileInput=useRef();
  
    const handleSubmit = (event) => {
    event.preventDefault();
    let file=fileInput.current.files[0];
    let newFileName=fileInput.current.files[0].name;
    console.log(event);
    
    const config={
        bucketName: "clipperev",
        dirName: "Images",
        region : "us-east-1",
        accessKeyId: splitString(""),
        secretAccessKey: splitString("")
        }
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
