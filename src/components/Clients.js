import React, { useState } from 'react';
import './Clients.css';
import reactLogo from "./images/EZlogo.jpg";
import DATA from './data.json';
import AddClients from './AddClients';
import Dropdown from './Dropdown';

const Clients = () => {

     const[data,setData]=useState(DATA);
    //  const [open, setOpen] = useState(false);
     const [search,setSearch]=useState("");

  // const handleOpen = () => {
  //   setOpen(!open);
  // };
//   const handlesort=() => {
//    setData(data.sort((a, b) => a.Entities - b.Entities ));
//   console.log(data);
// }


    return (
        <>
      <div className='Homepage'>
        <div className='section1'>
        <div className='sidebar'>
        <div ><img src={reactLogo} alt="react logo" className='logo'></img></div>
        <div className='icons'></div>
        <div className='icons'></div>
        <div className='icons'></div>
        </div>


          <div className='title'>
          <h2 className='heading'>Clients</h2>  
          <p id='text1'>Creation Time</p>
          <AddClients data={data} setData={setData}></AddClients>
          
          {/* <button onClick={handlesort}>sort</button> */}
          <input type="text" placeholder='Company,Entity,User Domain,Service ,Location' onChange={(e)=>{setSearch(e.target.value);}}></input>
          <p className='month'>April 2023</p>
          {/* </div> */}
          <div className='clients'>
            
            {data.filter((data)=>{
              if(search === ""){
                return data;
              }else if(data.Name.toLowerCase().includes(search.toLowerCase())){
               return data;
              }
              else if(data.Entities.toLowerCase().includes(search.toLowerCase())){
                return data;
              }
              else if(data.Domain.toLowerCase().includes(search.toLowerCase())){
                return data;
              }
              else if(data.Users.toLowerCase().includes(search.toLowerCase())){
                return data;
              }
             
            }).map( (data) =>{
           return(
            <div key={data.id} className="clients-data">
           <p id="name"> {data.Name} <span id="domain">{data.Domain}</span></p>
        
           <p id="entities">{data.Entities} <span id="users">{data.Users}</span></p>
        
        </div>
           )
     
      
           })} 
           
          </div>
        </div>
</div>

        <div className='section2'>
         <div className='profile'>Hii Purushottam</div>
         
         <div className='details'>

          <div className='heading-part'>
           <p>Lucas Films Private Limited </p>
           <p>Edit</p> 
          </div>

          <div className='company-details'>
            <div className='company-name'>
             <div><p>Company Code</p><p>LUCF</p></div>
             <div><p>Company Logo</p><p>Unavailable</p></div> 
            </div>

            <div className='company-emails'>
            Domains
            @lucasfilms.com
            @lucasstarwars.com
            @starwars.com
            + 5 Others
            </div>
          </div>

          <div className='navbar'>
          <div className='routes'>ENTITIES</div> 
          <div className='routes'>INVOICE CODES</div> 
          <div className='routes'>USERS</div> 
          </div> 

         </div>

<div className='Entities'>
  <div className='Entities-heading'>4 Entities</div>

  <div className='Entities-navbar'>
    <div>Billing Location</div>
    <div>Entity Name</div>
    <div>Entity Code</div>
    <div>MSLA Valid through</div>
    <div>File Sharing</div> 
  </div>

  
  <Dropdown></Dropdown>
  <Dropdown></Dropdown>
  <Dropdown></Dropdown>
  <Dropdown></Dropdown>

  


</div>
        </div>



        </div>
        </>
    );
};

export default Clients;