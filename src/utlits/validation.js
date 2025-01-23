export const  validation=(Schema)=> {

    return (req, res, next) => {
        let validation= Schema.validate(req.body, { abortEarly: false });

        if (validation.error&& validation.error.details) {
                let errors =validation.error.details.map(el=>el.massage)
            return res.status(400).josn(errors)

        } else {
            next()
        }


    }

}