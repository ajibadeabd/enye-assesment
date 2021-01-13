import customError from '../utility/customError.js'
import axios from 'axios'



class userService {
    async rate(req,res){  
        // get the api data
        let {data} =await axios.get('https://api.exchangeratesapi.io/latest') 

//     value of EUR is 1 because EUR will be one since it is the default base .
        data.rates["EUR"]=1
        console.log(data)
        let base=req.query.base 
        let currency=req.query.currency
        if(!base ||!currency){
                throw new customError('please include the currency and the base variable',400)
        }
            if(data.rates[base]==undefined){
                throw new customError('you have entered an inavlid base variable ',400)
            }
        let eachCurrency=req.query.currency.split(",")

            let error= []
            eachCurrency.forEach(each => {
            console.log(data.rates[each])
            if(!data.rates[each]){
                     error.push (`${each} is not among rates properties ` )
            }
            });
            if(error.length>0){
                throw new customError(error,400)
            }
        //initialize result as empty object
        let result= {}
        //return base currency
        result.base=base
        // return date of conversion
        result.date=data.date
        // initailize the result rate   as empty object
        result.rates={}
           // iterate through the currency list sent down from the client side(req.query.currency)
           eachCurrency.forEach(curr => {
       let oneBase =(data.rates["EUR"] / data.rates[base] )* data.rates[curr]
        result.rates[curr]=oneBase
        
    });
        // return the rate result
        return (result)
    }

}

export default new userService()
 