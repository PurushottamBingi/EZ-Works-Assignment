import React from 'react';
import './Clients.css'
import { useState } from 'react';
import {FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
      };
    return (
        <>
        <div className='dropdown1'>
    <div>Riyadh, Kingdom of Saudi Arabia</div>
    <div>Lucas Films Private Limited</div>
    <div>LUCF01</div>
    <div>3 June 2022 - 5 June 2030</div>
    <div>External</div> 
    <div>
      <button onClick={handleOpen}>{open ?<div ><FaChevronUp ></FaChevronUp></div>:<div><FaChevronDown></FaChevronDown></div>}</button>
      {open ? <div className='main'>
        <div className='menu'>
           <div className='address'>
        <p>Address</p>
        <p className='address-details'>Line 1</p>
        <p className='address-details'>Line 2</p>
        <p className='address-details'>City,Country</p>
        <p className='address-details'>Zip Code</p>
        <p className='address-details'>Charge Code/PO Number</p>
        <p className='address-details'>Required</p>
        </div>

        <div className='registration'>
        <p>Company Registration Number</p>
        <p>UICE87F2T749WEY</p>
        <p>Company Registration Validity</p>
        <p>5 June 2025</p>
        <p>Duration Of File Storage</p>
        <p>90 Days</p>
        </div>

        <div className='tax-registration'>
        <p>TAX Registration Number</p>
        <p>AHR37T983Q7TRG8FG</p>
        <p>TRN Validity</p>
        <p>5 June 2025</p>
        <p>Currency</p>
        <p>US Dollar($)</p>
        </div>
        </div>

        <div className='menu-2'>
            <div>
                <p>MSLA</p>
                <p>20200916 EZ LucasFilms MOU signed by George.pdf</p>
            </div>
            <div>
                <p>VAT + WHT</p>
                <p>5% + 5%</p>
            </div>
        </div>
        <h3> Corparate Price as per MSLA </h3>
        <div className='MSLA-navbar'>
            <p>Service</p>
            <p>Units</p>
            <p>List Price</p>
            <p>Offered Price</p>
            <p>Discount</p>
        </div>
        <div className='services'>
            <p>Arabic Language Translation :EZ Assured</p>
            <p>Words</p>
            <p>0.1AED</p>
            <p>0.09AED</p>
            <p>10%(19%)</p>
        </div>
        <div className='services'>
            <p>Arabic Language Translation :EZ Assured</p>
            <p>Words</p>
            <p>0.1AED</p>
            <p>0.09AED</p>
            <p>10%(19%)</p>
        </div>
        <div className='services'>
            <p>Arabic Language Translation :EZ Assured</p>
            <p>Words</p>
            <p>0.1AED</p>
            <p>0.09AED</p>
            <p>10%(19%)</p>
        </div>
       

      </div> : <div>{null}</div>}
    </div>
    </div>
        </>
    );
};

export default Dropdown;