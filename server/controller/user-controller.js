import User from "../model/user-schema.js";

export const userSignup = async (request,response) =>{
    //backend api
    try{
        const exist = await User.findOne({phone: request.body.phone})
        if(exist){
            return response.status(401).json({message: 'username already exist'});
        }
        const user=request.body;
        const newuser= new User(user);
        await newuser.save();
        response.status(200).json({message: user});
    }  catch(error)
    {
        response.status(500).json({message: error.message});
    }
}

export const userLogin = async (request,response) => {
    //backend api
    try{
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }
    }catch(error){
        response.json('Error: ', error.message);  
        //500:internal server error
    }
}