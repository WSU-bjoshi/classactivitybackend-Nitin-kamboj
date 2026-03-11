export function validateBody(requireFields = []){
    return (req, res, next)=>{
        const missing = requireFields.filter(
            (f)=>{
                req.body?.[f] === undefined || req.body?.[f] === ""
            }
        );

        if(missing.length){
            return res.status(400).json({error: `Missing fields ${missing.join(",")}`})
        }
    }
}