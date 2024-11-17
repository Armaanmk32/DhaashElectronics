import jwt from "jsonwebtoken"


// admin login 

const adminLogin = async (req, res)=>{

    try {
        
        const {name, password} = req.body

        if(name === process.env.ADMIN_NAME && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(name+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid name or password"})
        }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
 

}

export {adminLogin}