import { EntityBaseSchema } from '@appvise/typeorm';
import { Column, Entity } from 'typeorm';
import { MimeType, ResourceType } from '@appvise/resource';

@Entity('resource')
export class ResourceSchema extends EntityBaseSchema {
  @Column({ type: 'enum', enum: ResourceType })
  readonly type!: ResourceType;

  @Column()
  readonly bucket!: string;

  @Column()
  readonly name!: string;

  @Column({ type: 'enum', enum: MimeType })
  readonly mime_type!: MimeType;

  @Column()
  readonly size!: number;

  @Column({ nullable: true })
  readonly url?: string;

  @Column()
  readonly public!: boolean;

  @Column({ nullable: true })
  readonly parent_id?: string;

  @Column({ nullable: true })
  readonly parent_type?: string;

  @Column()
  readonly creator_id!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  readonly client_created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  readonly client_updated_at!: Date;
}
