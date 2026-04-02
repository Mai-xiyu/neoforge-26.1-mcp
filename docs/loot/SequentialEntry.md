# SequentialEntry

**Package:** `net.minecraft.world.level.storage.loot.entries`
**Type:** class
**Extends:** `CompositeEntryBase`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SequentialEntry>` |  |

## Methods

### SequentialEntry

```java
 SequentialEntry(List<LootPoolEntryContainer> p_299160_, List<LootItemCondition> p_298450_)
```

**Parameters:**

- `p_299160_` (`List<LootPoolEntryContainer>`)
- `p_298450_` (`List<LootItemCondition>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootPoolEntryType getType()
```

**Returns:** `LootPoolEntryType`

### compose

```java
protected ComposableEntryContainer compose(List<? extends ComposableEntryContainer> p_298307_)
```

**Parameters:**

- `p_298307_` (`List<? extends ComposableEntryContainer>`)

**Returns:** `ComposableEntryContainer`

### sequential

```java
public static SequentialEntry.Builder sequential(LootPoolEntryContainer.Builder<?>[]... p_165153_)
```

**Parameters:**

- `p_165153_` (`LootPoolEntryContainer.Builder<?>[]...`)

**Returns:** `public static SequentialEntry.Builder`

### Builder

```java
public Builder(LootPoolEntryContainer.Builder<?>[]... p_165156_)
```

**Parameters:**

- `p_165156_` (`LootPoolEntryContainer.Builder<?>[]...`)

**Returns:** `public`

### getThis

```java
protected SequentialEntry.Builder getThis()
```

**Returns:** `protected SequentialEntry.Builder`

### then

```java
public SequentialEntry.Builder then(LootPoolEntryContainer.Builder<?> p_165160_)
```

**Parameters:**

- `p_165160_` (`LootPoolEntryContainer.Builder<?>`)

**Returns:** `SequentialEntry.Builder`

### build

```java
public LootPoolEntryContainer build()
```

**Returns:** `LootPoolEntryContainer`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
