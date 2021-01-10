import rateService from   "../services/rateService.js";

class rateCntroller{
    async rate(req,res){
        let data = await rateService.rate(req,res);
       res.status(200).json(data) 
    }

}
export default new rateCntroller()