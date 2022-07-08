const Menu = require("../../models/menu");
const  homeController=()=>
{
    return {
        index(req,res){
            Menu.find({},function(err,pizzas)
            {
                console.log(pizzas);
                return res.render("home",{pizzas:pizzas});
            });
            
        }
    }
};
module.exports= homeController;