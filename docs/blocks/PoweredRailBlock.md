# PoweredRailBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseRailBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PoweredRailBlock>` |  |
| `SHAPE` | `EnumProperty<RailShape>` |  |
| `POWERED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<PoweredRailBlock> codec()
```

**Returns:** `MapCodec<PoweredRailBlock>`

### PoweredRailBlock

```java
TRUE for an Activator Rail, FALSE for Powered Rail

    public PoweredRailBlock(BlockBehaviour.Properties p_55218_)
```

**Parameters:**

- `p_55218_` (`BlockBehaviour.Properties`)

**Returns:** `TRUE for an Activator Rail, FALSE for Powered Rail

    public`

### this

```java
 this()
```

**Returns:** ``

### PoweredRailBlock

```java
public PoweredRailBlock(BlockBehaviour.Properties p_55218_, boolean isPoweredRail)
```

**Parameters:**

- `p_55218_` (`BlockBehaviour.Properties`)
- `isPoweredRail` (`boolean`)

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

### findPoweredRailSignal

```java
protected boolean findPoweredRailSignal(Level p_55220_, BlockPos p_55221_, BlockState p_55222_, boolean p_55223_, int p_55224_)
```

**Parameters:**

- `p_55220_` (`Level`)
- `p_55221_` (`BlockPos`)
- `p_55222_` (`BlockState`)
- `p_55223_` (`boolean`)
- `p_55224_` (`int`)

**Returns:** `protected boolean`

### isSameRailWithPower

```java
protected boolean isSameRailWithPower(Level p_55226_, BlockPos p_55227_, boolean p_55228_, int p_55229_, RailShape p_55230_)
```

**Parameters:**

- `p_55226_` (`Level`)
- `p_55227_` (`BlockPos`)
- `p_55228_` (`boolean`)
- `p_55229_` (`int`)
- `p_55230_` (`RailShape`)

**Returns:** `protected boolean`

### updateState

```java
protected void updateState(BlockState p_55232_, Level p_55233_, BlockPos p_55234_, Block p_55235_)
```

**Parameters:**

- `p_55232_` (`BlockState`)
- `p_55233_` (`Level`)
- `p_55234_` (`BlockPos`)
- `p_55235_` (`Block`)

### getShapeProperty

```java
public Property<RailShape> getShapeProperty()
```

**Returns:** `Property<RailShape>`

### rotate

```java
protected BlockState rotate(BlockState p_55240_, Rotation p_55241_)
```

**Parameters:**

- `p_55240_` (`BlockState`)
- `p_55241_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_55237_, Mirror p_55238_)
```

**Parameters:**

- `p_55237_` (`BlockState`)
- `p_55238_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55243_)
```

**Parameters:**

- `p_55243_` (`StateDefinition.Builder<Block, BlockState>`)

### isActivatorRail

```java
public boolean isActivatorRail()
```

**Returns:** `public boolean`
