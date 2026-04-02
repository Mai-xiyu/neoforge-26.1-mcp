# TagNetworkSerialization

**Package:** `net.minecraft.tags`
**Type:** class

## Methods

### serializeTagsToNetwork

```java
public static Map<ResourceKey<? extends Registry<?>>, TagNetworkSerialization.NetworkPayload> serializeTagsToNetwork(LayeredRegistryAccess<RegistryLayer> p_251774_)
```

**Parameters:**

- `p_251774_` (`LayeredRegistryAccess<RegistryLayer>`)

**Returns:** `public static Map<ResourceKey<? extends Registry<?>>, TagNetworkSerialization.NetworkPayload>`

### serializeToNetwork

```java
<T> private static <T> TagNetworkSerialization.NetworkPayload serializeToNetwork(Registry<T> p_203943_)
```

**Parameters:**

- `p_203943_` (`Registry<T>`)

**Returns:** `private static <T> TagNetworkSerialization.NetworkPayload`

### IllegalStateException

```java
throw new IllegalStateException("Can't serialize unregistered value " + holder)
```

**Parameters:**

- `holder` (`"Can't serialize unregistered value " +`)

**Returns:** `throw new`

### deserializeTagsFromNetwork

```java
<T> static <T> void deserializeTagsFromNetwork(ResourceKey<? extends Registry<T>> p_203953_, Registry<T> p_203954_, TagNetworkSerialization.NetworkPayload p_203955_, TagNetworkSerialization.TagOutput<T> p_203956_)
```

**Parameters:**

- `p_203953_` (`ResourceKey<? extends Registry<T>>`)
- `p_203954_` (`Registry<T>`)
- `p_203955_` (`TagNetworkSerialization.NetworkPayload`)
- `p_203956_` (`TagNetworkSerialization.TagOutput<T>`)

**Returns:** `static <T> void`

### NetworkPayload

```java
 NetworkPayload(Map<ResourceLocation, IntList> p_203965_)
```

**Parameters:**

- `p_203965_` (`Map<ResourceLocation, IntList>`)

**Returns:** ``

### write

```java
public void write(FriendlyByteBuf p_203968_)
```

**Parameters:**

- `p_203968_` (`FriendlyByteBuf`)

**Returns:** `public void`

### read

```java
public static TagNetworkSerialization.NetworkPayload read(FriendlyByteBuf p_203970_)
```

**Parameters:**

- `p_203970_` (`FriendlyByteBuf`)

**Returns:** `public static TagNetworkSerialization.NetworkPayload`

### size

```java
public int size()
```

**Returns:** `public int`

### applyToRegistry

```java
<T> public <T> void applyToRegistry(Registry<T> p_321755_)
```

**Parameters:**

- `p_321755_` (`Registry<T>`)

**Returns:** `public <T> void`

### accept

```java
void accept(TagKey<T> p_203972_, List<Holder<T>> p_203973_)
```

**Parameters:**

- `p_203972_` (`TagKey<T>`)
- `p_203973_` (`List<Holder<T>>`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NetworkPayload` | class |  |
| `TagOutput` | interface |  |
