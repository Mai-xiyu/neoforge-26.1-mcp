# MultifaceSpreader

**Package:** `net.minecraft.world.level.block`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_SPREAD_ORDER` | `MultifaceSpreader.SpreadType[]` |  |
| `block` | `MultifaceBlock` |  |

## Methods

### MultifaceSpreader

```java
public MultifaceSpreader(MultifaceBlock p_221590_)
```

**Parameters:**

- `p_221590_` (`MultifaceBlock`)

**Returns:** `public`

### MultifaceSpreader

```java
public MultifaceSpreader(MultifaceSpreader.SpreadConfig p_221592_)
```

**Parameters:**

- `p_221592_` (`MultifaceSpreader.SpreadConfig`)

**Returns:** `public`

### canSpreadInAnyDirection

```java
public boolean canSpreadInAnyDirection(BlockState p_221602_, BlockGetter p_221603_, BlockPos p_221604_, Direction p_221605_)
```

**Parameters:**

- `p_221602_` (`BlockState`)
- `p_221603_` (`BlockGetter`)
- `p_221604_` (`BlockPos`)
- `p_221605_` (`Direction`)

**Returns:** `public boolean`

### spreadFromRandomFaceTowardRandomDirection

```java
public Optional<MultifaceSpreader.SpreadPos> spreadFromRandomFaceTowardRandomDirection(BlockState p_221620_, LevelAccessor p_221621_, BlockPos p_221622_, RandomSource p_221623_)
```

**Parameters:**

- `p_221620_` (`BlockState`)
- `p_221621_` (`LevelAccessor`)
- `p_221622_` (`BlockPos`)
- `p_221623_` (`RandomSource`)

**Returns:** `public Optional<MultifaceSpreader.SpreadPos>`

### spreadAll

```java
public long spreadAll(BlockState p_221658_, LevelAccessor p_221659_, BlockPos p_221660_, boolean p_221661_)
```

**Parameters:**

- `p_221658_` (`BlockState`)
- `p_221659_` (`LevelAccessor`)
- `p_221660_` (`BlockPos`)
- `p_221661_` (`boolean`)

**Returns:** `public long`

### spreadFromFaceTowardRandomDirection

```java
public Optional<MultifaceSpreader.SpreadPos> spreadFromFaceTowardRandomDirection(BlockState p_221631_, LevelAccessor p_221632_, BlockPos p_221633_, Direction p_221634_, RandomSource p_221635_, boolean p_221636_)
```

**Parameters:**

- `p_221631_` (`BlockState`)
- `p_221632_` (`LevelAccessor`)
- `p_221633_` (`BlockPos`)
- `p_221634_` (`Direction`)
- `p_221635_` (`RandomSource`)
- `p_221636_` (`boolean`)

**Returns:** `public Optional<MultifaceSpreader.SpreadPos>`

### spreadFromFaceTowardAllDirections

```java
private long spreadFromFaceTowardAllDirections(BlockState p_221645_, LevelAccessor p_221646_, BlockPos p_221647_, Direction p_221648_, boolean p_221649_)
```

**Parameters:**

- `p_221645_` (`BlockState`)
- `p_221646_` (`LevelAccessor`)
- `p_221647_` (`BlockPos`)
- `p_221648_` (`Direction`)
- `p_221649_` (`boolean`)

**Returns:** `private long`

### spreadFromFaceTowardDirection

```java
public Optional<MultifaceSpreader.SpreadPos> spreadFromFaceTowardDirection(BlockState p_221638_, LevelAccessor p_221639_, BlockPos p_221640_, Direction p_221641_, Direction p_221642_, boolean p_221643_)
```

**Parameters:**

- `p_221638_` (`BlockState`)
- `p_221639_` (`LevelAccessor`)
- `p_221640_` (`BlockPos`)
- `p_221641_` (`Direction`)
- `p_221642_` (`Direction`)
- `p_221643_` (`boolean`)

**Returns:** `Optional<MultifaceSpreader.SpreadPos>`

### getSpreadFromFaceTowardDirection

```java
public Optional<MultifaceSpreader.SpreadPos> getSpreadFromFaceTowardDirection(BlockState p_221613_, BlockGetter p_221614_, BlockPos p_221615_, Direction p_221616_, Direction p_221617_, MultifaceSpreader.SpreadPredicate p_221618_)
```

**Parameters:**

- `p_221613_` (`BlockState`)
- `p_221614_` (`BlockGetter`)
- `p_221615_` (`BlockPos`)
- `p_221616_` (`Direction`)
- `p_221617_` (`Direction`)
- `p_221618_` (`MultifaceSpreader.SpreadPredicate`)

**Returns:** `public Optional<MultifaceSpreader.SpreadPos>`

### spreadToFace

```java
public Optional<MultifaceSpreader.SpreadPos> spreadToFace(LevelAccessor p_221594_, MultifaceSpreader.SpreadPos p_221595_, boolean p_221596_)
```

**Parameters:**

- `p_221594_` (`LevelAccessor`)
- `p_221595_` (`MultifaceSpreader.SpreadPos`)
- `p_221596_` (`boolean`)

**Returns:** `public Optional<MultifaceSpreader.SpreadPos>`

### DefaultSpreaderConfig

```java
public DefaultSpreaderConfig(MultifaceBlock p_221683_)
```

**Parameters:**

- `p_221683_` (`MultifaceBlock`)

**Returns:** `public`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockState p_221694_, BlockGetter p_221695_, BlockPos p_221696_, Direction p_221697_)
```

