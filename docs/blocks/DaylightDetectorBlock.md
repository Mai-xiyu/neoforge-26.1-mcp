# DaylightDetectorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DaylightDetectorBlock>` |  |
| `POWER` | `IntegerProperty` |  |
| `INVERTED` | `BooleanProperty` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<DaylightDetectorBlock> codec()
```

**Returns:** `MapCodec<DaylightDetectorBlock>`

### DaylightDetectorBlock

```java
public DaylightDetectorBlock(BlockBehaviour.Properties p_52382_)
```

**Parameters:**

- `p_52382_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_52402_, BlockGetter p_52403_, BlockPos p_52404_, CollisionContext p_52405_)
```

**Parameters:**

- `p_52402_` (`BlockState`)
- `p_52403_` (`BlockGetter`)
- `p_52404_` (`BlockPos`)
- `p_52405_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_52409_)
```

**Parameters:**

- `p_52409_` (`BlockState`)

**Returns:** `boolean`

### getSignal

```java
protected int getSignal(BlockState p_52386_, BlockGetter p_52387_, BlockPos p_52388_, Direction p_52389_)
```

**Parameters:**

- `p_52386_` (`BlockState`)
- `p_52387_` (`BlockGetter`)
- `p_52388_` (`BlockPos`)
- `p_52389_` (`Direction`)

**Returns:** `int`

### updateSignalStrength

```java
private static void updateSignalStrength(BlockState p_52411_, Level p_52412_, BlockPos p_52413_)
```

**Parameters:**

- `p_52411_` (`BlockState`)
- `p_52412_` (`Level`)
- `p_52413_` (`BlockPos`)

**Returns:** `private static void`

### getTicker

```java
< (float) Math.PI ? 0.0F : (float) (Math.PI * 2);
            f += (f1 - f) * 0.2F;
            i = Math.round((float)i * Mth.cos(f));
        }

        i = Mth.clamp(i, 0, 15);
        if (p_52411_.getValue(POWER) != i) {
            p_52412_.setBlock(p_52413_, p_52411_.setValue(POWER, Integer.valueOf(i)), 3);
        }
    }

    @Override
    protected InteractionResult useWithoutItem(BlockState p_52391_, Level p_52392_, BlockPos p_52393_, Player p_52394_, BlockHitResult p_52396_) {
        if (p_52394_.mayBuild()) {
            if (p_52392_.isClientSide) {
                return InteractionResult.SUCCESS;
            } else {
                BlockState blockstate = p_52391_.cycle(INVERTED);
                p_52392_.setBlock(p_52393_, blockstate, 2);
                p_52392_.gameEvent(GameEvent.BLOCK_CHANGE, p_52393_, GameEvent.Context.of(p_52394_, blockstate));
                updateSignalStrength(blockstate, p_52392_, p_52393_);
                return InteractionResult.CONSUME;
            }
        } else {
            return super.useWithoutItem(p_52391_, p_52392_, p_52393_, p_52394_, p_52396_);
        }
    }

    @Override
    protected RenderShape getRenderShape(BlockState p_52400_) {
        return RenderShape.MODEL;
    }

    @Override
    protected boolean isSignalSource(BlockState p_52407_) {
        return true;
    }

    @Override
    public BlockEntity newBlockEntity(BlockPos p_153118_, BlockState p_153119_) {
        return new DaylightDetectorBlockEntity(p_153118_, p_153119_);
    }

    @Nullable
    @Override
    public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_153109_, BlockState p_153110_, BlockEntityType<T> p_153111_)
```

**Parameters:**

- `p_153109_` (`Level`)
- `p_153110_` (`BlockState`)
- `p_153111_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### tickEntity

```java
private static void tickEntity(Level p_153113_, BlockPos p_153114_, BlockState p_153115_, DaylightDetectorBlockEntity p_153116_)
```

**Parameters:**

- `p_153113_` (`Level`)
- `p_153114_` (`BlockPos`)
- `p_153115_` (`BlockState`)
- `p_153116_` (`DaylightDetectorBlockEntity`)

**Returns:** `private static void`

### updateSignalStrength

```java
 updateSignalStrength()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_52398_)
```

**Parameters:**

- `p_52398_` (`StateDefinition.Builder<Block, BlockState>`)
