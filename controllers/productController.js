
// function for add product 

const addProduct = async (req, res) => {
    
    try {
        
        const { name, description, price, category } = req.body
        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name, description, price, category );
        console.log(image1, image2, image3, image4 );
        
        res.json({})

    } catch (error) {
        res.json({success:files,message:error.message})
    }



}

// function for list products 
const listProducts = async (req, res) => {
    
}

// function remove products
const removeProduct = async (req, res) => {
    
}


// functoin for single product info
const singleProduct = async (req, res) => {
    
}

export {listProducts, addProduct, removeProduct, singleProduct}
