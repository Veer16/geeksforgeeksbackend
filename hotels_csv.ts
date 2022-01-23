import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// import * from "graphql"
@Entity()
@ObjectType()
export default class hotels_csv extends BaseEntity {
  @Column()
  @Field(() => String)
  public name: string;
  @Column()
  @Field(() => String)
  public cuisines: string;
  @Column()
  @Field(() => String)
  public featured_image: string;
  @PrimaryGeneratedColumn()
  @Field(() => String)
  public id: number;
}
