# RedStoneWireBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RedStoneWireBlock>` |  |
| `NORTH` | `EnumProperty<RedstoneSide>` |  |
| `EAST` | `EnumProperty<RedstoneSide>` |  |
| `SOUTH` | `EnumProperty<RedstoneSide>` |  |
| `WEST` | `EnumProperty<RedstoneSide>` |  |
| `POWER` | `IntegerProperty` |  |
| `PROPERTY_BY_DIRECTION` | `Map<Direction, EnumProperty<RedstoneSide>>` |  |
| `H` | `int` |  |
| `W` | `int` |  |
| `E` | `int` |  |
| `N` | `int` |  |
| `S` | `int` |  |

## Methods

### codec

```java
public MapCodec<RedStoneWireBlock> codec()
```

**Returns:** `MapCodec<RedStoneWireBlock>`

### RedStoneWireBlock

```java
public RedStoneWireBlock(BlockBehaviour.Properties p_55511_)
```

**Parameters:**

- `p_55511_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### calculateShape

```java
private VoxelShape calculateShape(BlockState p_55643_)
```

**Parameters:**

- `p_55643_` (`BlockState`)

**Returns:** `private VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_55620_, BlockGetter p_55621_, BlockPos p_55622_, CollisionContext p_55623_)
```

**Parameters:**

- `p_55620_` (`BlockState`)
- `p_55621_` (`BlockGetter`)
- `p_55622_` (`BlockPos`)
- `p_55623_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_55513_)
```

**Parameters:**

- `p_55513_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getConnectionState

```java
private BlockState getConnectionState(BlockGetter p_55515_, BlockState p_55516_, BlockPos p_55517_)
```

**Parameters:**

- `p_55515_` (`BlockGetter`)
- `p_55516_` (`BlockState`)
- `p_55517_` (`BlockPos`)

**Returns:** `private BlockState`

### getMissingConnections

```java
private BlockState getMissingConnections(BlockGetter p_55609_, BlockState p_55610_, BlockPos p_55611_)
```

**Parameters:**

- `p_55609_` (`BlockGetter`)
- `p_55610_` (`BlockState`)
- `p_55611_` (`BlockPos`)

**Returns:** `private BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_55598_, Direction p_55599_, BlockState p_55600_, LevelAccessor p_55601_, BlockPos p_55602_, BlockPos p_55603_)
```

**Parameters:**

- `p_55598_` (`BlockState`)
- `p_55599_` (`Direction`)
- `p_55600_` (`BlockState`)
- `p_55601_` (`LevelAccessor`)
- `p_55602_` (`BlockPos`)
- `p_55603_` (`BlockPos`)

**Returns:** `BlockState`

### isCross

```java
private static boolean isCross(BlockState p_55645_)
```

**Parameters:**

- `p_55645_` (`BlockState`)

**Returns:** `private static boolean`

### isDot

```java
private static boolean isDot(BlockState p_55647_)
```

**Parameters:**

- `p_55647_` (`BlockState`)

**Returns:** `private static boolean`

### updateIndirectNeighbourShapes

```java
protected void updateIndirectNeighbourShapes(BlockState p_55579_, LevelAccessor p_55580_, BlockPos p_55581_, int p_55582_, int p_55583_)
```

**Parameters:**

- `p_55579_` (`BlockState`)
- `p_55580_` (`LevelAccessor`)
- `p_55581_` (`BlockPos`)
- `p_55582_` (`int`)
- `p_55583_` (`int`)

### getConnectingSide

```java
private RedstoneSide getConnectingSide(BlockGetter p_55519_, BlockPos p_55520_, Direction p_55521_)
```

**Parameters:**

- `p_55519_` (`BlockGetter`)
- `p_55520_` (`BlockPos`)
- `p_55521_` (`Direction`)

**Returns:** `private RedstoneSide`

### getConnectingSide

```java
private RedstoneSide getConnectingSide(BlockGetter p_55523_, BlockPos p_55524_, Direction p_55525_, boolean p_55526_)
```

**Parameters:**

- `p_55523_` (`BlockGetter`)
- `p_55524_` (`BlockPos`)
- `p_55525_` (`Direction`)
- `p_55526_` (`boolean`)

**Returns:** `private RedstoneSide`

### canSurvive

```java
protected boolean canSurvive(BlockState p_55585_, LevelReader p_55586_, BlockPos p_55587_)
```

**Parameters:**

- `p_55585_` (`BlockState`)
- `p_55586_` (`LevelReader`)
- `p_55587_` (`BlockPos`)

**Returns:** `boolean`

### canSurviveOn

```java
private boolean canSurviveOn(BlockGetter p_55613_, BlockPos p_55614_, BlockState p_55615_)
```

**Parameters:**

- `p_55613_` (`BlockGetter`)
- `p_55614_` (`BlockPos`)
- `p_55615_` (`BlockState`)

**Returns:** `private boolean`

### updatePowerStrength

```java
private void updatePowerStrength(Level p_55531_, BlockPos p_55532_, BlockState p_55533_)
```

**Parameters:**

- `p_55531_` (`Level`)
- `p_55532_` (`BlockPos`)
- `p_55533_` (`BlockState`)

**Returns:** `private void`

### calculateTargetStrength

```java
private int calculateTargetStrength(Level p_55528_, BlockPos p_55529_)
```

**Parameters:**

- `p_55528_` (`Level`)
- `p_55529_` (`BlockPos`)

**Returns:** `private int`

### getWireSignal

```java
private int getWireSignal(BlockState p_55649_)
```

**Parameters:**

- `p_55649_` (`BlockState`)

