# IMenuProviderExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Extension type for the `net.minecraft.world.MenuProvider` interface.

## Methods

### shouldTriggerClientSideContainerClosingOnOpen

```java
default boolean shouldTriggerClientSideContainerClosingOnOpen()
```

**Returns:** `boolean`

### writeClientSideData

```java
default void writeClientSideData(AbstractContainerMenu menu, RegistryFriendlyByteBuf buffer)
```

**Parameters:**

- `menu` (`AbstractContainerMenu`)
- `buffer` (`RegistryFriendlyByteBuf`)
