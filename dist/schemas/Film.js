import joi from "joi";
export var filmSchema = joi.object({
    name: joi.string().min(2).required(),
    plataforma: joi.string().required(),
    status: joi.boolean().default(false),
    genero: joi.array().items(joi.string()),
});
