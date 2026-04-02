# NoteBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NoteBlock>` |  |
| `INSTRUMENT` | `EnumProperty<NoteBlockInstrument>` |  |
| `POWERED` | `BooleanProperty` |  |
| `NOTE` | `IntegerProperty` |  |
| `NOTE_VOLUME` | `int` |  |

## Methods

### codec

```java
public MapCodec<NoteBlock> codec()
```

**Returns:** `MapCodec<NoteBlock>`

### NoteBlock

```java
public NoteBlock(BlockBehaviour.Properties p_55016_)
```

**Parameters:**

- `p_55016_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setInstrument

```java
private BlockState setInstrument(LevelAccessor p_262117_, BlockPos p_261908_, BlockState p_262130_)
```

**Parameters:**

- `p_262117_` (`LevelAccessor`)
- `p_261908_` (`BlockPos`)
- `p_262130_` (`BlockState`)

**Returns:** `private BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_55018_)
```

**Parameters:**

- `p_55018_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_55048_, Direction p_55049_, BlockState p_55050_, LevelAccessor p_55051_, BlockPos p_55052_, BlockPos p_55053_)
```

**Parameters:**

- `p_55048_` (`BlockState`)
- `p_55049_` (`Direction`)
- `p_55050_` (`BlockState`)
- `p_55051_` (`LevelAccessor`)
- `p_55052_` (`BlockPos`)
- `p_55053_` (`BlockPos`)

**Returns:** `BlockState`

### neighborChanged

```java
protected void neighborChanged(BlockState p_55041_, Level p_55042_, BlockPos p_55043_, Block p_55044_, BlockPos p_55045_, boolean p_55046_)
```

**Parameters:**

- `p_55041_` (`BlockState`)
- `p_55042_` (`Level`)
- `p_55043_` (`BlockPos`)
- `p_55044_` (`Block`)
- `p_55045_` (`BlockPos`)
- `p_55046_` (`boolean`)

### playNote

```java
private void playNote(Entity p_261664_, BlockState p_261606_, Level p_261819_, BlockPos p_262042_)
```

**Parameters:**

- `p_261664_` (`Entity`)
- `p_261606_` (`BlockState`)
- `p_261819_` (`Level`)
- `p_262042_` (`BlockPos`)

**Returns:** `private void`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316716_, BlockState p_316688_, Level p_316672_, BlockPos p_316355_, Player p_316822_, InteractionHand p_316505_, BlockHitResult p_316667_)
```

**Parameters:**

- `p_316716_` (`ItemStack`)
- `p_316688_` (`BlockState`)
- `p_316672_` (`Level`)
- `p_316355_` (`BlockPos`)
- `p_316822_` (`Player`)
- `p_316505_` (`InteractionHand`)
- `p_316667_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316441_, Level p_316774_, BlockPos p_316344_, Player p_316884_, BlockHitResult p_316631_)
```

**Parameters:**

- `p_316441_` (`BlockState`)
- `p_316774_` (`Level`)
- `p_316344_` (`BlockPos`)
- `p_316884_` (`Player`)
- `p_316631_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### attack

```java
protected void attack(BlockState p_55029_, Level p_55030_, BlockPos p_55031_, Player p_55032_)
```

**Parameters:**

- `p_55029_` (`BlockState`)
- `p_55030_` (`Level`)
- `p_55031_` (`BlockPos`)
- `p_55032_` (`Player`)

### getPitchFromNote

```java
public static float getPitchFromNote(int p_277409_)
```

**Parameters:**

- `p_277409_` (`int`)

**Returns:** `public static float`

### triggerEvent

```java
protected boolean triggerEvent(BlockState p_55023_, Level p_55024_, BlockPos p_55025_, int p_55026_, int p_55027_)
```

**Parameters:**

- `p_55023_` (`BlockState`)
- `p_55024_` (`Level`)
- `p_55025_` (`BlockPos`)
- `p_55026_` (`int`)
- `p_55027_` (`int`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55055_)
```

**Parameters:**

- `p_55055_` (`StateDefinition.Builder<Block, BlockState>`)
