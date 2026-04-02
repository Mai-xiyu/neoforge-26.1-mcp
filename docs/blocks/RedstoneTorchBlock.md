# RedstoneTorchBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseTorchBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RedstoneTorchBlock>` |  |
| `LIT` | `BooleanProperty` |  |
| `RECENT_TOGGLE_TIMER` | `int` |  |
| `MAX_RECENT_TOGGLES` | `int` |  |
| `RESTART_DELAY` | `int` |  |

## Methods

### codec

```java
public MapCodec<? extends RedstoneTorchBlock> codec()
```

**Returns:** `MapCodec<? extends RedstoneTorchBlock>`

### RedstoneTorchBlock

```java
public RedstoneTorchBlock(BlockBehaviour.Properties p_55678_)
```

**Parameters:**

- `p_55678_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onPlace

```java
protected void onPlace(BlockState p_55724_, Level p_55725_, BlockPos p_55726_, BlockState p_55727_, boolean p_55728_)
```

**Parameters:**

- `p_55724_` (`BlockState`)
- `p_55725_` (`Level`)
- `p_55726_` (`BlockPos`)
- `p_55727_` (`BlockState`)
- `p_55728_` (`boolean`)

### onRemove

```java
protected void onRemove(BlockState p_55706_, Level p_55707_, BlockPos p_55708_, BlockState p_55709_, boolean p_55710_)
```

**Parameters:**

- `p_55706_` (`BlockState`)
- `p_55707_` (`Level`)
- `p_55708_` (`BlockPos`)
- `p_55709_` (`BlockState`)
- `p_55710_` (`boolean`)

### getSignal

```java
protected int getSignal(BlockState p_55694_, BlockGetter p_55695_, BlockPos p_55696_, Direction p_55697_)
```

**Parameters:**

- `p_55694_` (`BlockState`)
- `p_55695_` (`BlockGetter`)
- `p_55696_` (`BlockPos`)
- `p_55697_` (`Direction`)

**Returns:** `int`

### hasNeighborSignal

```java
protected boolean hasNeighborSignal(Level p_55681_, BlockPos p_55682_, BlockState p_55683_)
```

**Parameters:**

- `p_55681_` (`Level`)
- `p_55682_` (`BlockPos`)
- `p_55683_` (`BlockState`)

**Returns:** `protected boolean`

### tick

```java
protected void tick(BlockState p_221949_, ServerLevel p_221950_, BlockPos p_221951_, RandomSource p_221952_)
```

**Parameters:**

- `p_221949_` (`BlockState`)
- `p_221950_` (`ServerLevel`)
- `p_221951_` (`BlockPos`)
- `p_221952_` (`RandomSource`)

### neighborChanged

```java
protected void neighborChanged(BlockState p_55699_, Level p_55700_, BlockPos p_55701_, Block p_55702_, BlockPos p_55703_, boolean p_55704_)
```

**Parameters:**

- `p_55699_` (`BlockState`)
- `p_55700_` (`Level`)
- `p_55701_` (`BlockPos`)
- `p_55702_` (`Block`)
- `p_55703_` (`BlockPos`)
- `p_55704_` (`boolean`)

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_55719_, BlockGetter p_55720_, BlockPos p_55721_, Direction p_55722_)
```

**Parameters:**

- `p_55719_` (`BlockState`)
- `p_55720_` (`BlockGetter`)
- `p_55721_` (`BlockPos`)
- `p_55722_` (`Direction`)

**Returns:** `int`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_55730_)
```

**Parameters:**

- `p_55730_` (`BlockState`)

**Returns:** `boolean`

### animateTick

```java
public void animateTick(BlockState p_221954_, Level p_221955_, BlockPos p_221956_, RandomSource p_221957_)
```

**Parameters:**

- `p_221954_` (`BlockState`)
- `p_221955_` (`Level`)
- `p_221956_` (`BlockPos`)
- `p_221957_` (`RandomSource`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55717_)
```

**Parameters:**

- `p_55717_` (`StateDefinition.Builder<Block, BlockState>`)

### isToggledTooFrequently

```java
private static boolean isToggledTooFrequently(Level p_55685_, BlockPos p_55686_, boolean p_55687_)
```

**Parameters:**

- `p_55685_` (`Level`)
- `p_55686_` (`BlockPos`)
- `p_55687_` (`boolean`)

**Returns:** `private static boolean`

### Toggle

```java
public Toggle(BlockPos p_55734_, long p_55735_)
```

**Parameters:**

- `p_55734_` (`BlockPos`)
- `p_55735_` (`long`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Toggle` | class |  |