**Parameters:**

- `p_221694_` (`BlockState`)
- `p_221695_` (`BlockGetter`)
- `p_221696_` (`BlockPos`)
- `p_221697_` (`Direction`)

**Returns:** `BlockState`

### stateCanBeReplaced

```java
protected boolean stateCanBeReplaced(BlockGetter p_221688_, BlockPos p_221689_, BlockPos p_221690_, Direction p_221691_, BlockState p_221692_)
```

**Parameters:**

- `p_221688_` (`BlockGetter`)
- `p_221689_` (`BlockPos`)
- `p_221690_` (`BlockPos`)
- `p_221691_` (`Direction`)
- `p_221692_` (`BlockState`)

**Returns:** `protected boolean`

### canSpreadInto

```java
public boolean canSpreadInto(BlockGetter p_221685_, BlockPos p_221686_, MultifaceSpreader.SpreadPos p_221687_)
```

**Parameters:**

- `p_221685_` (`BlockGetter`)
- `p_221686_` (`BlockPos`)
- `p_221687_` (`MultifaceSpreader.SpreadPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
BlockState getStateForPlacement(BlockState p_221707_, BlockGetter p_221708_, BlockPos p_221709_, Direction p_221710_)
```

**Parameters:**

- `p_221707_` (`BlockState`)
- `p_221708_` (`BlockGetter`)
- `p_221709_` (`BlockPos`)
- `p_221710_` (`Direction`)

**Returns:** `BlockState`

### canSpreadInto

```java
boolean canSpreadInto(BlockGetter p_221698_, BlockPos p_221699_, MultifaceSpreader.SpreadPos p_221700_)
```

**Parameters:**

- `p_221698_` (`BlockGetter`)
- `p_221699_` (`BlockPos`)
- `p_221700_` (`MultifaceSpreader.SpreadPos`)

**Returns:** `boolean`

### getSpreadTypes

```java
default MultifaceSpreader.SpreadType[] getSpreadTypes()
```

**Returns:** `default MultifaceSpreader.SpreadType[]`

### hasFace

```java
default boolean hasFace(BlockState p_221712_, Direction p_221713_)
```

**Parameters:**

- `p_221712_` (`BlockState`)
- `p_221713_` (`Direction`)

**Returns:** `default boolean`

### isOtherBlockValidAsSource

```java
default boolean isOtherBlockValidAsSource(BlockState p_221706_)
```

**Parameters:**

- `p_221706_` (`BlockState`)

**Returns:** `default boolean`

### canSpreadFrom

```java
default boolean canSpreadFrom(BlockState p_221715_, Direction p_221716_)
```

**Parameters:**

- `p_221715_` (`BlockState`)
- `p_221716_` (`Direction`)

**Returns:** `default boolean`

### placeBlock

```java
default boolean placeBlock(LevelAccessor p_221702_, MultifaceSpreader.SpreadPos p_221703_, BlockState p_221704_, boolean p_221705_)
```

**Parameters:**

- `p_221702_` (`LevelAccessor`)
- `p_221703_` (`MultifaceSpreader.SpreadPos`)
- `p_221704_` (`BlockState`)
- `p_221705_` (`boolean`)

**Returns:** `default boolean`

### SpreadPos

```java
public static record SpreadPos(BlockPos pos, Direction face)
```

**Parameters:**

- `pos` (`BlockPos`)
- `face` (`Direction`)

**Returns:** `public static record`

### test

```java
boolean test(BlockGetter p_221729_, BlockPos p_221730_, MultifaceSpreader.SpreadPos p_221731_)
```

**Parameters:**

- `p_221729_` (`BlockGetter`)
- `p_221730_` (`BlockPos`)
- `p_221731_` (`MultifaceSpreader.SpreadPos`)

**Returns:** `boolean`

### getSpreadPos

```java
public MultifaceSpreader.SpreadPos getSpreadPos(BlockPos p_221751_, Direction p_221752_, Direction p_221753_)
```

**Parameters:**

- `p_221751_` (`BlockPos`)
- `p_221752_` (`Direction`)
- `p_221753_` (`Direction`)

**Returns:** `MultifaceSpreader.SpreadPos`

### getSpreadPos

```java
public MultifaceSpreader.SpreadPos getSpreadPos(BlockPos p_221758_, Direction p_221759_, Direction p_221760_)
```

**Parameters:**

- `p_221758_` (`BlockPos`)
- `p_221759_` (`Direction`)
- `p_221760_` (`Direction`)

**Returns:** `MultifaceSpreader.SpreadPos`

### getSpreadPos

```java
public MultifaceSpreader.SpreadPos getSpreadPos(BlockPos p_221765_, Direction p_221766_, Direction p_221767_)
```

**Parameters:**

- `p_221765_` (`BlockPos`)
- `p_221766_` (`Direction`)
- `p_221767_` (`Direction`)

**Returns:** `MultifaceSpreader.SpreadPos`

### getSpreadPos

```java
public abstract MultifaceSpreader.SpreadPos getSpreadPos(BlockPos p_221741_, Direction p_221742_, Direction p_221743_)
```

**Parameters:**

- `p_221741_` (`BlockPos`)
- `p_221742_` (`Direction`)
- `p_221743_` (`Direction`)

**Returns:** `public abstract MultifaceSpreader.SpreadPos`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DefaultSpreaderConfig` | class |  |
| `SpreadConfig` | interface |  |
| `SpreadPos` | record |  |
| `SpreadPredicate` | interface |  |
| `SpreadType` | enum |  |
