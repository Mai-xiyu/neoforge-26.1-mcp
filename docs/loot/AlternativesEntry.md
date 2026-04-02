# AlternativesEntry

**Package:** `net.minecraft.world.level.storage.loot.entries`
**Type:** class
**Extends:** `CompositeEntryBase`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AlternativesEntry>` |  |

## Methods

### AlternativesEntry

```java
 AlternativesEntry(List<LootPoolEntryContainer> p_299062_, List<LootItemCondition> p_298668_)
```

**Parameters:**

- `p_299062_` (`List<LootPoolEntryContainer>`)
- `p_298668_` (`List<LootItemCondition>`)

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
protected ComposableEntryContainer compose(List<? extends ComposableEntryContainer> p_298256_)
```

**Parameters:**

- `p_298256_` (`List<? extends ComposableEntryContainer>`)

**Returns:** `ComposableEntryContainer`

### validate

```java
public void validate(ValidationContext p_79388_)
```

**Parameters:**

- `p_79388_` (`ValidationContext`)

### alternatives

```java
public static AlternativesEntry.Builder alternatives(LootPoolEntryContainer.Builder<?>[]... p_79396_)
```

**Parameters:**

- `p_79396_` (`LootPoolEntryContainer.Builder<?>[]...`)

**Returns:** `public static AlternativesEntry.Builder`

### alternatives

```java
<E> public static <E> AlternativesEntry.Builder alternatives(Collection<E> p_230934_, Function<E, LootPoolEntryContainer.Builder<?>> p_230935_)
```

**Parameters:**

- `p_230934_` (`Collection<E>`)
- `p_230935_` (`Function<E, LootPoolEntryContainer.Builder<?>>`)

**Returns:** `public static <E> AlternativesEntry.Builder`

### Builder

```java
public Builder(LootPoolEntryContainer.Builder<?>[]... p_79399_)
```

**Parameters:**

- `p_79399_` (`LootPoolEntryContainer.Builder<?>[]...`)

**Returns:** `public`

### getThis

```java
protected AlternativesEntry.Builder getThis()
```

**Returns:** `protected AlternativesEntry.Builder`

### otherwise

```java
public AlternativesEntry.Builder otherwise(LootPoolEntryContainer.Builder<?> p_79402_)
```

**Parameters:**

- `p_79402_` (`LootPoolEntryContainer.Builder<?>`)

**Returns:** `AlternativesEntry.Builder`

### build

```java
public LootPoolEntryContainer build()
```

**Returns:** `LootPoolEntryContainer`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
