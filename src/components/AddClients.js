import React from 'react';
import { useState } from 'react';
import './Clients.css'
import { BsFillPlusSquareFill } from "react-icons/bs";


const AddClients = ({data,setData}) => {
    const [clicked, setClicked] = useState(false);
    const [name,setName]=useState("");
    const [domain,setDomain]=useState("");
    const [entities,setEntities]=useState("");
    const [users,setUsers]=useState("");

    const handleClick = () => {
        setClicked(!clicked);
      };

      function handleForm(e){
        e.preventDefault();
        if(name !== "" && domain !== "" && entities !== "" && users !== ""){
          setData([...data,{
            "id":data.length +1,
             "Name":name,
            "Domain":domain,
            "Entities":entities,
            "Users":users
          }])  
        }
        setName("");
        setUsers("");
        setDomain("");
        setEntities("");
        setClicked(false);

      }
    return (
        <div>
            <span id='addClients' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path></svg><BsFillPlusSquareFill></BsFillPlusSquareFill></span>
            {clicked ?<form className='addInput' onSubmit={handleForm}>
                <input type="text" placeholder='Company Name' className="inputs" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <input type="text" placeholder='Domain' className="inputs" value={domain} onChange={(e)=>{setDomain(e.target.value)}}></input>
                <input type="text" placeholder='Entities' className="inputs" value={entities} onChange={(e)=>{setEntities(e.target.value)}}></input>
                <input type="text" placeholder='Users' className="inputs" value={users} onChange={(e)=>{setUsers(e.target.value)}}></input>
                <button type="submit" id="submit-button">Add</button>
                <button onClick={()=>{setClicked(false);}} id="cancel-button">Cancel</button>
            </form>:<div></div>}
        </div>
    );
};

export default AddClients;