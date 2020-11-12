import React from 'react';

export function upload(prop:any){
    return(
        <div>
        <form  /*onSubmit={handleSubmit}*/>
          <input type="file"    /*ref={fileInput}*/ />
          <button type='submit'>Upload </button>
        </form>
        </div>
    )
}
