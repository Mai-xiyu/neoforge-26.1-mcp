# RegistrySnapshot

**Package:** `net.neoforged.neoforge.registries`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, RegistrySnapshot>` |  |

## Methods

### decode

```java
public RegistrySnapshot decode(FriendlyByteBuf buf)
```

**Parameters:**

- `buf` (`FriendlyByteBuf`)

**Returns:** `RegistrySnapshot`

### encode

```java
public synchronized void encode(FriendlyByteBuf buf, RegistrySnapshot snapshot)
```

**Parameters:**

- `buf` (`FriendlyByteBuf`)
- `snapshot` (`RegistrySnapshot`)

### RegistrySnapshot

```java
public <T> RegistrySnapshot(Registry<T> registry, boolean full)
```

**Parameters:**

- `registry` (`Registry<T>`)
- `full` (`boolean`)

**Returns:** `<T>`

### getIds

```java
public Int2ObjectSortedMap<ResourceLocation> getIds()
```

**Returns:** `public Int2ObjectSortedMap<ResourceLocation>`

### getAliases

```java
public Map<ResourceLocation, ResourceLocation> getAliases()
```

**Returns:** `public Map<ResourceLocation, ResourceLocation>`

### getFullBackup

```java
public <T> Registry<T> getFullBackup()
```

**Returns:** `Registry<T>`
