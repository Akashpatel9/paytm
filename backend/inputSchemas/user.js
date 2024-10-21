import { z } from "zod"

export const signup = z.object({
    username: z.string({ message: "username required" }).min(4, { message: "username must have atleast 4 chracters" }).max(30, { message: "username have maximum 30 chracters" }),
    password: z.string({ message: "password required" }).min(5, { message: "password must have atleast 5 chracters" }).max(30, { message: "password have maximum 30 chracters" }),
    firstName: z.string({ message: "firstName required" }).min(1, { message: "firstName must have atleast 1 chracters" }).max(30, { message: "firstName have maximum 30 chracters" }),
    lastName: z.string({ message: "lastName required" }).min(1, { message: "lastName must have atleast 1 chracters" }).max(30, { message: "lastName have maximum 30 chracters" }),
})


export const signin = z.object({
    username: z.string({ message: "username required" }).min(4, { message: "username must have atleast 4 chracters" }).max(30, { message: "username have maximum 30 chracters" }),
    password: z.string({ message: "password required" }).min(5, { message: "password must have atleast 5 chracters" }).max(30, { message: "password have maximum 30 chracters" }),
})



export const resetDetails = z.object({
    firstName: z.string({ message: "firstName required" }).min(1, { message: "firstName must have atleast 1 chracters" }).max(30, { message: "firstName have maximum 30 chracters" }),
    lastName: z.string({ message: "lastName required" }).min(1, { message: "lastName must have atleast 1 chracters" }).max(30, { message: "lastName have maximum 30 chracters" }),
    password: z.string({ message: "password required" }).min(5, { message: "password must have atleast 5 chracters" }).max(30, { message: "password have maximum 30 chracters" }),
})
