# WeatheringCopper

**Package:** `net.minecraft.world.level.block`
**Type:** interface
**Extends:** `ChangeOverTimeBlock<WeatheringCopper.WeatherState>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<WeatheringCopper.WeatherState>` |  |

## Methods

### getPrevious

```java
static Optional<Block> getPrevious(Block p_154891_)
```

**Parameters:**

- `p_154891_` (`Block`)

**Returns:** `static Optional<Block>`

### getFirst

```java
static Block getFirst(Block p_154898_)
```

**Parameters:**

- `p_154898_` (`Block`)

**Returns:** `static Block`

### getPrevious

```java
static Optional<BlockState> getPrevious(BlockState p_154900_)
```

**Parameters:**

- `p_154900_` (`BlockState`)

**Returns:** `static Optional<BlockState>`

### getNext

```java
static Optional<Block> getNext(Block p_154905_)
```

**Parameters:**

- `p_154905_` (`Block`)

**Returns:** `static Optional<Block>`

### getFirst

```java
static BlockState getFirst(BlockState p_154907_)
```

**Parameters:**

- `p_154907_` (`BlockState`)

**Returns:** `static BlockState`

### getNext

```java
default Optional<BlockState> getNext(BlockState p_154893_)
```

**Parameters:**

- `p_154893_` (`BlockState`)

**Returns:** `Optional<BlockState>`

### getChanceModifier

```java
default float getChanceModifier()
```

**Returns:** `float`

### OXIDIZED

```java
, OXIDIZED()
```

**Returns:** `,`

### WeatherState

```java
private WeatherState(String p_304569_)
```

**Parameters:**

- `p_304569_` (`String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `WeatherState` | enum |  |
