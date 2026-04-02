# MagmaBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MagmaBlock>` |  |

## Methods

### codec

```java
public MapCodec<MagmaBlock> codec()
```

**Returns:** `MapCodec<MagmaBlock>`

### MagmaBlock

```java
public MagmaBlock(BlockBehaviour.Properties p_54800_)
```

**Parameters:**

- `p_54800_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### stepOn

```java
public void stepOn(Level p_153777_, BlockPos p_153778_, BlockState p_153779_, Entity p_153780_)
```

**Parameters:**

- `p_153777_` (`Level`)
- `p_153778_` (`BlockPos`)
- `p_153779_` (`BlockState`)
- `p_153780_` (`Entity`)

### tick

```java
protected void tick(BlockState p_221415_, ServerLevel p_221416_, BlockPos p_221417_, RandomSource p_221418_)
```

**Parameters:**

- `p_221415_` (`BlockState`)
- `p_221416_` (`ServerLevel`)
- `p_221417_` (`BlockPos`)
- `p_221418_` (`RandomSource`)

### updateShape

```java
protected BlockState updateShape(BlockState p_54811_, Direction p_54812_, BlockState p_54813_, LevelAccessor p_54814_, BlockPos p_54815_, BlockPos p_54816_)
```

**Parameters:**

- `p_54811_` (`BlockState`)
- `p_54812_` (`Direction`)
- `p_54813_` (`BlockState`)
- `p_54814_` (`LevelAccessor`)
- `p_54815_` (`BlockPos`)
- `p_54816_` (`BlockPos`)

**Returns:** `BlockState`

### onPlace

```java
protected void onPlace(BlockState p_54823_, Level p_54824_, BlockPos p_54825_, BlockState p_54826_, boolean p_54827_)
```

**Parameters:**

- `p_54823_` (`BlockState`)
- `p_54824_` (`Level`)
- `p_54825_` (`BlockPos`)
- `p_54826_` (`BlockState`)
- `p_54827_` (`boolean`)
