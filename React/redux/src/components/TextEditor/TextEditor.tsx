import React from "react";
import { Form } from "reactstrap";

const TextEditor = () => {
  return (
      <Form style={{width:'100%'}}>
          <div className="form-group">
              <textarea className="form-control" rows={4}></textarea>
          </div>
      </Form>
  )
}
export default TextEditor;
