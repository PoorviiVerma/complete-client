import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import {FaHeart} from "react-icons/fa"
import {AuthContext} from "../contexts/AuthProvider";
import Swal from 'sweetalert2'


const Cards = ({item}) => {
    const {name, image, price, _id} = item;
    const [isHeartFillted, setIsHeartFillted] = useState(false);
    const {user} = useContext(AuthContext)
    // console.log(user);
    



    // add to cart button
    const handleAddtoCart = (item) => {
        // console.log("btn is clicked", item);
        if(user && user?.email){
            const cartItem = {menuItemId: _id, name, quantity:1, image, price, email: user.email };
            // console.log(cartItem);
            // fetch('http://localhost:6005/carts', {
                // method: "POST",
                // headers: {
                //     'content-type': "application/json"
                // },
            //  body: JSON.stringify(cartItem)
            // })
            // .then((res) => res.json())
            // .then(data) => {
            //     console.log(data);
            if(DataTransfer.insertId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            // });
            
        } else{}
        
    };



    const handleHeartClick = () => {
        setIsHeartFillted(!isHeartFillted)
    }
  return (
    
        
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <div className= {`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFillted ? "text-rose-500" : "text-white"} `} onClick={handleHeartClick}>
                <FaHeart className="h-5 w-5 cursor-pointer"/>
            </div>
            <Link to= {`menu/${item._id}`}>
                <figure>
                    <img src={item.image} alt=""className='hover:scale-105 transition-all duration-200 md:h-72'/>
                </figure>
            </Link>
            <div className="card-body">
                    <Link to= {`menu/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>
                    <p>A FoodStruck Original</p>
                    <div className="card-actions justify-between items-center mt-2">
                        <h5 className='font-semibold'><span className='text-sm text-red'>₹</span> {item.price}</h5>
                        <button className="btn bg-green text-white" onClick={() => handleAddtoCart (item)}>Add to Cart</button>
                    </div>
            
            </div>
   
    </div>
        
    
  );
};

export default Cards