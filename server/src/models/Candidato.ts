import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from "typeorm";
import { uuid } from 'uuidv4'

@Entity('candidato')
export default class Candidato{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
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
