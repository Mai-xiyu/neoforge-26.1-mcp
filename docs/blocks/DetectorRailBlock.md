# DetectorRailBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseRailBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DetectorRailBlock>` |  |
| `SHAPE` | `EnumProperty<RailShape>` |  |
| `POWERED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<DetectorRailBlock> codec()
```

**Returns:** `MapCodec<DetectorRailBlock>`

### DetectorRailBlock

```java
public DetectorRailBlock(BlockBehaviour.Properties p_52431_)
```

**Parameters:**

- `p_52431_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### registerDefaultState

```java
protected void registerDefaultState()
```

**Returns:** `protected void`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_52489_)
```

**Parameters:**

- `p_52489_` (`BlockState`)

**Returns:** `boolean`

### entityInside

```java
protected void entityInside(BlockState p_52458_, Level p_52459_, BlockPos p_52460_, Entity p_52461_)
```

**Parameters:**

- `p_52458_` (`BlockState`)
- `p_52459_` (`Level`)
- `p_52460_` (`BlockPos`)
- `p_52461_` (`Entity`)

### tick

```java
protected void tick(BlockState p_221060_, ServerLevel p_221061_, BlockPos p_221062_, RandomSource p_221063_)
```

**Parameters:**

- `p_221060_` (`BlockState`)
- `p_221061_` (`ServerLevel`)
- `p_221062_` (`BlockPos`)
- `p_221063_` (`RandomSource`)

### getSignal

```java
protected int getSignal(BlockState p_52449_, BlockGetter p_52450_, BlockPos p_52451_, Direction p_52452_)
```

**Parameters:**

- `p_52449_` (`BlockState`)
- `p_52450_` (`BlockGetter`)
- `p_52451_` (`BlockPos`)
- `p_52452_` (`Direction`)

**Returns:** `int`

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_52478_, BlockGetter p_52479_, BlockPos p_52480_, Direction p_52481_)
```

**Parameters:**

- `p_52478_` (`BlockState`)
- `p_52479_` (`BlockGetter`)
- `p_52480_` (`BlockPos`)
- `p_52481_` (`Direction`)

**Returns:** `int`

### checkPressed

```java
private void checkPressed(Level p_52433_, BlockPos p_52434_, BlockState p_52435_)
```

**Parameters:**

- `p_52433_` (`Level`)
- `p_52434_` (`BlockPos`)
- `p_52435_` (`BlockState`)

**Returns:** `private void`

### updatePowerToConnected

```java
protected void updatePowerToConnected(Level p_52473_, BlockPos p_52474_, BlockState p_52475_, boolean p_52476_)
```

**Parameters:**

- `p_52473_` (`Level`)
- `p_52474_` (`BlockPos`)
- `p_52475_` (`BlockState`)
- `p_52476_` (`boolean`)

**Returns:** `protected void`

### onPlace

```java
protected void onPlace(BlockState p_52483_, Level p_52484_, BlockPos p_52485_, BlockState p_52486_, boolean p_52487_)
```

**Parameters:**

- `p_52483_` (`BlockState`)
- `p_52484_` (`Level`)
- `p_52485_` (`BlockPos`)
- `p_52486_` (`BlockState`)
- `p_52487_` (`boolean`)

### getShapeProperty

```java
public Property<RailShape> getShapeProperty()
```

**Returns:** `Property<RailShape>`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_52442_)
```

**Parameters:**

- `p_52442_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_52454_, Level p_52455_, BlockPos p_52456_)
```

**Parameters:**

- `p_52454_` (`BlockState`)
- `p_52455_` (`Level`)
- `p_52456_` (`BlockPos`)

**Returns:** `int`

### getInteractingMinecartOfType

```java
<T extends AbstractMinecart> private <T extends AbstractMinecart> List<T> getInteractingMinecartOfType(Level p_52437_, BlockPos p_52438_, Class<T> p_52439_, Predicate<Entity> p_52440_)
```

**Parameters:**

- `p_52437_` (`Level`)
- `p_52438_` (`BlockPos`)
- `p_52439_` (`Class<T>`)
- `p_52440_` (`Predicate<Entity>`)

**Returns:** `private <T extends AbstractMinecart> List<T>`

### getSearchBB

```java
private AABB getSearchBB(BlockPos p_52471_)
```

**Parameters:**

- `p_52471_` (`BlockPos`)

**Returns:** `private AABB`

### rotate

```java
protected BlockState rotate(BlockState p_52466_, Rotation p_52467_)
```

**Parameters:**

- `p_52466_` (`BlockState`)
- `p_52467_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_52463_, Mirror p_52464_)
```

**Parameters:**

- `p_52463_` (`BlockState`)
- `p_52464_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_52469_)
```

**Parameters:**

- `p_52469_` (`StateDefinition.Builder<Block, BlockState>`)
