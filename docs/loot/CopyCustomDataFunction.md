# CopyCustomDataFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CopyCustomDataFunction>` |  |
| `CODEC` | `Codec<CopyCustomDataFunction.CopyOperation>` |  |

## Methods

### CopyCustomDataFunction

```java
 CopyCustomDataFunction(List<LootItemCondition> p_330826_, NbtProvider p_331866_, List<CopyCustomDataFunction.CopyOperation> p_332090_)
```

**Parameters:**

- `p_330826_` (`List<LootItemCondition>`)
- `p_331866_` (`NbtProvider`)
- `p_332090_` (`List<CopyCustomDataFunction.CopyOperation>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<CopyCustomDataFunction> getType()
```

**Returns:** `LootItemFunctionType<CopyCustomDataFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_330210_, LootContext p_330315_)
```

**Parameters:**

- `p_330210_` (`ItemStack`)
- `p_330315_` (`LootContext`)

**Returns:** `ItemStack`

### copyData

```java
public static CopyCustomDataFunction.Builder copyData(NbtProvider p_330285_)
```

**Parameters:**

- `p_330285_` (`NbtProvider`)

**Returns:** `CopyCustomDataFunction.Builder`

### copyData

```java
public static CopyCustomDataFunction.Builder copyData(LootContext.EntityTarget p_330616_)
```

**Parameters:**

- `p_330616_` (`LootContext.EntityTarget`)

**Returns:** `public static CopyCustomDataFunction.Builder`

### Builder

```java
 Builder(NbtProvider p_331441_)
```

**Parameters:**

- `p_331441_` (`NbtProvider`)

**Returns:** ``

### copy

```java
public CopyCustomDataFunction.Builder copy(String p_331086_, String p_331216_, CopyCustomDataFunction.MergeStrategy p_331878_)
```

**Parameters:**

- `p_331086_` (`String`)
- `p_331216_` (`String`)
- `p_331878_` (`CopyCustomDataFunction.MergeStrategy`)

**Returns:** `public CopyCustomDataFunction.Builder`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### copy

```java
public CopyCustomDataFunction.Builder copy(String p_331730_, String p_330347_)
```

**Parameters:**

- `p_331730_` (`String`)
- `p_330347_` (`String`)

**Returns:** `public CopyCustomDataFunction.Builder`

### getThis

```java
protected CopyCustomDataFunction.Builder getThis()
```

**Returns:** `protected CopyCustomDataFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

### CopyOperation

```java
static record CopyOperation(NbtPathArgument.NbtPath sourcePath, NbtPathArgument.NbtPath targetPath, CopyCustomDataFunction.MergeStrategy op)
```

**Parameters:**

- `sourcePath` (`NbtPathArgument.NbtPath`)
- `targetPath` (`NbtPathArgument.NbtPath`)
- `op` (`CopyCustomDataFunction.MergeStrategy`)

**Returns:** `static record`

### apply

```java
public void apply(Supplier<Tag> p_330493_, Tag p_331306_)
```

**Parameters:**

- `p_330493_` (`Supplier<Tag>`)
- `p_331306_` (`Tag`)

**Returns:** `public void`

### REPLACE

```java
 REPLACE()
```

**Returns:** ``

### merge

```java
public void merge(Tag p_331979_, NbtPathArgument.NbtPath p_331124_, List<Tag> p_330968_)
```

**Parameters:**

- `p_331979_` (`Tag`)
- `p_331124_` (`NbtPathArgument.NbtPath`)
- `p_330968_` (`List<Tag>`)

### APPEND

```java
, APPEND()
```

**Returns:** `,`

### merge

```java
public void merge(Tag p_332012_, NbtPathArgument.NbtPath p_330758_, List<Tag> p_331021_)
```

**Parameters:**

- `p_332012_` (`Tag`)
- `p_330758_` (`NbtPathArgument.NbtPath`)
- `p_331021_` (`List<Tag>`)

### MERGE

```java
, MERGE()
```

**Returns:** `,`

### merge

```java
public void merge(Tag p_330243_, NbtPathArgument.NbtPath p_331218_, List<Tag> p_332107_)
```

**Parameters:**

- `p_330243_` (`Tag`)
- `p_331218_` (`NbtPathArgument.NbtPath`)
- `p_332107_` (`List<Tag>`)

### merge

```java
public abstract void merge(Tag p_330558_, NbtPathArgument.NbtPath p_331810_, List<Tag> p_330953_)
```

**Parameters:**

- `p_330558_` (`Tag`)
- `p_331810_` (`NbtPathArgument.NbtPath`)
- `p_330953_` (`List<Tag>`)

**Returns:** `public abstract void`

### MergeStrategy

```java
 MergeStrategy(String p_331709_)
```

**Parameters:**

- `p_331709_` (`String`)

**Returns:** ``

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `MergeStrategy` | enum |  |
