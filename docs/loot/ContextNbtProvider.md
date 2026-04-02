# ContextNbtProvider

**Package:** `net.minecraft.world.level.storage.loot.providers.nbt`
**Type:** class
**Implements:** `NbtProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BLOCK_ENTITY` | `ContextNbtProvider` |  |
| `CODEC` | `MapCodec<ContextNbtProvider>` |  |
| `INLINE_CODEC` | `Codec<ContextNbtProvider>` |  |

## Methods

### get

```java
public Tag get(LootContext p_165582_)
```

**Parameters:**

- `p_165582_` (`LootContext`)

**Returns:** `Tag`

### getId

```java
public String getId()
```

**Returns:** `String`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### forEntity

```java
return forEntity()
```

**Returns:** `return`

### forEntity

```java
private static ContextNbtProvider.Getter forEntity(LootContext.EntityTarget p_165578_)
```

**Parameters:**

- `p_165578_` (`LootContext.EntityTarget`)

**Returns:** `private static ContextNbtProvider.Getter`

### get

```java
public Tag get(LootContext p_165589_)
```

**Parameters:**

- `p_165589_` (`LootContext`)

**Returns:** `Tag`

### getId

```java
public String getId()
```

**Returns:** `String`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### ContextNbtProvider

```java
private ContextNbtProvider(ContextNbtProvider.Getter p_165568_)
```

**Parameters:**

- `p_165568_` (`ContextNbtProvider.Getter`)

**Returns:** `private`

### getType

```java
public LootNbtProviderType getType()
```

**Returns:** `LootNbtProviderType`

### get

```java
public Tag get(LootContext p_165573_)
```

**Parameters:**

- `p_165573_` (`LootContext`)

**Returns:** `Tag`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### forContextEntity

```java
public static NbtProvider forContextEntity(LootContext.EntityTarget p_165571_)
```

**Parameters:**

- `p_165571_` (`LootContext.EntityTarget`)

**Returns:** `public static NbtProvider`

### get

```java
Tag get(LootContext p_165591_)
```

**Parameters:**

- `p_165591_` (`LootContext`)

**Returns:** `Tag`

### getId

```java
String getId()
```

**Returns:** `String`

### getReferencedContextParams

```java
Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`
