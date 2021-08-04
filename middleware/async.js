// To call functions in try and catch block
// To avoid writing try and catch for different controllers
const asyncWrapper =(fun)=>{

    return async (req,res,next)=>{
        try{
            await fun(req,res,next)
        }
        catch(error){
            next(error)
        }
    }  
}

module.exports= asyncWrapper