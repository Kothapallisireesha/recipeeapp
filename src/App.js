import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Recipedetails from './components/Recipedetails';
import Recipeeapp from './components/Recipeeapp';
import Navbar from './components/Navbar';

function App() {
  const [recipe, setrecipe] = useState([
    {
      id: 1,
      name: " π β  π  ππππ©ππππΆπΈπ  π  βπ π",
      recipe: "πΎπππ 1 π½ππππ πππ ππππ πππ ππππ 2 πππππππ πππππ πππππ ππππ 3 πΎπππππ πππ ππππ πππππ ππππππ πππ ππππ πππ πππππππ ππ πΎπππ πππ ππππ ππππ π πππππππ πππππ. π²πππππ ππππππ πππ πππππππ πππ πππππ ππ ππ ππππ ππππ 4 π­πππππ ππ πππππππ πππππ, πππππ ππππ πππππππ ππππππ. πΎππππ ππ ππ ππππππππ πππππππππ πππ πππππ ππ πππ ππππ.ππππ 5 πΏπππ πππππππππππ πππππππ ππππππ ππ ππππ ππ ππ πππππ ππ ππππππ ππ πππ ππππ.β πΏππ ππππ ππππ πππππππ ππππππ πππ ππππ ππππ ππππ π πππππππ ππππππ!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNaW9G_Al1LIS52KT7ebIQyi7m36pWDNTHpxm6rO5pMuYxdJvf-KwDQrK9ENUgGhPrwY&usqp=CAU"
  },
    {
      id: 2,
      name: "βΊπ  πΎΰΈ’βΓΠ² π³Ξ±πΟβΕ  π²π",
      recipe: "βπ¬π΄ ππ¬ πππ¨π’ ππ²π©ππ πππͺπ²π« ππ¦π±π₯π¬π²π± ππ₯π¬πΆπ ππ± βπ¬πͺπ’ ππ²π―π¦π«π€ ππ¬π π¨π‘π¬π΄π« βπ’π―π’π° ππ₯π’ ππ±π’π­-ππΆ-ππ±π’π­ βπ’π π¦π­π’ ππ£ ππ²π©ππ πππͺπ²π« ππ¦π±π₯π¬π²π± ππ₯π¬πΆπ:ππ’π―π³π¦π«π€π° - 5-6 π€π²π©ππ π§ππͺπ²π«π° βπ«π€π―π’π‘π¦π’π«π±π° - 2 π±ππ°π­ πͺπ¦π©π¨ 3 π±ππ°π­ πͺπ¦π©π¨ π­π¬π΄π‘π’π― βππ©π£ π π²π­ π°π²π€ππ― βππ©π£ π±ππ°π­. πͺππ¦π‘π βππ©π£ π±π’ππ°π­π¬π¬π« π ππ―π‘ππͺπ¬πͺ π­π¬π΄π‘π’π― 1 π π²π­ π΄ππ±π’π― π π­π¦π«π π₯ π¬π£ πππ¨π¦π«π€ π°π¬π‘π βππ©π£ π±ππ°π­. π€π₯π’π’ ππ’π±π₯π¬π‘ - ππ±π’π­ 1- πππ¨π’ π°π²π€ππ― π°πΆπ―π²π­ ππΆ ππ¬π¦π©π¦π«π€ π°π²π€ππ― ππ«π‘ π ππ―π‘ππͺπ¬πͺ π­π¬π΄π‘π’π― π¦π« 1 π π²π­ π΄ππ±π’π―. ππ‘π‘ πͺπ¬π―π’ π΄ππ±π’π―, π¦π£ π―π’π?π²π¦π―π’π‘. ππ¬π¦π© π¬π« πͺπ’π‘π¦π²πͺ π£π©ππͺπ’ π±π¦π©π© π¦π± ππ±π±ππ¦π«π° π π±π₯π¦π π¨ π°πΆπ―π²π­πΆ π±π’π΅π±π²π―π’. ππ±π’π­ 2 - β­π¬πͺππ¦π«π’ πͺππ¦π‘π, πππ¨π¦π«π€ π°π¬π‘π ππ«π‘ πͺπ¦π©π¨ π­π¬π΄π‘π’π― π¦π« π ππ¬π΄π©. ππ¦π΅ π΄π’π©π©. ππ±π’π­ 3 - ππ‘π‘ π₯ππ©π£ π±ππ°π­. π€π₯π’π’ ππ«π‘ πͺπ¦π΅. ππ±π’π­ 4 - ππ¬π΄ ππ‘π‘ πͺπ¦π©π¨ ππ«π‘ πͺπ¦π΅ ππ€ππ¦π«.ππ±π’π­ 5 - ππ«π’ππ‘ π π©π¦π€π₯π± π‘π¬π²π€π₯ π¬π£ π±π₯π’ πͺπ¦π΅π±π²π―π’.ππ‘π‘ πͺπ¬π―π’ πͺπ¦π©π¨ π¦π£ π―π’π?π²π¦π―π’π‘.πππ¨π’ π°π²π―π’ π±π₯π’ π‘π¬π²π€π₯ π¦π° π©π¦π€π₯π± ππ«π‘ π°π¬π£π±.ππ±π’π­ 6 - ππ―π’ππ°π’ πΆπ¬π²π― π­ππ©πͺπ° π΄π¦π±π₯ π¬π¦π© ππ«π‘ π‘π¦π³π¦π‘π’ π±π₯π’ π‘π¬π²π€π₯ π¦π«π±π¬ π°πͺππ©π© πππ©π©π°.ππ±π’π­ 7 - ππ’π’π­ π£π―πΆ π±π₯π’ π€π²π©ππ π§ππͺπ²π«π° π±π¦π©π© π±π₯π’πΆ π±π²π―π« π€π¬π©π‘π’π« ππ―π¬π΄π« ππ«π‘ π‘π¦π­ π±π₯π’πͺ π¦π« π±π₯π’ π°π²π€ππ― π°πΆπ―π²π­.βπ£ πΆπ¬π² π¨π’π’π­ π±π₯π’ π€π²π©ππ π§ππͺπ²π«π° π‘π¦π­π­π’π‘ π¦π« π°π²π€ππ― π°πΆπ―π²π­ π£π¬π― π π π¬π²π­π©π’ π¬π£ π₯π¬π²π―π° ππ’π£π¬π―π’ π°π’π―π³π¦π«π€, πΆπ¬π²π©π© π€π’π± πͺπ¬π¦π°π± ππ«π‘ π°π?π²π¦π°π₯πΆ π€π²π©ππ π§ππͺπ²π« ππ° π±π₯π’πΆ π΄π¬π²π©π‘ π₯ππ³π’ πππ°π¬π―ππ’π‘ π±π₯π’ π°πΆπ―π²π­ π­π―π¬π­π’π―π©πΆ.",
      img: "https://yourfoodfantasy.com/wp-content/uploads/2016/12/How-to-Make-Perfect-Gulab-Jamun-Your-Food-Fantasy-1.png"
  },
    
    {
        id: 3,
        name: "βπ£  βΞπΉο½α΅  βπ―",
        recipe: "π³πππ πππ πππ ππππ ππππππ ππ π πππππ ππ πππ. πΏππ πππ πππ ππ ππ ππππππππππ πππ. ππππ πππ πππ πππ ππ πππ πππππ ππ πππ ππππ πππππ ππππππ, ππππ ππππππ ππππ ππ πππππππ πππ ππππππππ ππ πππ πππππππ.π΄π ππππ ππππ ππ ππππ πππππππ, ππππ πππ πππ ππ ππππ πππ. π΄π ππππ πππβπ ππππ ππ ππ ππππ ππππ, πππ πππ ππ πππ ππππππ πππ.πΏπππ π ππππππππππ πππππ/πππππ. ππππ ππππ πππππ ππππππππ πππ πππππ πππππ πππ πππ. πππ ππππ ππππ πππ ππππ πππππ πππππ/πππππ ππ ππππππ πππ πππππ πππππππ.π½πππππππ ππ πππ πππ ππππππ ππ π ππππππ-πππ πππ ππ π ππππππππππ πππ πππ. π΄π πππ πππ ππ ππππ, πππ ππππππ ππππ ππππ ππππ πππ, πππππππ ππππππ πππ πππππ ππππ ππ.π΄π πππ πππ ππ ππππ πππ, πππ ππππππ ππππ πππ ππππ πππππππ ππ ππππ πππππ ππππππππ ππππ ππππππ.",
        img: "https://static.toiimg.com/thumb/55048059.cms?width=1200&height=900"
    },
   
  ]);
  const [ClickedData, setClickedData] = useState([])

  let getData = (userClick)=>{
    setClickedData(userClick)
  }
console.log(ClickedData)

  return (
    
    <Router>
       
      <div className="App">
      <Navbar />


        <div className="row border border-dark" style={{backgroundcolor:"black"}}>
        <br/>
        <div className="col-md-3"  >
        <Recipeeapp data={recipe} getData={getData}/>
        </div><br/>
        <div className="col-md-8">
        <Recipedetails data={ClickedData}/>
        </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
