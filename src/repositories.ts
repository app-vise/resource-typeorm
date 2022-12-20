import { TypeormStampedRepositoryProvider } from '@appvise/typeorm';
import { Resource } from '@appvise/resource';
import { ResourceSchema, ResourceSchemaFactory } from './resource';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

// Factories
const resourceSchemaFactory = new ResourceSchemaFactory(
  Resource,
  ResourceSchema
);

export const ResourceRepositories: Provider[] = [
  // Resource
  TypeormStampedRepositoryProvider.provide(
    'ResourceReadRepository',
    ResourceSchema,
    resourceSchemaFactory
  ),
  TypeormStampedRepositoryProvider.provide(
    'ResourceWriteRepository',
    ResourceSchema,
    resourceSchemaFactory
  ),
];
