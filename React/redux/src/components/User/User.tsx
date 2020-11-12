import React from 'react';
import dark from './../../Assets/Clipper-Logo-Dark-Theme.png'
import Images from './../Images/Images'

export function User(prop:any){
    return(
        <div className = "Post row " id= 'outerDiv'>
            <div id='div1'>
                <a href='#' className='col-2'><img src={dark} className="Post-Profile-Pic" id= 'anchorOne'/></a>
            </div>
            <div className = "col row whiteText" id = 'div2'>
                
                <div className="row" id = 'div3'>
                    {/* <Images/> Inappropriate component; Users are not using carousels */}
                </div>
                <p id="Bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
        </div>
    )
}