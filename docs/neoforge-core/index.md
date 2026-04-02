# Neoforge Core

This category contains 49 class(es).

## neoforge.mixins

| Class | Type | Description |
|-------|------|-------------|
| [`BlockEntityTypeAccessor`](BlockEntityTypeAccessor.md) | interface |  |
| [`MappedRegistryAccessor`](MappedRegistryAccessor.md) | interface |  |

## neoforge.internal

| Class | Type | Description |
|-------|------|-------------|
| [`BrandingControl`](BrandingControl.md) | class |  |
| [`NeoForgeBindings`](NeoForgeBindings.md) | class |  |
| [`NeoForgeProxy`](NeoForgeProxy.md) | class | Allows common code to call client-only methods, through NeoForgeClientProxy. |
| [`NeoForgeVersionCheck`](NeoForgeVersionCheck.md) | class |  |
| [`NonExhaustiveEnum`](NonExhaustiveEnum.md) | @interface | Signifies that an enum is not exhaustive, and additional values may be added while NeoForge is stabl |
| [`RegistrationEvents`](RegistrationEvents.md) | class |  |

## versions.neoforge

| Class | Type | Description |
|-------|------|-------------|
| [`NeoForgeVersion`](NeoForgeVersion.md) | class |  |

## neoforge.junit

| Class | Type | Description |
|-------|------|-------------|
| [`JUnitMain`](JUnitMain.md) | class |  |

## neoforge.logging

| Class | Type | Description |
|-------|------|-------------|
| [`CrashReportExtender`](CrashReportExtender.md) | class |  |
| [`PacketDump`](PacketDump.md) | class |  |
| [`ThreadInfoUtil`](ThreadInfoUtil.md) | class |  |

## forge.snapshots

| Class | Type | Description |
|-------|------|-------------|
| [`ForgeSnapshotsMod`](ForgeSnapshotsMod.md) | class |  |
| [`ForgeSnapshotsModClient`](ForgeSnapshotsModClient.md) | class |  |

## model.data

| Class | Type | Description |
|-------|------|-------------|
| [`ModelDataManager`](ModelDataManager.md) | class | A manager for the lifecycle of all the ModelData instances in a Level. |
| [`ModelProperty`](ModelProperty.md) | class | A property to be used in ModelData. |

## neoforge.transfer

| Class | Type | Description |
|-------|------|-------------|
| [`CombinedResourceHandler`](CombinedResourceHandler.md) | class | A resource handler that wraps multiple resource handlers, concatenating all their indices into one l |
| [`DelegatingResourceHandler`](DelegatingResourceHandler.md) | class | A resource handler that delegates all calls to another handler. |
| [`IndexModifier`](IndexModifier.md) | interface | Represents a function to directly mutate the resource and amount at a specific index of a ResourceHa |
| [`InfiniteResourceHandler`](InfiniteResourceHandler.md) | class | A ResourceHandler that allows insertion and extraction of an unlimited amount of a specified resourc |
| [`RangedResourceHandler`](RangedResourceHandler.md) | class | A resource handler that wraps a range of indices of another handler. |
| [`ResourceHandler`](ResourceHandler.md) | interface | A generic handler for the transfer and storage of Resource resources whether it be inserting, extrac |
| [`TransferPreconditions`](TransferPreconditions.md) | class | Precondition checks useful for implementing ResourceHandler. |
| [`VoidingResourceHandler`](VoidingResourceHandler.md) | class | A resource handler that destroys any resources inserted into it. |

## transfer.access

| Class | Type | Description |
|-------|------|-------------|
| [`HandlerItemAccess`](HandlerItemAccess.md) | class |  |
| [`ItemAccess`](ItemAccess.md) | interface | Provides access to an item storage location, like a slot in an inventory or a player's hand,
such th |

## transfer.energy

| Class | Type | Description |
|-------|------|-------------|
| [`DelegatingEnergyHandler`](DelegatingEnergyHandler.md) | class | An energy handler that delegates all calls to another handler. |
| [`EnergyHandler`](EnergyHandler.md) | interface | A handler for the transfer and storage of energy. |
| [`InfiniteEnergyHandler`](InfiniteEnergyHandler.md) | class | An EnergyHandler that allows extraction of an unlimited amount of energy. |
| [`ItemAccessEnergyHandler`](ItemAccessEnergyHandler.md) | class | A simple implementation of an EnergyHandler backed by an ItemAccess. |
| [`LimitingEnergyHandler`](LimitingEnergyHandler.md) | class | An energy handler that will apply additional per-insert and per-extract limits to another handler. |
| [`SimpleEnergyHandler`](SimpleEnergyHandler.md) | class | A simple implementation of EnergyHandler, that can store any level of energy up to a given capacity, |
| [`VoidingEnergyHandler`](VoidingEnergyHandler.md) | class | An energy handler that destroys any energy inserted into it. |

## transfer.fluid

| Class | Type | Description |
|-------|------|-------------|
| [`FluidStacksResourceHandler`](FluidStacksResourceHandler.md) | class | Base implementation of a ResourceHandler<FluidResource> backed by a list of FluidStacks. |
| [`ItemAccessFluidHandler`](ItemAccessFluidHandler.md) | class | Base implementation of a simple fluid ResourceHandler backed by an ItemAccess. |

## transfer.item

| Class | Type | Description |
|-------|------|-------------|
| [`BundleItemHandler`](BundleItemHandler.md) | class | Item ResourceHandler backed by an ItemAccess for use with bundle-like items. |
| [`ComposterWrapper`](ComposterWrapper.md) | class | ResourceHandler<ItemResource> implementation for the composter block. |
| [`ItemAccessItemHandler`](ItemAccessItemHandler.md) | class | Base implementation of an item ResourceHandler backed by an ItemAccess. |
| [`ItemStacksResourceHandler`](ItemStacksResourceHandler.md) | class | Base implementation of a ResourceHandler<ItemResource> backed by a list of ItemStacks. |
| [`LivingEntityEquipmentWrapper`](LivingEntityEquipmentWrapper.md) | class | Exposes the armor or hands inventory of an LivingEntity as a ResourceHandler<ItemResource>
using Liv |
| [`ResourceHandlerSlot`](ResourceHandlerSlot.md) | class | Base implementation for a Slot backed by a ResourceHandler<ItemResource>. |
| [`TransactionalRandom`](TransactionalRandom.md) | class | A deterministic random source whose internal state is transactional,
ensuring determinism across tra |
| [`VanillaContainerWrapper`](VanillaContainerWrapper.md) | class | An implementation of ResourceHandler<ItemResource> for vanilla's Container. |
| [`VanillaInventoryCodeHooks`](VanillaInventoryCodeHooks.md) | class |  |
| [`WorldlyContainerWrapper`](WorldlyContainerWrapper.md) | class | An implementation of ResourceHandler<ItemResource> for vanilla's WorldlyContainer . |

## transfer.resource

| Class | Type | Description |
|-------|------|-------------|
| [`DataComponentHolderResource`](DataComponentHolderResource.md) | interface | Helper interface for resources backed by a registry entry and which also hold data component values. |
| [`RegisteredResource`](RegisteredResource.md) | interface | Helper interface for resources backed by a #value registry entry. |
| [`Resource`](Resource.md) | interface | Most general form of a resource that can be quantified and moved around. |
