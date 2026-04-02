# TurtleEggBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TurtleEggBlock>` |  |
| `MAX_HATCH_LEVEL` | `int` |  |
| `MIN_EGGS` | `int` |  |
| `MAX_EGGS` | `int` |  |
| `HATCH` | `IntegerProperty` |  |
| `EGGS` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<TurtleEggBlock> codec()
```

**Returns:** `MapCodec<TurtleEggBlock>`

### TurtleEggBlock

```java
public TurtleEggBlock(BlockBehaviour.Properties p_57759_)
```

**Parameters:**

- `p_57759_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### stepOn

```java
public void stepOn(Level p_154857_, BlockPos p_154858_, BlockState p_154859_, Entity p_154860_)
```

**Parameters:**

- `p_154857_` (`Level`)
- `p_154858_` (`BlockPos`)
- `p_154859_` (`BlockState`)
- `p_154860_` (`Entity`)

### fallOn

```java
public void fallOn(Level p_154845_, BlockState p_154846_, BlockPos p_154847_, Entity p_154848_, float p_154849_)
```

**Parameters:**

- `p_154845_` (`Level`)
- `p_154846_` (`BlockState`)
- `p_154847_` (`BlockPos`)
- `p_154848_` (`Entity`)
- `p_154849_` (`float`)

### destroyEgg

```java
private void destroyEgg(Level p_154851_, BlockState p_154852_, BlockPos p_154853_, Entity p_154854_, int p_154855_)
```

**Parameters:**

- `p_154851_` (`Level`)
- `p_154852_` (`BlockState`)
- `p_154853_` (`BlockPos`)
- `p_154854_` (`Entity`)
- `p_154855_` (`int`)

**Returns:** `private void`

### decreaseEggs

```java
private void decreaseEggs(Level p_57792_, BlockPos p_57793_, BlockState p_57794_)
```

**Parameters:**

- `p_57792_` (`Level`)
- `p_57793_` (`BlockPos`)
- `p_57794_` (`BlockState`)

**Returns:** `private void`

### randomTick

```java
protected void randomTick(BlockState p_222644_, ServerLevel p_222645_, BlockPos p_222646_, RandomSource p_222647_)
```

**Parameters:**

- `p_222644_` (`BlockState`)
- `p_222645_` (`ServerLevel`)
- `p_222646_` (`BlockPos`)
- `p_222647_` (`RandomSource`)

### onSand

```java
public static boolean onSand(BlockGetter p_57763_, BlockPos p_57764_)
```

**Parameters:**

- `p_57763_` (`BlockGetter`)
- `p_57764_` (`BlockPos`)

**Returns:** `public static boolean`

### isSand

```java
public static boolean isSand(BlockGetter p_57801_, BlockPos p_57802_)
```

**Parameters:**

- `p_57801_` (`BlockGetter`)
- `p_57802_` (`BlockPos`)

**Returns:** `public static boolean`

### onPlace

```java
protected void onPlace(BlockState p_57814_, Level p_57815_, BlockPos p_57816_, BlockState p_57817_, boolean p_57818_)
```

**Parameters:**

- `p_57814_` (`BlockState`)
- `p_57815_` (`Level`)
- `p_57816_` (`BlockPos`)
- `p_57817_` (`BlockState`)
- `p_57818_` (`boolean`)

### shouldUpdateHatchLevel

```java
private boolean shouldUpdateHatchLevel(Level p_57766_)
```

**Parameters:**

- `p_57766_` (`Level`)

**Returns:** `private boolean`

### playerDestroy

```java
public void playerDestroy(Level p_57771_, Player p_57772_, BlockPos p_57773_, BlockState p_57774_, BlockEntity p_57775_, ItemStack p_57776_)
```

**Parameters:**

- `p_57771_` (`Level`)
- `p_57772_` (`Player`)
- `p_57773_` (`BlockPos`)
- `p_57774_` (`BlockState`)
- `p_57775_` (`BlockEntity`)
- `p_57776_` (`ItemStack`)

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_57796_, BlockPlaceContext p_57797_)
```

**Parameters:**

- `p_57796_` (`BlockState`)
- `p_57797_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_57761_)
```

**Parameters:**

- `p_57761_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_57809_, BlockGetter p_57810_, BlockPos p_57811_, CollisionContext p_57812_)
```

**Parameters:**

- `p_57809_` (`BlockState`)
- `p_57810_` (`BlockGetter`)
- `p_57811_` (`BlockPos`)
- `p_57812_` (`CollisionContext`)

**Returns:** `VoxelShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57799_)
```

**Parameters:**

- `p_57799_` (`StateDefinition.Builder<Block, BlockState>`)

### canDestroyEgg

```java
private boolean canDestroyEgg(Level p_57768_, Entity p_57769_)
```

**Parameters:**

- `p_57768_` (`Level`)
- `p_57769_` (`Entity`)

**Returns:** `private boolean`
