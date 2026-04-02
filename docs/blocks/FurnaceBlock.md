# FurnaceBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractFurnaceBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FurnaceBlock>` |  |

## Methods

### codec

```java
public MapCodec<FurnaceBlock> codec()
```

**Returns:** `MapCodec<FurnaceBlock>`

### FurnaceBlock

```java
public FurnaceBlock(BlockBehaviour.Properties p_53627_)
```

**Parameters:**

- `p_53627_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153277_, BlockState p_153278_)
```

**Parameters:**

- `p_153277_` (`BlockPos`)
- `p_153278_` (`BlockState`)

**Returns:** `BlockEntity`

### FurnaceBlockEntity

```java
return new FurnaceBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_153273_, BlockState p_153274_, BlockEntityType<T> p_153275_)
```

**Parameters:**

- `p_153273_` (`Level`)
- `p_153274_` (`BlockState`)
- `p_153275_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createFurnaceTicker

```java
return createFurnaceTicker()
```

**Returns:** `return`

### openContainer

```java
protected void openContainer(Level p_53631_, BlockPos p_53632_, Player p_53633_)
```

**Parameters:**

- `p_53631_` (`Level`)
- `p_53632_` (`BlockPos`)
- `p_53633_` (`Player`)

### animateTick

```java
public void animateTick(BlockState p_221253_, Level p_221254_, BlockPos p_221255_, RandomSource p_221256_)
```

**Parameters:**

- `p_221253_` (`BlockState`)
- `p_221254_` (`Level`)
- `p_221255_` (`BlockPos`)
- `p_221256_` (`RandomSource`)
