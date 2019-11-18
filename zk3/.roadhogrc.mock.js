import Data from './mock/data'
export default {
    'GET /api/main/addDist':(req,res)=>{
        console.log(req)
        res.send(Data)
    }
};
