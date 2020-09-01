import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCandidatoExpress1598942501957 implements MigrationInterface {
    name = 'CreateCandidatoExpress1598942501957'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "candidato_express" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "email" varchar NOT NULL, "telefone" varchar NOT NULL, "curso" varchar NOT NULL, "previsaoFormatura" date, "valorContratado" integer NOT NULL, "parcelasCobertas" integer NOT NULL, "condicaoDaRestituicao" integer NOT NULL, "validade" text NOT NULL, "inicioDaRestituicao" date, "convenio" varchar NOT NULL, "solucao" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "candidato_express"`);
    }

}
