# EnchantingTableBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EnchantingTableBlock>` |  |
| `SHAPE` | `VoxelShape` |  |
| `BOOKSHELF_OFFSETS` | `List<BlockPos>` |  |

## Methods

### codec

```java
public MapCodec<EnchantingTableBlock> codec()
```

**Returns:** `MapCodec<EnchantingTableBlock>`

### EnchantingTableBlock

```java
public EnchantingTableBlock(BlockBehaviour.Properties p_341305_)
```

**Parameters:**

- `p_341305_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isValidBookShelf

```java
public static boolean isValidBookShelf(Level p_340976_, BlockPos p_340984_, BlockPos p_341294_)
```

**Parameters:**

- `p_340976_` (`Level`)
- `p_340984_` (`BlockPos`)
- `p_341294_` (`BlockPos`)

**Returns:** `public static boolean`

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_341280_)
```

**Parameters:**

- `p_341280_` (`BlockState`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_340823_, BlockGetter p_340890_, BlockPos p_340839_, CollisionContext p_341114_)
```

**Parameters:**

- `p_340823_` (`BlockState`)
- `p_340890_` (`BlockGetter`)
- `p_340839_` (`BlockPos`)
- `p_341114_` (`CollisionContext`)

**Returns:** `VoxelShape`

### animateTick

```java
public void animateTick(BlockState p_341263_, Level p_341303_, BlockPos p_340983_, RandomSource p_341147_)
```

**Parameters:**

- `p_341263_` (`BlockState`)
- `p_341303_` (`Level`)
- `p_340983_` (`BlockPos`)
- `p_341147_` (`RandomSource`)

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_340914_)
```

**Parameters:**

- `p_340914_` (`BlockState`)

**Returns:** `RenderShape`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_341190_, BlockState p_340989_)
```

**Parameters:**

- `p_341190_` (`BlockPos`)
- `p_340989_` (`BlockState`)

**Returns:** `BlockEntity`

### EnchantingTableBlockEntity

```java
return new EnchantingTableBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_340880_, BlockState p_341416_, BlockEntityType<T> p_341078_)
```

**Parameters:**

- `p_340880_` (`Level`)
- `p_341416_` (`BlockState`)
- `p_341078_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_341077_, Level p_341293_, BlockPos p_341394_, Player p_340990_, BlockHitResult p_341300_)
```

**Parameters:**

- `p_341077_` (`BlockState`)
- `p_341293_` (`Level`)
- `p_341394_` (`BlockPos`)
- `p_340990_` (`Player`)
- `p_341300_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getMenuProvider

```java
protected MenuProvider getMenuProvider(BlockState p_341244_, Level p_340950_, BlockPos p_340923_)
```

**Parameters:**

- `p_341244_` (`BlockState`)
- `p_340950_` (`Level`)
- `p_340923_` (`BlockPos`)

**Returns:** `MenuProvider`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_341007_, PathComputationType p_341167_)
```

**Parameters:**

- `p_341007_` (`BlockState`)
- `p_341167_` (`PathComputationType`)

**Returns:** `boolean`
