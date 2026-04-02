# LayeredCauldronBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractCauldronBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LayeredCauldronBlock>` |  |
| `MIN_FILL_LEVEL` | `int` |  |
| `MAX_FILL_LEVEL` | `int` |  |
| `LEVEL` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<LayeredCauldronBlock> codec()
```

**Returns:** `MapCodec<LayeredCauldronBlock>`

### LayeredCauldronBlock

```java
public LayeredCauldronBlock(Biome.Precipitation p_304591_, CauldronInteraction.InteractionMap p_304761_, BlockBehaviour.Properties p_153522_)
```

**Parameters:**

- `p_304591_` (`Biome.Precipitation`)
- `p_304761_` (`CauldronInteraction.InteractionMap`)
- `p_153522_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isFull

```java
public boolean isFull(BlockState p_153555_)
```

**Parameters:**

- `p_153555_` (`BlockState`)

**Returns:** `boolean`

### canReceiveStalactiteDrip

```java
protected boolean canReceiveStalactiteDrip(Fluid p_153551_)
```

**Parameters:**

- `p_153551_` (`Fluid`)

**Returns:** `boolean`

### getContentHeight

```java
protected double getContentHeight(BlockState p_153528_)
```

**Parameters:**

- `p_153528_` (`BlockState`)

**Returns:** `double`

### entityInside

```java
protected void entityInside(BlockState p_153534_, Level p_153535_, BlockPos p_153536_, Entity p_153537_)
```

**Parameters:**

- `p_153534_` (`BlockState`)
- `p_153535_` (`Level`)
- `p_153536_` (`BlockPos`)
- `p_153537_` (`Entity`)

### handleEntityOnFireInside

```java
private void handleEntityOnFireInside(BlockState p_153556_, Level p_153557_, BlockPos p_153558_)
```

**Parameters:**

- `p_153556_` (`BlockState`)
- `p_153557_` (`Level`)
- `p_153558_` (`BlockPos`)

**Returns:** `private void`

### lowerFillLevel

```java
 lowerFillLevel()
```

**Returns:** ``

### lowerFillLevel

```java
public static void lowerFillLevel(BlockState p_153560_, Level p_153561_, BlockPos p_153562_)
```

**Parameters:**

- `p_153560_` (`BlockState`)
- `p_153561_` (`Level`)
- `p_153562_` (`BlockPos`)

**Returns:** `public static void`

### handlePrecipitation

```java
public void handlePrecipitation(BlockState p_153539_, Level p_153540_, BlockPos p_153541_, Biome.Precipitation p_153542_)
```

**Parameters:**

- `p_153539_` (`BlockState`)
- `p_153540_` (`Level`)
- `p_153541_` (`BlockPos`)
- `p_153542_` (`Biome.Precipitation`)

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_153530_, Level p_153531_, BlockPos p_153532_)
```

**Parameters:**

- `p_153530_` (`BlockState`)
- `p_153531_` (`Level`)
- `p_153532_` (`BlockPos`)

**Returns:** `int`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_153549_)
```

**Parameters:**

- `p_153549_` (`StateDefinition.Builder<Block, BlockState>`)

### receiveStalactiteDrip

```java
protected void receiveStalactiteDrip(BlockState p_153544_, Level p_153545_, BlockPos p_153546_, Fluid p_153547_)
```

**Parameters:**

- `p_153544_` (`BlockState`)
- `p_153545_` (`Level`)
- `p_153546_` (`BlockPos`)
- `p_153547_` (`Fluid`)
