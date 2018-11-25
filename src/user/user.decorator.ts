import { createRouteParamDecorator } from "@nestjs/common";

export const User = createRouteParamDecorator((data, req) => {
    return data ? req.User[data]: req.user;
});