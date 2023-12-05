import { Joi, Segments, celebrate } from "celebrate";

export const validateSignUp = celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().min(4).max(24).required(),
    password: Joi.string().min(8).max(32).required(),
    confirmPassword: Joi.any().valid(Joi.ref("password")),
  }),
});

export const validateSignIn = celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});
