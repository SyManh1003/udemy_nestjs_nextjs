import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "name không được để trống" })
    name: string;

    @IsNotEmpty({ message: "email không được để trống" })
    @IsEmail({}, { message: 'Invalid email message' })
    email: string;

    @IsNotEmpty({ message: "password không được để trống" })
    password: string;


    phone: string;
    address: string;
    image: string;
}
