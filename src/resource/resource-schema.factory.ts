import {
  EntityProps as TypeOrmEntityProps,
  EntitySchemaFactory as TypeOrmEntitySchemaFactory,
  EntitySchemaProps,
} from '@appvise/typeorm';
import { UUID } from '@appvise/domain';
import { File, Resource, ResourceProps } from '@appvise/resource';
import { ResourceSchema } from './resource.schema';

export class ResourceSchemaFactory extends TypeOrmEntitySchemaFactory<
  Resource,
  ResourceSchema
> {
  protected toDomainProps(
    resourceSchema: ResourceSchema
  ): TypeOrmEntityProps<ResourceProps> {
    const id = new UUID(resourceSchema.id);

    const props: ResourceProps = {
      file: new File({
        bucket: resourceSchema.bucket,
        name: resourceSchema.name,
        mimeType: resourceSchema.mime_type,
        size: resourceSchema.size,
        url: resourceSchema.url,
        public: resourceSchema.public,
      }),
      type: resourceSchema.type,
    };

    return { id, props };
  }

  protected toSchemaProps(
    resource: Resource
  ): EntitySchemaProps<ResourceSchema> {
    const props = resource.getPropsCopy();

    return {
      bucket: props.file.bucket,
      name: props.file.name,
      mime_type: props.file.mimeType,
      size: props.file.size,
      url: props.file.url,
      public: props.file.public,
      type: props.type,
    };
  }
}
