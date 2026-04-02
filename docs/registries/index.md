# Registries

This category contains 44 class(es).

## core.registries

| Class | Type | Description |
|-------|------|-------------|
| [`BuiltInRegistries`](BuiltInRegistries.md) | class |  |
| [`Registries`](Registries.md) | class |  |

## neoforge.registries

| Class | Type | Description |
|-------|------|-------------|
| [`Blocks`](Blocks.md) | class |  |
| [`ClientRegistryManager`](ClientRegistryManager.md) | class |  |
| [`DataComponents`](DataComponents.md) | class |  |
| [`DataMapLoader`](DataMapLoader.md) | class |  |
| [`DeferredBlock`](DeferredBlock.md) | class | Special DeferredHolder for Block Blocks that implements ItemLike. |
| [`DeferredHolder`](DeferredHolder.md) | class | A Deferred Holder is a Holder that is constructed with only a ResourceKey. |
| [`DeferredItem`](DeferredItem.md) | class | Special DeferredHolder for Item Items that implements ItemLike. |
| [`DeferredRegister`](DeferredRegister.md) | class | A helper class to aid in registering objects to modded and BuiltInRegistries vanilla registries and
 |
| [`GameData`](GameData.md) | class |  |
| [`IdMappingEvent`](IdMappingEvent.md) | class | Called whenever the ID mapping might have changed. |
| [`IdRemapping`](IdRemapping.md) | record |  |
| [`IRegistryExtension`](IRegistryExtension.md) | interface | An extension for Registry, adding some additional functionality to vanilla registries, such as
callb |
| [`Items`](Items.md) | class |  |
| [`Keys`](Keys.md) | class |  |
| [`ModifyRegistriesEvent`](ModifyRegistriesEvent.md) | class | Fired during startup after builtin registries are constructed. |
| [`ModRemapping`](ModRemapping.md) | class |  |
| [`NeoForgeRegistries`](NeoForgeRegistries.md) | class | A class that exposes static references to NeoForge registries. |
| [`NeoForgeRegistriesSetup`](NeoForgeRegistriesSetup.md) | class |  |
| [`NewRegistryEvent`](NewRegistryEvent.md) | class | Fired when new registries can be constructed and registered. |
| [`RegisterEvent`](RegisterEvent.md) | class | Fired for each registry when it is ready to have modded objects registered. |
| [`RegisterHelper`](RegisterHelper.md) | interface |  |
| [`RegistryBuilder`](RegistryBuilder.md) | class |  |
| [`RegistryManager`](RegistryManager.md) | class |  |
| [`RegistrySnapshot`](RegistrySnapshot.md) | class |  |
| [`SnapshotType`](SnapshotType.md) | enum |  |

## datamaps.builtin

| Class | Type | Description |
|-------|------|-------------|
| [`NeoForgeDataMaps`](NeoForgeDataMaps.md) | class | Holds all DataMapType data maps provided by NeoForge. |

## registries.datamaps

| Class | Type | Description |
|-------|------|-------------|
| [`DataMapsUpdatedEvent`](DataMapsUpdatedEvent.md) | class | Event fired on the net.neoforged.neoforge.common.NeoForge#EVENT_BUS game event bus when the data map |
| [`DataMapValueMerger`](DataMapValueMerger.md) | interface | An interface used to merge two conflicting registry data map values attached to the same object. |
| [`DataMapValueRemover`](DataMapValueRemover.md) | interface | An interface used to remove values from registry data maps. |
| [`IWithData`](IWithData.md) | interface | Represents a registry object (usually a net.minecraft.core.Holder) that has data maps. |
| [`RegisterDataMapTypesEvent`](RegisterDataMapTypesEvent.md) | class | Event fired on the mod event bus, in order to register DataMapType data map types. |
| [`UpdateCause`](UpdateCause.md) | enum |  |

## registries.holdersets

| Class | Type | Description |
|-------|------|-------------|
| [`AndHolderSet`](AndHolderSet.md) | class | <p>Holderset that represents an intersection of other holdersets. |
| [`AnyHolderSet`](AnyHolderSet.md) | record | <p>Holderset that represents all elements of a registry. |
| [`HolderSetType`](HolderSetType.md) | interface |  |
| [`ICustomHolderSet`](ICustomHolderSet.md) | interface | Interface for mods' custom holderset types |
| [`NotHolderSet`](NotHolderSet.md) | class |  |
| [`OrHolderSet`](OrHolderSet.md) | class | <p>Holderset that represents a union of other holdersets. |
| [`Type`](Type.md) | class |  |
| [`Type`](Type.md) | class |  |
| [`Type`](Type.md) | class |  |
| [`Type`](Type.md) | class |  |
