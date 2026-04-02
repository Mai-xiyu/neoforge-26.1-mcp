# ChangeOverTimeBlock

**Package:** `net.minecraft.world.level.block`
**Type:** interface<T extends Enum<T>>

## Methods

### getNext

```java
Optional<BlockState> getNext(BlockState p_153040_)
```

**Parameters:**

- `p_153040_` (`BlockState`)

**Returns:** `Optional<BlockState>`

### getChanceModifier

```java
float getChanceModifier()
```

**Returns:** `float`

### changeOverTime

```java
default void changeOverTime(BlockState p_309154_, ServerLevel p_309115_, BlockPos p_308999_, RandomSource p_308868_)
```

**Parameters:**

- `p_309154_` (`BlockState`)
- `p_309115_` (`ServerLevel`)
- `p_308999_` (`BlockPos`)
- `p_308868_` (`RandomSource`)

**Returns:** `default void`

### getAge

```java
T getAge()
```

**Returns:** `T`

### getNextState

```java
default Optional<BlockState> getNextState(BlockState p_309150_, ServerLevel p_309039_, BlockPos p_309042_, RandomSource p_308890_)
```

**Parameters:**

- `p_309150_` (`BlockState`)
- `p_309039_` (`ServerLevel`)
- `p_309042_` (`BlockPos`)
- `p_308890_` (`RandomSource`)

**Returns:** `default Optional<BlockState>`
