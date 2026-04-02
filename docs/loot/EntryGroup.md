# EntryGroup

**Package:** `net.minecraft.world.level.storage.loot.entries`
**Type:** class
**Extends:** `CompositeEntryBase`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EntryGroup>` |  |

## Methods

### EntryGroup

```java
 EntryGroup(List<LootPoolEntryContainer> p_298565_, List<LootItemCondition> p_298406_)
```

**Parameters:**

- `p_298565_` (`List<LootPoolEntryContainer>`)
- `p_298406_` (`List<LootItemCondition>`)

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
protected ComposableEntryContainer compose(List<? extends ComposableEntryContainer> p_299019_)
```

**Parameters:**

- `p_299019_` (`List<? extends ComposableEntryContainer>`)

**Returns:** `ComposableEntryContainer`

### list

```java
public static EntryGroup.Builder list(LootPoolEntryContainer.Builder<?>[]... p_165138_)
```

**Parameters:**

- `p_165138_` (`LootPoolEntryContainer.Builder<?>[]...`)

**Returns:** `public static EntryGroup.Builder`

### Builder

```java
public Builder(LootPoolEntryContainer.Builder<?>[]... p_165141_)
```

**Parameters:**

- `p_165141_` (`LootPoolEntryContainer.Builder<?>[]...`)

**Returns:** `public`

### getThis

```java
protected EntryGroup.Builder getThis()
```

**Returns:** `protected EntryGroup.Builder`

### append

```java
public EntryGroup.Builder append(LootPoolEntryContainer.Builder<?> p_165145_)
```

**Parameters:**

- `p_165145_` (`LootPoolEntryContainer.Builder<?>`)

**Returns:** `EntryGroup.Builder`

### build

```java
public LootPoolEntryContainer build()
```

**Returns:** `LootPoolEntryContainer`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
