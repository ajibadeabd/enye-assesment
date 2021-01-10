 import response from '../utility/response.js'
 import CustomError from '../utility/customError.js'

export default   function(app){
    app.use((req, res, next) => {
        throw new CustomError("Invalid request", 400)
    })
    app.use((error, req, res, next) => {
       switch (true) {
            case error instanceof CustomError :
                res.status(error.status).json(response(false, error.message, null))
                break;
                case error.message==='getaddrinfo ENOTFOUND api.exchangeratesapi.io' :
                    res.status(400).json(response(false,'you have no internet connection', null))
                    break;
                // 
            default:
               res.status(500).json(response(false, error.message, null))
               break;
       }
    })
}