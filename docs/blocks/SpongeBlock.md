# SpongeBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SpongeBlock>` |  |
| `MAX_DEPTH` | `int` |  |
| `MAX_COUNT` | `int` |  |

## Methods

### codec

```java
public MapCodec<SpongeBlock> codec()
```

**Returns:** `MapCodec<SpongeBlock>`

### SpongeBlock

```java
public SpongeBlock(BlockBehaviour.Properties p_56796_)
```

**Parameters:**

- `p_56796_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onPlace

```java
protected void onPlace(BlockState p_56811_, Level p_56812_, BlockPos p_56813_, BlockState p_56814_, boolean p_56815_)
```

**Parameters:**

- `p_56811_` (`BlockState`)
- `p_56812_` (`Level`)
- `p_56813_` (`BlockPos`)
- `p_56814_` (`BlockState`)
- `p_56815_` (`boolean`)

### neighborChanged

```java
protected void neighborChanged(BlockState p_56801_, Level p_56802_, BlockPos p_56803_, Block p_56804_, BlockPos p_56805_, boolean p_56806_)
```

**Parameters:**

- `p_56801_` (`BlockState`)
- `p_56802_` (`Level`)
- `p_56803_` (`BlockPos`)
- `p_56804_` (`Block`)
- `p_56805_` (`BlockPos`)
- `p_56806_` (`boolean`)

### tryAbsorbWater

```java
protected void tryAbsorbWater(Level p_56798_, BlockPos p_56799_)
```

**Parameters:**

- `p_56798_` (`Level`)
- `p_56799_` (`BlockPos`)

**Returns:** `protected void`

### removeWaterBreadthFirstSearch

```java
private boolean removeWaterBreadthFirstSearch(Level p_56808_, BlockPos p_56809_)
```

**Parameters:**

- `p_56808_` (`Level`)
- `p_56809_` (`BlockPos`)

**Returns:** `private boolean`

### dropResources

```java
 dropResources()
```

**Returns:** ``
