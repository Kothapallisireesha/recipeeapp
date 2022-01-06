import React, { useState } from 'react'

function Recipedetails(props) {
    console.log(props.data)
    return (
        <div >
            
            {
                props.data.map((val,idx)=>{
                   return(<div key={val+idx}>
                       <div  className="card">
                                <div  className="card-body" >
                                   
                                   </div>
                                <img src={val.img} className="card-img-top" alt="img" height={"400px"} width={"200px"}/>
                                
                                      
                            </div><br />
                            <div>
                            <h5  className="card-title">{val.name}</h5>
                            </div>
                            <p className="card-text">{val.recipe}</p>
                   </div>) 
                })
            }

        </div>
    )
}

export default Recipedetails
