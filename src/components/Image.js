import React, {useState, useContext} from "react";
import PropTypes from "prop-types"
import {Context} from "../Context"

function Image({className, img}){
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context);
    {/* ↓ what is happenening below with && is that if hovered is true 
    then render <i> if its false then it wont render anything*/}
    //↓ OnClick event listener is receiving the event as a parameter not the id therefore I put an
    //anynomous function and that anynomous function will call toggleFavorite is going to receive this
    //images.id property. The img is coming from props and is an object that has an id property
    
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    function cartIcon(){
        const alreadyInCart = cartItems.some(item=> item.id == img.id)
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        }

        else if (hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
        //display filled shopping cart if the item is already in the cart
     // return <i className="ri-shopping-cart-fill cart"></i>
     // else if the image is being hovered
     // return <i className="ri-add-circle-line cart" onClick={() => addT
    }

    
    return(
        <div className = {`${className} image-container`}
        onMouseEnter={()=> setHovered(true)}
        onMouseLeave={()=> setHovered(false)}>
            <img src={img.url} className = "image-grid"/>
            {heartIcon()}
            {cartIcon()}

        </div>
    )
}
Image.propTypes ={
    className: PropTypes.string,
    img:PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })

}

export default Image