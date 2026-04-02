# RegistryDataCollector

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### appendContents

```java
public void appendContents(ResourceKey<? extends Registry<?>> p_321794_, List<RegistrySynchronization.PackedRegistryEntry> p_321772_)
```

**Parameters:**

- `p_321794_` (`ResourceKey<? extends Registry<?>>`)
- `p_321772_` (`List<RegistrySynchronization.PackedRegistryEntry>`)

**Returns:** `public void`

### appendTags

```java
public void appendTags(Map<ResourceKey<? extends Registry<?>>, TagNetworkSerialization.NetworkPayload> p_321771_)
```

**Parameters:**

- `p_321771_` (`Map<ResourceKey<? extends Registry<?>>, TagNetworkSerialization.NetworkPayload>`)

**Returns:** `public void`

### collectGameRegistries

```java
public RegistryAccess.Frozen collectGameRegistries(ResourceProvider p_326319_, RegistryAccess p_321556_, boolean p_321683_)
```

**Parameters:**

- `p_326319_` (`ResourceProvider`)
- `p_321556_` (`RegistryAccess`)
- `p_321683_` (`boolean`)

**Returns:** `public RegistryAccess.Frozen`

### append

```java
public void append(ResourceKey<? extends Registry<?>> p_321577_, List<RegistrySynchronization.PackedRegistryEntry> p_321551_)
```

**Parameters:**

- `p_321577_` (`ResourceKey<? extends Registry<?>>`)
- `p_321551_` (`List<RegistrySynchronization.PackedRegistryEntry>`)

**Returns:** `public void`

### loadRegistries

```java
public RegistryAccess loadRegistries(ResourceProvider p_326039_, RegistryAccess p_321627_)
```

**Parameters:**

- `p_326039_` (`ResourceProvider`)
- `p_321627_` (`RegistryAccess`)

**Returns:** `public RegistryAccess`
