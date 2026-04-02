# BeaconBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `BeaconBeamBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BeaconBlock>` |  |

## Methods

### codec

```java
public MapCodec<BeaconBlock> codec()
```

**Returns:** `MapCodec<BeaconBlock>`

### BeaconBlock

```java
public BeaconBlock(BlockBehaviour.Properties p_49421_)
```

**Parameters:**

- `p_49421_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getColor

```java
public DyeColor getColor()
```

**Returns:** `DyeColor`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_152164_, BlockState p_152165_)
```

**Parameters:**

- `p_152164_` (`BlockPos`)
- `p_152165_` (`BlockState`)

**Returns:** `BlockEntity`

### BeaconBlockEntity

```java
return new BeaconBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_152160_, BlockState p_152161_, BlockEntityType<T> p_152162_)
```

**Parameters:**

- `p_152160_` (`Level`)
- `p_152161_` (`BlockState`)
- `p_152162_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper()
```

**Returns:** `return`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_49432_, Level p_49433_, BlockPos p_49434_, Player p_49435_, BlockHitResult p_49437_)
```

**Parameters:**

- `p_49432_` (`BlockState`)
- `p_49433_` (`Level`)
- `p_49434_` (`BlockPos`)
- `p_49435_` (`Player`)
- `p_49437_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_49439_)
```

**Parameters:**

- `p_49439_` (`BlockState`)

**Returns:** `RenderShape`
