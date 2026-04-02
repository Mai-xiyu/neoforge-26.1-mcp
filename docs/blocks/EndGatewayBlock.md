# EndGatewayBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `Portal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EndGatewayBlock>` |  |

## Methods

### codec

```java
public MapCodec<EndGatewayBlock> codec()
```

**Returns:** `MapCodec<EndGatewayBlock>`

### EndGatewayBlock

```java
public EndGatewayBlock(BlockBehaviour.Properties p_52999_)
```

**Parameters:**

- `p_52999_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153193_, BlockState p_153194_)
```

**Parameters:**

- `p_153193_` (`BlockPos`)
- `p_153194_` (`BlockState`)

**Returns:** `BlockEntity`

### TheEndGatewayBlockEntity

```java
return new TheEndGatewayBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_153189_, BlockState p_153190_, BlockEntityType<T> p_153191_)
```

**Parameters:**

- `p_153189_` (`Level`)
- `p_153190_` (`BlockState`)
- `p_153191_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper(p_153189_.isClientSide ? TheEndGatewayBlockEntity::beamAnimationTick : TheEndGatewayBlockEntity::portalTick)
```

**Parameters:**

- `TheEndGatewayBlockEntity::portalTick` (`p_153189_.isClientSide ? TheEndGatewayBlockEntity::beamAnimationTick :`)

**Returns:** `return`

### animateTick

```java
public void animateTick(BlockState p_221097_, Level p_221098_, BlockPos p_221099_, RandomSource p_221100_)
```

**Parameters:**

- `p_221097_` (`BlockState`)
- `p_221098_` (`Level`)
- `p_221099_` (`BlockPos`)
- `p_221100_` (`RandomSource`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304768_, BlockPos p_53004_, BlockState p_53005_)
```

**Parameters:**

- `p_304768_` (`LevelReader`)
- `p_53004_` (`BlockPos`)
- `p_53005_` (`BlockState`)

**Returns:** `ItemStack`

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_53012_, Fluid p_53013_)
```

**Parameters:**

- `p_53012_` (`BlockState`)
- `p_53013_` (`Fluid`)

**Returns:** `boolean`

### entityInside

```java
protected void entityInside(BlockState p_350647_, Level p_350785_, BlockPos p_350610_, Entity p_350849_)
```

**Parameters:**

- `p_350647_` (`BlockState`)
- `p_350785_` (`Level`)
- `p_350610_` (`BlockPos`)
- `p_350849_` (`Entity`)

### getPortalDestination

```java
public DimensionTransition getPortalDestination(ServerLevel p_350958_, Entity p_350650_, BlockPos p_350525_)
```

**Parameters:**

- `p_350958_` (`ServerLevel`)
- `p_350650_` (`Entity`)
- `p_350525_` (`BlockPos`)

**Returns:** `DimensionTransition`

### calculateExitMovement

```java
private static Vec3 calculateExitMovement(Entity p_352063_)
```

**Parameters:**

- `p_352063_` (`Entity`)

**Returns:** `private static Vec3`
