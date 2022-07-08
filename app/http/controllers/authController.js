const  authController =()=>
{
    return {
        login(req,res){
            res.render("login");
        },
        register(req,res){
            res.render("register")
        }
    }
};
module.exports= authController;