**Returns:** `private int`

### checkCornerChangeAt

```java
private void checkCornerChangeAt(Level p_55617_, BlockPos p_55618_)
```

**Parameters:**

- `p_55617_` (`Level`)
- `p_55618_` (`BlockPos`)

**Returns:** `private void`

### onPlace

```java
protected void onPlace(BlockState p_55630_, Level p_55631_, BlockPos p_55632_, BlockState p_55633_, boolean p_55634_)
```

**Parameters:**

- `p_55630_` (`BlockState`)
- `p_55631_` (`Level`)
- `p_55632_` (`BlockPos`)
- `p_55633_` (`BlockState`)
- `p_55634_` (`boolean`)

### onRemove

```java
protected void onRemove(BlockState p_55568_, Level p_55569_, BlockPos p_55570_, BlockState p_55571_, boolean p_55572_)
```

**Parameters:**

- `p_55568_` (`BlockState`)
- `p_55569_` (`Level`)
- `p_55570_` (`BlockPos`)
- `p_55571_` (`BlockState`)
- `p_55572_` (`boolean`)

### updateNeighborsOfNeighboringWires

```java
private void updateNeighborsOfNeighboringWires(Level p_55638_, BlockPos p_55639_)
```

**Parameters:**

- `p_55638_` (`Level`)
- `p_55639_` (`BlockPos`)

**Returns:** `private void`

### neighborChanged

```java
protected void neighborChanged(BlockState p_55561_, Level p_55562_, BlockPos p_55563_, Block p_55564_, BlockPos p_55565_, boolean p_55566_)
```

**Parameters:**

- `p_55561_` (`BlockState`)
- `p_55562_` (`Level`)
- `p_55563_` (`BlockPos`)
- `p_55564_` (`Block`)
- `p_55565_` (`BlockPos`)
- `p_55566_` (`boolean`)

### dropResources

```java
 dropResources()
```

**Returns:** ``

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_55625_, BlockGetter p_55626_, BlockPos p_55627_, Direction p_55628_)
```

**Parameters:**

- `p_55625_` (`BlockState`)
- `p_55626_` (`BlockGetter`)
- `p_55627_` (`BlockPos`)
- `p_55628_` (`Direction`)

**Returns:** `int`

### getSignal

```java
protected int getSignal(BlockState p_55549_, BlockGetter p_55550_, BlockPos p_55551_, Direction p_55552_)
```

**Parameters:**

- `p_55549_` (`BlockState`)
- `p_55550_` (`BlockGetter`)
- `p_55551_` (`BlockPos`)
- `p_55552_` (`Direction`)

**Returns:** `int`

### shouldConnectTo

```java
protected static boolean shouldConnectTo(BlockState p_55641_)
```

**Parameters:**

- `p_55641_` (`BlockState`)

**Returns:** `protected static boolean`

### shouldConnectTo

```java
return shouldConnectTo()
```

**Returns:** `return`

### shouldConnectTo

```java
protected static boolean shouldConnectTo(BlockState p_55595_, Direction p_55596_)
```

**Parameters:**

- `p_55595_` (`BlockState`)
- `p_55596_` (`Direction`)

**Returns:** `protected static boolean`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_55636_)
```

**Parameters:**

- `p_55636_` (`BlockState`)

**Returns:** `boolean`

### getColorForPower

```java
public static int getColorForPower(int p_55607_)
```

**Parameters:**

- `p_55607_` (`int`)

**Returns:** `public static int`

### spawnParticlesAlongLine

```java
private void spawnParticlesAlongLine(Level p_221923_, RandomSource p_221924_, BlockPos p_221925_, Vec3 p_221926_, Direction p_221927_, Direction p_221928_, float p_221929_, float p_221930_)
```

**Parameters:**

- `p_221923_` (`Level`)
- `p_221924_` (`RandomSource`)
- `p_221925_` (`BlockPos`)
- `p_221926_` (`Vec3`)
- `p_221927_` (`Direction`)
- `p_221928_` (`Direction`)
- `p_221929_` (`float`)
- `p_221930_` (`float`)

**Returns:** `private void`

### animateTick

```java
public void animateTick(BlockState p_221932_, Level p_221933_, BlockPos p_221934_, RandomSource p_221935_)
```

**Parameters:**

- `p_221932_` (`BlockState`)
- `p_221933_` (`Level`)
- `p_221934_` (`BlockPos`)
- `p_221935_` (`RandomSource`)

### rotate

```java
protected BlockState rotate(BlockState p_55592_, Rotation p_55593_)
```

**Parameters:**

- `p_55592_` (`BlockState`)
- `p_55593_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_55589_, Mirror p_55590_)
```

**Parameters:**

- `p_55589_` (`BlockState`)
- `p_55590_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55605_)
```

**Parameters:**

- `p_55605_` (`StateDefinition.Builder<Block, BlockState>`)

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_55554_, Level p_55555_, BlockPos p_55556_, Player p_55557_, BlockHitResult p_55559_)
```

**Parameters:**

- `p_55554_` (`BlockState`)
- `p_55555_` (`Level`)
- `p_55556_` (`BlockPos`)
- `p_55557_` (`Player`)
- `p_55559_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### updatesOnShapeChange

```java
private void updatesOnShapeChange(Level p_55535_, BlockPos p_55536_, BlockState p_55537_, BlockState p_55538_)
```

**Parameters:**

- `p_55535_` (`Level`)
- `p_55536_` (`BlockPos`)
- `p_55537_` (`BlockState`)
- `p_55538_` (`BlockState`)

**Returns:** `private void`
