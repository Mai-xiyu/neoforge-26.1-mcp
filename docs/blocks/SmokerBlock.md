# SmokerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractFurnaceBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SmokerBlock>` |  |

## Methods

### codec

```java
public MapCodec<SmokerBlock> codec()
```

**Returns:** `MapCodec<SmokerBlock>`

### SmokerBlock

```java
public SmokerBlock(BlockBehaviour.Properties p_56439_)
```

**Parameters:**

- `p_56439_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_154644_, BlockState p_154645_)
```

**Parameters:**

- `p_154644_` (`BlockPos`)
- `p_154645_` (`BlockState`)

**Returns:** `BlockEntity`

### SmokerBlockEntity

```java
return new SmokerBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_154640_, BlockState p_154641_, BlockEntityType<T> p_154642_)
```

**Parameters:**

- `p_154640_` (`Level`)
- `p_154641_` (`BlockState`)
- `p_154642_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createFurnaceTicker

```java
return createFurnaceTicker()
```

**Returns:** `return`

### openContainer

```java
protected void openContainer(Level p_56443_, BlockPos p_56444_, Player p_56445_)
```

**Parameters:**

- `p_56443_` (`Level`)
- `p_56444_` (`BlockPos`)
- `p_56445_` (`Player`)

### animateTick

```java
public void animateTick(BlockState p_222443_, Level p_222444_, BlockPos p_222445_, RandomSource p_222446_)
```

**Parameters:**

- `p_222443_` (`BlockState`)
- `p_222444_` (`Level`)
- `p_222445_` (`BlockPos`)
- `p_222446_` (`RandomSource`)
