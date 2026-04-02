# ChorusFlowerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ChorusFlowerBlock>` |  |
| `DEAD_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |
| `BLOCK_SUPPORT_SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<ChorusFlowerBlock> codec()
```

**Returns:** `MapCodec<ChorusFlowerBlock>`

### ChorusFlowerBlock

```java
public ChorusFlowerBlock(Block p_304388_, BlockBehaviour.Properties p_51652_)
```

**Parameters:**

- `p_304388_` (`Block`)
- `p_51652_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
protected void tick(BlockState p_220975_, ServerLevel p_220976_, BlockPos p_220977_, RandomSource p_220978_)
```

**Parameters:**

- `p_220975_` (`BlockState`)
- `p_220976_` (`ServerLevel`)
- `p_220977_` (`BlockPos`)
- `p_220978_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_51696_)
```

**Parameters:**

- `p_51696_` (`BlockState`)

**Returns:** `boolean`

### getBlockSupportShape

```java
public VoxelShape getBlockSupportShape(BlockState p_294099_, BlockGetter p_294531_, BlockPos p_295431_)
```

**Parameters:**

- `p_294099_` (`BlockState`)
- `p_294531_` (`BlockGetter`)
- `p_295431_` (`BlockPos`)

**Returns:** `VoxelShape`

### randomTick

```java
protected void randomTick(BlockState p_220980_, ServerLevel p_220981_, BlockPos p_220982_, RandomSource p_220983_)
```

**Parameters:**

- `p_220980_` (`BlockState`)
- `p_220981_` (`ServerLevel`)
- `p_220982_` (`BlockPos`)
- `p_220983_` (`RandomSource`)

### placeGrownFlower

```java
private void placeGrownFlower(Level p_51662_, BlockPos p_51663_, int p_51664_)
```

**Parameters:**

- `p_51662_` (`Level`)
- `p_51663_` (`BlockPos`)
- `p_51664_` (`int`)

**Returns:** `private void`

### placeDeadFlower

```java
private void placeDeadFlower(Level p_51659_, BlockPos p_51660_)
```

**Parameters:**

- `p_51659_` (`Level`)
- `p_51660_` (`BlockPos`)

**Returns:** `private void`

### allNeighborsEmpty

```java
private static boolean allNeighborsEmpty(LevelReader p_51698_, BlockPos p_51699_, Direction p_51700_)
```

**Parameters:**

- `p_51698_` (`LevelReader`)
- `p_51699_` (`BlockPos`)
- `p_51700_` (`Direction`)

**Returns:** `private static boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_51687_, Direction p_51688_, BlockState p_51689_, LevelAccessor p_51690_, BlockPos p_51691_, BlockPos p_51692_)
```

**Parameters:**

- `p_51687_` (`BlockState`)
- `p_51688_` (`Direction`)
- `p_51689_` (`BlockState`)
- `p_51690_` (`LevelAccessor`)
- `p_51691_` (`BlockPos`)
- `p_51692_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_51683_, LevelReader p_51684_, BlockPos p_51685_)
```

**Parameters:**

- `p_51683_` (`BlockState`)
- `p_51684_` (`LevelReader`)
- `p_51685_` (`BlockPos`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51694_)
```

**Parameters:**

- `p_51694_` (`StateDefinition.Builder<Block, BlockState>`)

### generatePlant

```java
public static void generatePlant(LevelAccessor p_220963_, BlockPos p_220964_, RandomSource p_220965_, int p_220966_)
```

**Parameters:**

- `p_220963_` (`LevelAccessor`)
- `p_220964_` (`BlockPos`)
- `p_220965_` (`RandomSource`)
- `p_220966_` (`int`)

**Returns:** `public static void`

### growTreeRecursive

```java
 growTreeRecursive()
```

**Returns:** ``

### growTreeRecursive

```java
private static void growTreeRecursive(LevelAccessor p_220968_, BlockPos p_220969_, RandomSource p_220970_, BlockPos p_220971_, int p_220972_, int p_220973_)
```

**Parameters:**

- `p_220968_` (`LevelAccessor`)
- `p_220969_` (`BlockPos`)
- `p_220970_` (`RandomSource`)
- `p_220971_` (`BlockPos`)
- `p_220972_` (`int`)
- `p_220973_` (`int`)

**Returns:** `private static void`

### growTreeRecursive

```java
 growTreeRecursive(p_220973_ + 1)
```

**Parameters:**

- `1` (`p_220973_ +`)

**Returns:** ``

### onProjectileHit

```java
protected void onProjectileHit(Level p_51654_, BlockState p_51655_, BlockHitResult p_51656_, Projectile p_51657_)
```

**Parameters:**

- `p_51654_` (`Level`)
- `p_51655_` (`BlockState`)
- `p_51656_` (`BlockHitResult`)
- `p_51657_` (`Projectile`)
