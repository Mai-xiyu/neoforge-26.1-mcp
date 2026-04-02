# RegistrySynchronization

**Package:** `net.minecraft.core`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NETWORKABLE_REGISTRIES` | `Set<ResourceKey<? extends Registry<?>>>` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, RegistrySynchronization.PackedRegistryEntry>` |  |

## Methods

### packRegistries

```java
public static void packRegistries(DynamicOps<Tag> p_321796_, RegistryAccess p_321733_, Set<KnownPack> p_326143_, BiConsumer<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>> p_321539_)
```

**Parameters:**

- `p_321796_` (`DynamicOps<Tag>`)
- `p_321733_` (`RegistryAccess`)
- `p_326143_` (`Set<KnownPack>`)
- `p_321539_` (`BiConsumer<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>>`)

**Returns:** `public static void`

### packRegistry

```java
<T> private static <T> void packRegistry(DynamicOps<Tag> p_321608_, RegistryDataLoader.RegistryData<T> p_321701_, RegistryAccess p_321717_, Set<KnownPack> p_326432_, BiConsumer<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>> p_321724_)
```

**Parameters:**

- `p_321608_` (`DynamicOps<Tag>`)
- `p_321701_` (`RegistryDataLoader.RegistryData<T>`)
- `p_321717_` (`RegistryAccess`)
- `p_326432_` (`Set<KnownPack>`)
- `p_321724_` (`BiConsumer<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>>`)

**Returns:** `private static <T> void`

### ownedNetworkableRegistries

```java
private static Stream<RegistryAccess.RegistryEntry<?>> ownedNetworkableRegistries(RegistryAccess p_251842_)
```

**Parameters:**

- `p_251842_` (`RegistryAccess`)

**Returns:** `private static Stream<RegistryAccess.RegistryEntry<?>>`

### networkedRegistries

```java
public static Stream<RegistryAccess.RegistryEntry<?>> networkedRegistries(LayeredRegistryAccess<RegistryLayer> p_259290_)
```

**Parameters:**

- `p_259290_` (`LayeredRegistryAccess<RegistryLayer>`)

**Returns:** `public static Stream<RegistryAccess.RegistryEntry<?>>`

### networkSafeRegistries

```java
public static Stream<RegistryAccess.RegistryEntry<?>> networkSafeRegistries(LayeredRegistryAccess<RegistryLayer> p_249066_)
```

**Parameters:**

- `p_249066_` (`LayeredRegistryAccess<RegistryLayer>`)

**Returns:** `public static Stream<RegistryAccess.RegistryEntry<?>>`

### PackedRegistryEntry

```java
public static record PackedRegistryEntry(ResourceLocation id, Optional<Tag> data)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `data` (`Optional<Tag>`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PackedRegistryEntry` | record |  |
