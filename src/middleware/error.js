export default function errorHandler(err, req, res, next){
    console.log("error");
    res.status(500).json({error: "internal error"});
}