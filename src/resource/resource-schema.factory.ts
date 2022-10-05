import {
  EntityProps as TypeOrmEntityProps,
  EntitySchemaFactory as TypeOrmEntitySchemaFactory,
  EntitySchemaProps,
} from '@appvise/typeorm';
import { DateVO, UUID } from '@appvise/domain';
import {
  File,
  Resource,
  ResourceParentType,
  ResourceProps,
} from '@appvise/resource';
import { ResourceSchema } from './resource.schema';

export class ResourceSchemaFactory extends TypeOrmEntitySchemaFactory<
  Resource,
  ResourceSchema
> {
  protected toDomainProps(
    entitySchema: ResourceSchema
  ): TypeOrmEntityProps<ResourceProps> {
    const id = new UUID(entitySchema.id);

    const props: ResourceProps = {
      file: new File({
        bucket: entitySchema.bucket,
        name: entitySchema.name,
        mimeType: entitySchema.mime_type,
        size: entitySchema.size,
        url: entitySchema.url,
        public: entitySchema.public,
      }),
      type: entitySchema.type,
      parentId: entitySchema.parent_id
        ? new UUID(entitySchema.parent_id)
        : undefined,
      parentType: entitySchema.parent_type as ResourceParentType,
      creatorId: new UUID(entitySchema.creator_id),
      clientCreatedAt: new DateVO(entitySchema.client_created_at),
      clientUpdatedAt: new DateVO(entitySchema.client_updated_at),
    };

    return { id, props };
  }

  protected toSchemaProps(entity: Resource): EntitySchemaProps<ResourceSchema> {
    const props = entity.getPropsCopy();

    return {
      bucket: props.file.bucket,
      name: props.file.name,
      mime_type: props.file.mimeType,
      size: props.file.size,
      url: props.file.url,
      public: props.file.public,
      type: props.type,
      parent_id: props.parentId ? props.parentId.value : undefined,
      parent_type: props.parentType,
      creator_id: props.creatorId.value,
      client_created_at: props.clientCreatedAt.value,
      client_updated_at: props.clientUpdatedAt.value,
    };
  }
}
