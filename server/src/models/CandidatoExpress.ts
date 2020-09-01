import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { uuid } from 'uuidv4';

@Entity('candidato_express')
export default class CandidatoExpress {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
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

}
