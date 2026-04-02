# DispenserBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DispenserBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `TRIGGERED` | `BooleanProperty` |  |
| `DISPENSER_REGISTRY` | `Map<Item, DispenseItemBehavior>` |  |

## Methods

### codec

```java
public MapCodec<? extends DispenserBlock> codec()
```

**Returns:** `MapCodec<? extends DispenserBlock>`

### registerBehavior

```java
public static void registerBehavior(ItemLike p_52673_, DispenseItemBehavior p_52674_)
```

**Parameters:**

- `p_52673_` (`ItemLike`)
- `p_52674_` (`DispenseItemBehavior`)

**Returns:** `public static void`

### registerProjectileBehavior

```java
public static void registerProjectileBehavior(ItemLike p_338817_)
```

**Parameters:**

- `p_338817_` (`ItemLike`)

**Returns:** `public static void`

### DispenserBlock

```java
public DispenserBlock(BlockBehaviour.Properties p_52664_)
```

**Parameters:**

- `p_52664_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_52693_, Level p_52694_, BlockPos p_52695_, Player p_52696_, BlockHitResult p_52698_)
```

**Parameters:**

- `p_52693_` (`BlockState`)
- `p_52694_` (`Level`)
- `p_52695_` (`BlockPos`)
- `p_52696_` (`Player`)
- `p_52698_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### dispenseFrom

```java
protected void dispenseFrom(ServerLevel p_52665_, BlockState p_302451_, BlockPos p_52666_)
```

**Parameters:**

- `p_52665_` (`ServerLevel`)
- `p_302451_` (`BlockState`)
- `p_52666_` (`BlockPos`)

**Returns:** `protected void`

### getDispenseMethod

```java
protected DispenseItemBehavior getDispenseMethod(Level p_341306_, ItemStack p_52667_)
```

**Parameters:**

- `p_341306_` (`Level`)
- `p_52667_` (`ItemStack`)

**Returns:** `protected DispenseItemBehavior`

### neighborChanged

```java
protected void neighborChanged(BlockState p_52700_, Level p_52701_, BlockPos p_52702_, Block p_52703_, BlockPos p_52704_, boolean p_52705_)
```

**Parameters:**

- `p_52700_` (`BlockState`)
- `p_52701_` (`Level`)
- `p_52702_` (`BlockPos`)
- `p_52703_` (`Block`)
- `p_52704_` (`BlockPos`)
- `p_52705_` (`boolean`)

### tick

```java
protected void tick(BlockState p_221075_, ServerLevel p_221076_, BlockPos p_221077_, RandomSource p_221078_)
```

**Parameters:**

- `p_221075_` (`BlockState`)
- `p_221076_` (`ServerLevel`)
- `p_221077_` (`BlockPos`)
- `p_221078_` (`RandomSource`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153162_, BlockState p_153163_)
```

**Parameters:**

- `p_153162_` (`BlockPos`)
- `p_153163_` (`BlockState`)

**Returns:** `BlockEntity`

### DispenserBlockEntity

```java
return new DispenserBlockEntity()
```

**Returns:** `return new`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_52669_)
```

**Parameters:**

- `p_52669_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### onRemove

```java
protected void onRemove(BlockState p_52707_, Level p_52708_, BlockPos p_52709_, BlockState p_52710_, boolean p_52711_)
```

**Parameters:**

- `p_52707_` (`BlockState`)
- `p_52708_` (`Level`)
- `p_52709_` (`BlockPos`)
- `p_52710_` (`BlockState`)
- `p_52711_` (`boolean`)

### getDispensePosition

```java
public static Position getDispensePosition(BlockSource p_302440_)
```

**Parameters:**

- `p_302440_` (`BlockSource`)

**Returns:** `public static Position`

### getDispensePosition

```java
return getDispensePosition()
```

**Returns:** `return`

### getDispensePosition

```java
public static Position getDispensePosition(BlockSource p_338419_, double p_338633_, Vec3 p_338798_)
```

**Parameters:**

- `p_338419_` (`BlockSource`)
- `p_338633_` (`double`)
- `p_338798_` (`Vec3`)

**Returns:** `public static Position`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_52682_)
```

**Parameters:**

- `p_52682_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_52689_, Level p_52690_, BlockPos p_52691_)
```

**Parameters:**

- `p_52689_` (`BlockState`)
- `p_52690_` (`Level`)
- `p_52691_` (`BlockPos`)

**Returns:** `int`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_52725_)
```

**Parameters:**

- `p_52725_` (`BlockState`)

**Returns:** `RenderShape`

### rotate

```java
protected BlockState rotate(BlockState p_52716_, Rotation p_52717_)
```

**Parameters:**

- `p_52716_` (`BlockState`)
- `p_52717_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_52713_, Mirror p_52714_)
```

**Parameters:**

- `p_52713_` (`BlockState`)
- `p_52714_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_52719_)
```

**Parameters:**

- `p_52719_` (`StateDefinition.Builder<Block, BlockState>`)
