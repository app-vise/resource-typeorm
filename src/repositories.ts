import { TypeormRepositoryProvider } from '@appvise/typeorm';
import {
  Resource,
  ResourceReadRepository,
  ResourceWriteRepository,
} from '@appvise/resource';
import { ResourceSchema, ResourceSchemaFactory } from './resource';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

// Factories
const resourceSchemaFactory = new ResourceSchemaFactory(
  Resource,
  ResourceSchema
);

const providers: Provider[] = [
  // Resource
  TypeormRepositoryProvider.provide(
    ResourceReadRepository,
    ResourceSchema,
    resourceSchemaFactory
  ),
  TypeormRepositoryProvider.provide(
    ResourceWriteRepository,
    ResourceSchema,
    resourceSchemaFactory
  ),
];

export default providers;
