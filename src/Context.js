import React, {useState, useEffect} from "react";
const Context= React.createContext()

function ContextProvider({children}){
    const [allPhotos, setAllPhotos]= useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(()=> {
        fetch(url).then(res=> res.json()).then(data => setAllPhotos(data))
        //Get the data from api
        //save the state
    }, [])
// ↓ this function will get an id which will be the id of our one image in our
//array of allPhotos in line 5
    function toggleFavorite(id){
        // creating an updated Array by mapping through allPhotos. This will look at every photo object
        // in that array. 
        const updatedArr = allPhotos.map(photo=>{
            if(photo.id === id){
                console.log(id)
                console.log(!photo.isFavorite)
                //↓ I am returning a brand new object. This object will have all the properties of the photo
                // except the isFavorite property will be the opposite of what it currently is
                return{
                    ...photo, isFavorite: !photo.isFavorite
                }
            }
            // If the if statement above isnt true as its mapping thorugh allPhtos
            //then we are simply just returning photo
            return photo
        })

        setAllPhotos(updatedArr)
    }

    function addToCart(newItem){
       setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))

    }

    function emptyCart(){
        setCartItems([])
    }



    //↓Anything that we want to get from Context to our components will happen through the value property
    // It doesn't just have to be STATE it can be any value including FUNCTIONS that we want to pass through
    // this is why I am passing my toggleFavorite function through my Provider and in Image.js component 
    // I can use Context to actually grab that value
    return(
    <Context.Provider value = {{allPhotos, toggleFavorite,cartItems, addToCart, removeFromCart, emptyCart}}>{children}</Context.Provider>
    )
}
export {ContextProvider, Context, }