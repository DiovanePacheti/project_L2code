import {MigrationInterface, QueryRunner} from "typeorm";

export default class AlterTableCampoDeleteCandidatoExpress1599004249024 implements MigrationInterface {
    name = 'AlterTableCampoDeleteCandidatoExpress1599004249024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_candidato_express" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "email" varchar NOT NULL, "telefone" varchar NOT NULL, "curso" varchar NOT NULL, "previsaoFormatura" date, "valorContratado" integer NOT NULL, "parcelasCobertas" integer NOT NULL, "condicaoDaRestituicao" integer NOT NULL, "validade" text NOT NULL, "inicioDaRestituicao" date, "convenio" varchar NOT NULL, "solucao" varchar NOT NULL, "deletedAt" datetime)`);
        await queryRunner.query(`INSERT INTO "temporary_candidato_express"("id", "nome", "cpf", "email", "telefone", "curso", "previsaoFormatura", "valorContratado", "parcelasCobertas", "condicaoDaRestituicao", "validade", "inicioDaRestituicao", "convenio", "solucao") SELECT "id", "nome", "cpf", "email", "telefone", "curso", "previsaoFormatura", "valorContratado", "parcelasCobertas", "condicaoDaRestituicao", "validade", "inicioDaRestituicao", "convenio", "solucao" FROM "candidato_express"`);
        await queryRunner.query(`DROP TABLE "candidato_express"`);
        await queryRunner.query(`ALTER TABLE "temporary_candidato_express" RENAME TO "candidato_express"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidato_express" RENAME TO "temporary_candidato_express"`);
        await queryRunner.query(`CREATE TABLE "candidato_express" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "email" varchar NOT NULL, "telefone" varchar NOT NULL, "curso" varchar NOT NULL, "previsaoFormatura" date, "valorContratado" integer NOT NULL, "parcelasCobertas" integer NOT NULL, "condicaoDaRestituicao" integer NOT NULL, "validade" text NOT NULL, "inicioDaRestituicao" date, "convenio" varchar NOT NULL, "solucao" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "candidato_express"("id", "nome", "cpf", "email", "telefone", "curso", "previsaoFormatura", "valorContratado", "parcelasCobertas", "condicaoDaRestituicao", "validade", "inicioDaRestituicao", "convenio", "solucao") SELECT "id", "nome", "cpf", "email", "telefone", "curso", "previsaoFormatura", "valorContratado", "parcelasCobertas", "condicaoDaRestituicao", "validade", "inicioDaRestituicao", "convenio", "solucao" FROM "temporary_candidato_express"`);
        await queryRunner.query(`DROP TABLE "temporary_candidato_express"`);
    }

}
