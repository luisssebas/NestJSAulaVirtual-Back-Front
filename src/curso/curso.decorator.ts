import { createRouteParamDecorator } from "@nestjs/common";

export const Curso = createRouteParamDecorator((data, req) => {
    return data ? req.Curso[data]: req.curso;
});