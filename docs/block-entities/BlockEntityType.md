# BlockEntityType

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class<T extends BlockEntity>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FURNACE` | `BlockEntityType<FurnaceBlockEntity>` |  |
| `CHEST` | `BlockEntityType<ChestBlockEntity>` |  |
| `TRAPPED_CHEST` | `BlockEntityType<TrappedChestBlockEntity>` |  |
| `ENDER_CHEST` | `BlockEntityType<EnderChestBlockEntity>` |  |
| `JUKEBOX` | `BlockEntityType<JukeboxBlockEntity>` |  |
| `DISPENSER` | `BlockEntityType<DispenserBlockEntity>` |  |
| `DROPPER` | `BlockEntityType<DropperBlockEntity>` |  |
| `SIGN` | `BlockEntityType<SignBlockEntity>` |  |
| `HANGING_SIGN` | `BlockEntityType<HangingSignBlockEntity>` |  |
| `MOB_SPAWNER` | `BlockEntityType<SpawnerBlockEntity>` |  |
| `PISTON` | `BlockEntityType<PistonMovingBlockEntity>` |  |
| `BREWING_STAND` | `BlockEntityType<BrewingStandBlockEntity>` |  |
| `ENCHANTING_TABLE` | `BlockEntityType<EnchantingTableBlockEntity>` |  |
| `END_PORTAL` | `BlockEntityType<TheEndPortalBlockEntity>` |  |
| `BEACON` | `BlockEntityType<BeaconBlockEntity>` |  |

## Methods

### getKey

```java
public static ResourceLocation getKey(BlockEntityType<?> p_58955_)
```

**Parameters:**

- `p_58955_` (`BlockEntityType<?>`)

**Returns:** `ResourceLocation`

### register

```java
<T extends BlockEntity> private static <T extends BlockEntity> BlockEntityType<T> register(String p_58957_, BlockEntityType.Builder<T> p_58958_)
```

**Parameters:**

- `p_58957_` (`String`)
- `p_58958_` (`BlockEntityType.Builder<T>`)

**Returns:** `private static <T extends BlockEntity> BlockEntityType<T>`

### BlockEntityType

```java
public BlockEntityType(BlockEntityType.BlockEntitySupplier<? extends T> p_155259_, Set<Block> p_155260_, Type<?> p_155261_)
```

**Parameters:**

- `p_155259_` (`BlockEntityType.BlockEntitySupplier<? extends T>`)
- `p_155260_` (`Set<Block>`)
- `p_155261_` (`Type<?>`)

**Returns:** `public`

### create

```java
public T create(BlockPos p_155265_, BlockState p_155266_)
```

**Parameters:**

- `p_155265_` (`BlockPos`)
- `p_155266_` (`BlockState`)

**Returns:** `T`

### getValidBlocks

```java
public Set<Block> getValidBlocks()
```

**Returns:** `Set<Block>`

### isValid

```java
public boolean isValid(BlockState p_155263_)
```

**Parameters:**

- `p_155263_` (`BlockState`)

**Returns:** `public boolean`

### builtInRegistryHolder

```java
public Holder.Reference<BlockEntityType<?>> builtInRegistryHolder()
```

**Returns:** `Holder.Reference<BlockEntityType<?>>`

### getBlockEntity

```java
public T getBlockEntity(BlockGetter p_58950_, BlockPos p_58951_)
```

**Parameters:**

- `p_58950_` (`BlockGetter`)
- `p_58951_` (`BlockPos`)

**Returns:** `T`

### create

```java
T create(BlockPos p_155268_, BlockState p_155269_)
```

**Parameters:**

- `p_155268_` (`BlockPos`)
- `p_155269_` (`BlockState`)

**Returns:** `T`

### Builder

```java
private Builder(BlockEntityType.BlockEntitySupplier<? extends T> p_155271_, Set<Block> p_155272_)
```

**Parameters:**

- `p_155271_` (`BlockEntityType.BlockEntitySupplier<? extends T>`)
- `p_155272_` (`Set<Block>`)

**Returns:** `private`

### of

```java
<T extends BlockEntity> public static <T extends BlockEntity> BlockEntityType.Builder<T> of(BlockEntityType.BlockEntitySupplier<? extends T> p_155274_, Block[]... p_155275_)
```

**Parameters:**

- `p_155274_` (`BlockEntityType.BlockEntitySupplier<? extends T>`)
- `p_155275_` (`Block[]...`)

**Returns:** `public static <T extends BlockEntity> BlockEntityType.Builder<T>`

### build

```java
public BlockEntityType<T> build(Type<?> p_58967_)
```

**Parameters:**

- `p_58967_` (`Type<?>`)

**Returns:** `public BlockEntityType<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockEntitySupplier` | interface |  |
| `Builder` | class |  |
