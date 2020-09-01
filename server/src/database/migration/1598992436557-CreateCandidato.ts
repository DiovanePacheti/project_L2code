import {MigrationInterface, QueryRunner} from "typeorm";

export default class CreateCandidato1598992436557 implements MigrationInterface {
    name = 'CreateCandidato1598992436557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "candidato" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "email" varchar NOT NULL, "telefone" varchar NOT NULL, "convenio" varchar NOT NULL, "solucao" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "candidato"`);
    }

}
