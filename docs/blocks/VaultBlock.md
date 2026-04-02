# VaultBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<VaultBlock>` |  |
| `STATE` | `Property<VaultState>` |  |
| `FACING` | `DirectionProperty` |  |
| `OMINOUS` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<VaultBlock> codec()
```

**Returns:** `MapCodec<VaultBlock>`

### VaultBlock

```java
public VaultBlock(BlockBehaviour.Properties p_324605_)
```

**Parameters:**

- `p_324605_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useItemOn

```java
public ItemInteractionResult useItemOn(ItemStack p_324161_, BlockState p_323816_, Level p_324403_, BlockPos p_324623_, Player p_324219_, InteractionHand p_324416_, BlockHitResult p_324261_)
```

**Parameters:**

- `p_324161_` (`ItemStack`)
- `p_323816_` (`BlockState`)
- `p_324403_` (`Level`)
- `p_324623_` (`BlockPos`)
- `p_324219_` (`Player`)
- `p_324416_` (`InteractionHand`)
- `p_324261_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_324543_, BlockState p_323652_)
```

**Parameters:**

- `p_324543_` (`BlockPos`)
- `p_323652_` (`BlockState`)

**Returns:** `BlockEntity`

### VaultBlockEntity

```java
return new VaultBlockEntity()
```

**Returns:** `return new`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_323673_)
```

**Parameters:**

- `p_323673_` (`StateDefinition.Builder<Block, BlockState>`)

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_323525_, BlockState p_324070_, BlockEntityType<T> p_323541_)
```

**Parameters:**

- `p_323525_` (`Level`)
- `p_324070_` (`BlockState`)
- `p_323541_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_324576_)
```

**Parameters:**

- `p_324576_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### rotate

```java
public BlockState rotate(BlockState p_324232_, Rotation p_324443_)
```

**Parameters:**

- `p_324232_` (`BlockState`)
- `p_324443_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
public BlockState mirror(BlockState p_323894_, Mirror p_324242_)
```

**Parameters:**

- `p_323894_` (`BlockState`)
- `p_324242_` (`Mirror`)

**Returns:** `BlockState`

### getRenderShape

```java
public RenderShape getRenderShape(BlockState p_324584_)
```

**Parameters:**

- `p_324584_` (`BlockState`)

**Returns:** `RenderShape`
