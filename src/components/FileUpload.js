import React, { useState } from "react";
import axios from "axios";
import { variables } from "../Variables";

export const FileUpload = () => {
  const [file, setFile] = useState();
  //const [fileName, setFileName] = useState();

  const saveFile = (e) => {
    //in case you wan to print the file selected
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    //setFileName(e.target.files[0]);
  };

  let config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*'
    }
  }

  const uploadFile= async (e) => {
    console.log(file);
    const formData = new FormData();
    formData.append("formfile", file);
    //formData.append("fileName", fileName)
    try {
      const res = await axios.post("api/Files/PostSingleFile", formData, config);
      console.log(res.status);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <input type="file" onChange={saveFile} />
      <input type="button" value="upload" onClick={uploadFile} />
    </>
  );
};