# AdventureModePredicate

**Package:** `net.minecraft.world.item`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<AdventureModePredicate>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, AdventureModePredicate>` |  |
| `CAN_BREAK_HEADER` | `Component` |  |
| `CAN_PLACE_HEADER` | `Component` |  |

## Methods

### AdventureModePredicate

```java
private AdventureModePredicate(List<BlockPredicate> p_335644_, boolean p_335774_, List<Component> p_336056_)
```

**Parameters:**

- `p_335644_` (`List<BlockPredicate>`)
- `p_335774_` (`boolean`)
- `p_336056_` (`List<Component>`)

**Returns:** `private`

### AdventureModePredicate

```java
public AdventureModePredicate(List<BlockPredicate> p_331906_, boolean p_331780_)
```

**Parameters:**

- `p_331906_` (`List<BlockPredicate>`)
- `p_331780_` (`boolean`)

**Returns:** `public`

### areSameBlocks

```java
private static boolean areSameBlocks(BlockInWorld p_330901_, BlockInWorld p_331435_, boolean p_332152_)
```

**Parameters:**

- `p_330901_` (`BlockInWorld`)
- `p_331435_` (`BlockInWorld`)
- `p_332152_` (`boolean`)

**Returns:** `private static boolean`

### test

```java
public boolean test(BlockInWorld p_331911_)
```

**Parameters:**

- `p_331911_` (`BlockInWorld`)

**Returns:** `public boolean`

### addToTooltip

```java
public void addToTooltip(Consumer<Component> p_331792_)
```

**Parameters:**

- `p_331792_` (`Consumer<Component>`)

**Returns:** `public void`

### withTooltip

```java
public AdventureModePredicate withTooltip(boolean p_335684_)
```

**Parameters:**

- `p_335684_` (`boolean`)

**Returns:** `public AdventureModePredicate`

### AdventureModePredicate

```java
return new AdventureModePredicate()
```

**Returns:** `return new`

### computeTooltip

```java
private static List<Component> computeTooltip(List<BlockPredicate> p_332164_)
```

**Parameters:**

- `p_332164_` (`List<BlockPredicate>`)

**Returns:** `private static List<Component>`

### showInTooltip

```java
public boolean showInTooltip()
```

**Returns:** `public boolean`

### equals

```java
public boolean equals(Object p_330844_)
```

**Parameters:**

- `p_330844_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`
