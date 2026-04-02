# MossBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MossBlock>` |  |

## Methods

### codec

```java
public MapCodec<MossBlock> codec()
```

**Returns:** `MapCodec<MossBlock>`

### MossBlock

```java
public MossBlock(BlockBehaviour.Properties p_153790_)
```

**Parameters:**

- `p_153790_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256507_, BlockPos p_256224_, BlockState p_256628_)
```

**Parameters:**

- `p_256507_` (`LevelReader`)
- `p_256224_` (`BlockPos`)
- `p_256628_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221538_, RandomSource p_221539_, BlockPos p_221540_, BlockState p_221541_)
```

**Parameters:**

- `p_221538_` (`Level`)
- `p_221539_` (`RandomSource`)
- `p_221540_` (`BlockPos`)
- `p_221541_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221533_, RandomSource p_221534_, BlockPos p_221535_, BlockState p_221536_)
```

**Parameters:**

- `p_221533_` (`ServerLevel`)
- `p_221534_` (`RandomSource`)
- `p_221535_` (`BlockPos`)
- `p_221536_` (`BlockState`)

### getType

```java
public BonemealableBlock.Type getType()
```

**Returns:** `BonemealableBlock.Type`
