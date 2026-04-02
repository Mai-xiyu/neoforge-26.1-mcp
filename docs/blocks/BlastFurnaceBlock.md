# BlastFurnaceBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractFurnaceBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BlastFurnaceBlock>` |  |

## Methods

### codec

```java
public MapCodec<BlastFurnaceBlock> codec()
```

**Returns:** `MapCodec<BlastFurnaceBlock>`

### BlastFurnaceBlock

```java
public BlastFurnaceBlock(BlockBehaviour.Properties p_49773_)
```

**Parameters:**

- `p_49773_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_152386_, BlockState p_152387_)
```

**Parameters:**

- `p_152386_` (`BlockPos`)
- `p_152387_` (`BlockState`)

**Returns:** `BlockEntity`

### BlastFurnaceBlockEntity

```java
return new BlastFurnaceBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_152382_, BlockState p_152383_, BlockEntityType<T> p_152384_)
```

**Parameters:**

- `p_152382_` (`Level`)
- `p_152383_` (`BlockState`)
- `p_152384_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createFurnaceTicker

```java
return createFurnaceTicker()
```

**Returns:** `return`

### openContainer

```java
protected void openContainer(Level p_49777_, BlockPos p_49778_, Player p_49779_)
```

**Parameters:**

- `p_49777_` (`Level`)
- `p_49778_` (`BlockPos`)
- `p_49779_` (`Player`)

### animateTick

```java
public void animateTick(BlockState p_220818_, Level p_220819_, BlockPos p_220820_, RandomSource p_220821_)
```

**Parameters:**

- `p_220818_` (`BlockState`)
- `p_220819_` (`Level`)
- `p_220820_` (`BlockPos`)
- `p_220821_` (`RandomSource`)
