import React from 'react'

function Recipeeapp(props) {
    let sendRecipe = (id1,id2,id3,id4) => {
        var data = [{id:id1, name:id2, recipe:id3, img:id4}];
        props.getData(data)
    }

    return (
        <div >
            {
                props.data.map((val, idx) => {
                    return (
                        <div key={val+val.id}  style={{background:"white"}}>
                            <div  className="card" style={{ width: "20rem" }} onClick={()=>{sendRecipe(val.id,val.name,val.recipe,val.img)}}>
                                
                                <img src={val.img}  alt="img" />
                                
                                <div  className="card-body">
                                    <h4>{val.name}</h4>
                                    
                                </div>
                            </div><br />
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Recipeeapp
