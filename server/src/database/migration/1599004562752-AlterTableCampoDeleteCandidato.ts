import {MigrationInterface, QueryRunner} from "typeorm";

export default class AlterTableCampoDeleteCandidato1599004562752 implements MigrationInterface {
    name = 'AlterTableCampoDeleteCandidato1599004562752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_candidato" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "email" varchar NOT NULL, "telefone" varchar NOT NULL, "convenio" varchar NOT NULL, "solucao" varchar NOT NULL, "deletedAt" datetime)`);
        await queryRunner.query(`INSERT INTO "temporary_candidato"("id", "nome", "cpf", "email", "telefone", "convenio", "solucao") SELECT "id", "nome", "cpf", "email", "telefone", "convenio", "solucao" FROM "candidato"`);
        await queryRunner.query(`DROP TABLE "candidato"`);
        await queryRunner.query(`ALTER TABLE "temporary_candidato" RENAME TO "candidato"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidato" RENAME TO "temporary_candidato"`);
        await queryRunner.query(`CREATE TABLE "candidato" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "email" varchar NOT NULL, "telefone" varchar NOT NULL, "convenio" varchar NOT NULL, "solucao" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "candidato"("id", "nome", "cpf", "email", "telefone", "convenio", "solucao") SELECT "id", "nome", "cpf", "email", "telefone", "convenio", "solucao" FROM "temporary_candidato"`);
        await queryRunner.query(`DROP TABLE "temporary_candidato"`);
    }

}
