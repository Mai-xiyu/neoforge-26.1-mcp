# ExplorationMapFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_DESTINATION` | `TagKey<Structure>` |  |
| `DEFAULT_DECORATION` | `Holder<MapDecorationType>` |  |
| `DEFAULT_ZOOM` | `byte` |  |
| `DEFAULT_SEARCH_RADIUS` | `int` |  |
| `DEFAULT_SKIP_EXISTING` | `boolean` |  |
| `CODEC` | `MapCodec<ExplorationMapFunction>` |  |

## Methods

### ExplorationMapFunction

```java
 ExplorationMapFunction(List<LootItemCondition> p_298451_, TagKey<Structure> p_210653_, Holder<MapDecorationType> p_336106_, byte p_210655_, int p_210656_, boolean p_210657_)
```

**Parameters:**

- `p_298451_` (`List<LootItemCondition>`)
- `p_210653_` (`TagKey<Structure>`)
- `p_336106_` (`Holder<MapDecorationType>`)
- `p_210655_` (`byte`)
- `p_210656_` (`int`)
- `p_210657_` (`boolean`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<ExplorationMapFunction> getType()
```

**Returns:** `LootItemFunctionType<ExplorationMapFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_80547_, LootContext p_80548_)
```

**Parameters:**

- `p_80547_` (`ItemStack`)
- `p_80548_` (`LootContext`)

**Returns:** `ItemStack`

### makeExplorationMap

```java
public static ExplorationMapFunction.Builder makeExplorationMap()
```

**Returns:** `public static ExplorationMapFunction.Builder`

### getThis

```java
protected ExplorationMapFunction.Builder getThis()
```

**Returns:** `protected ExplorationMapFunction.Builder`

### setDestination

```java
public ExplorationMapFunction.Builder setDestination(TagKey<Structure> p_210659_)
```

**Parameters:**

- `p_210659_` (`TagKey<Structure>`)

**Returns:** `public ExplorationMapFunction.Builder`

### setMapDecoration

```java
public ExplorationMapFunction.Builder setMapDecoration(Holder<MapDecorationType> p_335871_)
```

**Parameters:**

- `p_335871_` (`Holder<MapDecorationType>`)

**Returns:** `public ExplorationMapFunction.Builder`

### setZoom

```java
public ExplorationMapFunction.Builder setZoom(byte p_80570_)
```

**Parameters:**

- `p_80570_` (`byte`)

**Returns:** `public ExplorationMapFunction.Builder`

### setSearchRadius

```java
public ExplorationMapFunction.Builder setSearchRadius(int p_165206_)
```

**Parameters:**

- `p_165206_` (`int`)

**Returns:** `public ExplorationMapFunction.Builder`

### setSkipKnownStructures

```java
public ExplorationMapFunction.Builder setSkipKnownStructures(boolean p_80576_)
```

**Parameters:**

- `p_80576_` (`boolean`)

**Returns:** `public ExplorationMapFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
