import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from "typeorm";
import { uuid } from 'uuidv4'
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@Entity('candidato')
export default class Candidato{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    @MaxLength(45, {message:"O nome pode ter no maximo 45 caracteres"})
    @MinLength(2, {message: "O nome deve ter no minimo 2 caracteres"})
    nome: string;

    @Column()
    @MaxLength(11)
    cpf: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    telefone: string;

    @Column()
    convenio:string;

    @Column()
    solucao:string;

    @DeleteDateColumn()
    deletedAt?: Date;

}
