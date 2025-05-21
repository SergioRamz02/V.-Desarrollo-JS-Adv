// Manejo de Formularios con Zod y JavaScript
const z = require("zod");

const emailSchema = z.string().email();
const passwordSchema = z.string().min(8).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
const phoneNumberSchema = z.number().min(10);
const objectSchema = z.object({
    username: z.string(),
    age: z.number(),
})

console.log(emailSchema.parse("arts@gmail.com"));
console.log(passwordSchema.parse("Dalp1234$"));
console.log(phoneNumberSchema.parse(5510678934));
console.log(objectSchema.parse({
    username: "Sergio",
    age: 27
}));

