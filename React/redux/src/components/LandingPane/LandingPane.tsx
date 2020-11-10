import React from 'react';
import dark from './../../Assets/Clipper-Logo-Dark-Theme.png'

export function LandingPane(){
    return(
        <div className ="BlueBackground col-md-3 d-none d-md-block" style={{float:'left',height: '100%'}}>
            <br/>
            <br/>
            <br/>
            <div>
                <img src={dark} style={{height:'150px', width:'150px', display:"block", marginLeft:'auto', marginRight:'auto'}} className = "Logo-Large"/>
                <h2 style={{textAlign:'center'}}>CLIPPER</h2>
            </div>
            <br/>
            <div style={{textAlign:'center', padding:'20px', paddingLeft:'30px'}}>
                <p>Welcome to <strong>Clipper</strong>, the worlds newest social network.</p>
                <p>Like our namesake sailing vessels of old, Clipper is revolutionizing the way that 
                    people across the world connect. We simplify and unify the social network 
                    experience by letting anyone add to <i>The Feed</i>. All you need to do is
                     <a href="d"> create an account</a> and <a href="c">login</a>!</p>
            </div>

        </div>
    )
}