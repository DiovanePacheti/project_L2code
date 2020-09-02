import {Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn} from "typeorm";
import { uuid } from 'uuidv4';
import { IsEmail, MaxLength, MinLength } from 'class-validator'

@Entity('candidato_express')
export default class CandidatoExpress {

    @PrimaryGeneratedColumn('uuid')
    id: string;

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
    curso: string;

    @Column({
        type: 'date',
        nullable: true
      })
    previsaoFormatura:Date;

    @Column()
    valorContratado:number;

    @Column()
    parcelasCobertas:number;

    @Column()
    condicaoDaRestituicao:number;

    @Column({ nullable: false, type: 'simple-json'  })
    validade:Date[];

    @Column({
        type: 'date',
        nullable: true
      })
    inicioDaRestituicao:Date;

    @Column()
    convenio:string;

    @Column()
    solucao:string;

    @DeleteDateColumn()
    deletedAt?: Date;

}
