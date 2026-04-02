# Block

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BlockBehaviour`
**Implements:** `ItemLike`, `net.neoforged.neoforge.common.extensions.IBlockExtension`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<Block>` |  |
| `BLOCK_STATE_REGISTRY` | `IdMapper<BlockState>` |  |
| `UPDATE_NEIGHBORS` | `int` |  |
| `UPDATE_CLIENTS` | `int` |  |
| `UPDATE_INVISIBLE` | `int` |  |
| `UPDATE_IMMEDIATE` | `int` |  |
| `UPDATE_KNOWN_SHAPE` | `int` |  |
| `UPDATE_SUPPRESS_DROPS` | `int` |  |
| `UPDATE_MOVE_BY_PISTON` | `int` |  |
| `UPDATE_NONE` | `int` |  |
| `UPDATE_ALL` | `int` |  |
| `UPDATE_ALL_IMMEDIATE` | `int` |  |
| `INDESTRUCTIBLE` | `float` |  |
| `INSTANT` | `float` |  |
| `UPDATE_LIMIT` | `int` |  |
| `stateDefinition` | `StateDefinition<Block, BlockState>` |  |

## Methods

### load

```java
public Boolean load(VoxelShape p_49972_)
```

**Parameters:**

- `p_49972_` (`VoxelShape`)

**Returns:** `public Boolean`

### rehash

```java
protected void rehash(int p_49979_)
```

**Parameters:**

- `p_49979_` (`int`)

### codec

```java
protected MapCodec<? extends Block> codec()
```

**Returns:** `MapCodec<? extends Block>`

### getId

```java
public static int getId(BlockState p_49957_)
```

**Parameters:**

- `p_49957_` (`BlockState`)

**Returns:** `public static int`

### stateById

```java
public static BlockState stateById(int p_49804_)
```

**Parameters:**

- `p_49804_` (`int`)

**Returns:** `public static BlockState`

### byItem

```java
public static Block byItem(Item p_49815_)
```

**Parameters:**

- `p_49815_` (`Item`)

**Returns:** `public static Block`

### pushEntitiesUp

```java
public static BlockState pushEntitiesUp(BlockState p_49898_, BlockState p_49899_, LevelAccessor p_238252_, BlockPos p_49901_)
```

**Parameters:**

- `p_49898_` (`BlockState`)
- `p_49899_` (`BlockState`)
- `p_238252_` (`LevelAccessor`)
- `p_49901_` (`BlockPos`)

**Returns:** `public static BlockState`

### box

```java
public static VoxelShape box(double p_49797_, double p_49798_, double p_49799_, double p_49800_, double p_49801_, double p_49802_)
```

**Parameters:**

- `p_49797_` (`double`)
- `p_49798_` (`double`)
- `p_49799_` (`double`)
- `p_49800_` (`double`)
- `p_49801_` (`double`)
- `p_49802_` (`double`)

**Returns:** `public static VoxelShape`

### updateFromNeighbourShapes

```java
public static BlockState updateFromNeighbourShapes(BlockState p_49932_, LevelAccessor p_49933_, BlockPos p_49934_)
```

**Parameters:**

- `p_49932_` (`BlockState`)
- `p_49933_` (`LevelAccessor`)
- `p_49934_` (`BlockPos`)

**Returns:** `public static BlockState`

### updateOrDestroy

```java
public static void updateOrDestroy(BlockState p_49903_, BlockState p_49904_, LevelAccessor p_49905_, BlockPos p_49906_, int p_49907_)
```

**Parameters:**

- `p_49903_` (`BlockState`)
- `p_49904_` (`BlockState`)
- `p_49905_` (`LevelAccessor`)
- `p_49906_` (`BlockPos`)
- `p_49907_` (`int`)

**Returns:** `public static void`

### updateOrDestroy

```java
 updateOrDestroy()
```

**Returns:** ``

### updateOrDestroy

```java
public static void updateOrDestroy(BlockState p_49909_, BlockState p_49910_, LevelAccessor p_49911_, BlockPos p_49912_, int p_49913_, int p_49914_)
```

**Parameters:**

- `p_49909_` (`BlockState`)
- `p_49910_` (`BlockState`)
- `p_49911_` (`LevelAccessor`)
- `p_49912_` (`BlockPos`)
- `p_49913_` (`int`)
- `p_49914_` (`int`)

**Returns:** `public static void`

### Block

```java
public Block(BlockBehaviour.Properties p_49795_)
```

**Parameters:**

- `p_49795_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isExceptionForConnection

```java
public static boolean isExceptionForConnection(BlockState p_152464_)
```

**Parameters:**

- `p_152464_` (`BlockState`)

**Returns:** `public static boolean`

### shouldRenderFace

```java
public static boolean shouldRenderFace(BlockState p_152445_, BlockGetter p_152446_, BlockPos p_152447_, Direction p_152448_, BlockPos p_152449_)
```

**Parameters:**

- `p_152445_` (`BlockState`)
- `p_152446_` (`BlockGetter`)
- `p_152447_` (`BlockPos`)
- `p_152448_` (`Direction`)
- `p_152449_` (`BlockPos`)

**Returns:** `public static boolean`

### canSupportRigidBlock

```java
public static boolean canSupportRigidBlock(BlockGetter p_49937_, BlockPos p_49938_)
```

**Parameters:**

- `p_49937_` (`BlockGetter`)
- `p_49938_` (`BlockPos`)

**Returns:** `public static boolean`

### canSupportCenter

```java
public static boolean canSupportCenter(LevelReader p_49864_, BlockPos p_49865_, Direction p_49866_)
```

**Parameters:**

- `p_49864_` (`LevelReader`)
- `p_49865_` (`BlockPos`)
- `p_49866_` (`Direction`)

**Returns:** `public static boolean`

### isFaceFull

```java
public static boolean isFaceFull(VoxelShape p_49919_, Direction p_49920_)
```

**Parameters:**

- `p_49919_` (`VoxelShape`)
- `p_49920_` (`Direction`)

**Returns:** `public static boolean`

### isShapeFullBlock

```java
return isShapeFullBlock()
```

**Returns:** `return`

### isShapeFullBlock

```java
public static boolean isShapeFullBlock(VoxelShape p_49917_)
```

**Parameters:**

- `p_49917_` (`VoxelShape`)

**Returns:** `public static boolean`

### animateTick

```java
public void animateTick(BlockState p_220827_, Level p_220828_, BlockPos p_220829_, RandomSource p_220830_)
```

**Parameters:**

- `p_220827_` (`BlockState`)
- `p_220828_` (`Level`)
- `p_220829_` (`BlockPos`)
- `p_220830_` (`RandomSource`)

**Returns:** `public void`

### destroy

```java
public void destroy(LevelAccessor p_49860_, BlockPos p_49861_, BlockState p_49862_)
```

**Parameters:**

- `p_49860_` (`LevelAccessor`)
- `p_49861_` (`BlockPos`)
- `p_49862_` (`BlockState`)

**Returns:** `public void`

### getDrops

```java
public static List<ItemStack> getDrops(BlockState p_49870_, ServerLevel p_49871_, BlockPos p_49872_, BlockEntity p_49873_)
```

**Parameters:**

- `p_49870_` (`BlockState`)
- `p_49871_` (`ServerLevel`)
- `p_49872_` (`BlockPos`)
- `p_49873_` (`BlockEntity`)

**Returns:** `public static List<ItemStack>`

### getDrops

```java
public static List<ItemStack> getDrops(BlockState p_49875_, ServerLevel p_49876_, BlockPos p_49877_, BlockEntity p_49878_, Entity p_49879_, ItemStack p_49880_)
```

**Parameters:**

- `p_49875_` (`BlockState`)
- `p_49876_` (`ServerLevel`)
- `p_49877_` (`BlockPos`)
- `p_49878_` (`BlockEntity`)
- `p_49879_` (`Entity`)
- `p_49880_` (`ItemStack`)

**Returns:** `public static List<ItemStack>`

### dropResources

```java
public static void dropResources(BlockState p_49951_, Level p_49952_, BlockPos p_49953_)
```

**Parameters:**

- `p_49951_` (`BlockState`)
- `p_49952_` (`Level`)
- `p_49953_` (`BlockPos`)

**Returns:** `public static void`

### beginCapturingDrops

```java
 beginCapturingDrops()
```

**Returns:** ``

### dropResources

```java
public static void dropResources(BlockState p_49893_, LevelAccessor p_49894_, BlockPos p_49895_, BlockEntity p_49896_)
```

**Parameters:**

- `p_49893_` (`BlockState`)
- `p_49894_` (`LevelAccessor`)
- `p_49895_` (`BlockPos`)
- `p_49896_` (`BlockEntity`)

**Returns:** `public static void`

### beginCapturingDrops

```java
 beginCapturingDrops()
```

**Returns:** ``

### dropResources

```java
public static void dropResources(BlockState p_49882_, Level p_49883_, BlockPos p_49884_, BlockEntity p_49885_, Entity p_49886_, ItemStack p_49887_)
```

**Parameters:**

- `p_49882_` (`BlockState`)
- `p_49883_` (`Level`)
- `p_49884_` (`BlockPos`)
- `p_49885_` (`BlockEntity`)
- `p_49886_` (`Entity`)
- `p_49887_` (`ItemStack`)

**Returns:** `public static void`

### beginCapturingDrops

```java
 beginCapturingDrops()
```

**Returns:** ``

### popResource

```java
public static void popResource(Level p_49841_, BlockPos p_49842_, ItemStack p_49843_)
```

**Parameters:**

- `p_49841_` (`Level`)
- `p_49842_` (`BlockPos`)
- `p_49843_` (`ItemStack`)

**Returns:** `public static void`

### popResourceFromFace

```java
public static void popResourceFromFace(Level p_152436_, BlockPos p_152437_, Direction p_152438_, ItemStack p_152439_)
```

**Parameters:**

- `p_152436_` (`Level`)
- `p_152437_` (`BlockPos`)
- `p_152438_` (`Direction`)
- `p_152439_` (`ItemStack`)

**Returns:** `public static void`

### popResource

```java
private static void popResource(Level p_152441_, Supplier<ItemEntity> p_152442_, ItemStack p_152443_)
```

**Parameters:**

- `p_152441_` (`Level`)
- `p_152442_` (`Supplier<ItemEntity>`)
- `p_152443_` (`ItemStack`)

**Returns:** `private static void`

### popExperience

```java
public void popExperience(ServerLevel p_49806_, BlockPos p_49807_, int p_49808_)
```

**Parameters:**

- `p_49806_` (`ServerLevel`)
- `p_49807_` (`BlockPos`)
- `p_49808_` (`int`)

**Returns:** `public void`

### getExplosionResistance ⚠️ *Deprecated*

```java
Use more sensitive version
    public float getExplosionResistance()
```

**Returns:** `Use more sensitive version
    public float`

### wasExploded

```java
public void wasExploded(Level p_49844_, BlockPos p_49845_, Explosion p_49846_)
```

**Parameters:**

- `p_49844_` (`Level`)
- `p_49845_` (`BlockPos`)
- `p_49846_` (`Explosion`)

**Returns:** `public void`

### stepOn

```java
public void stepOn(Level p_152431_, BlockPos p_152432_, BlockState p_152433_, Entity p_152434_)
```

**Parameters:**

- `p_152431_` (`Level`)
- `p_152432_` (`BlockPos`)
- `p_152433_` (`BlockState`)
- `p_152434_` (`Entity`)

**Returns:** `public void`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_49820_)
```

**Parameters:**

- `p_49820_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### playerDestroy

```java
public void playerDestroy(Level p_49827_, Player p_49828_, BlockPos p_49829_, BlockState p_49830_, BlockEntity p_49831_, ItemStack p_49832_)
```

**Parameters:**

- `p_49827_` (`Level`)
- `p_49828_` (`Player`)
- `p_49829_` (`BlockPos`)
- `p_49830_` (`BlockState`)
- `p_49831_` (`BlockEntity`)
- `p_49832_` (`ItemStack`)

**Returns:** `public void`

### dropResources

```java
 dropResources()
```

**Returns:** ``

### setPlacedBy

```java
public void setPlacedBy(Level p_49847_, BlockPos p_49848_, BlockState p_49849_, LivingEntity p_49850_, ItemStack p_49851_)
```

**Parameters:**

- `p_49847_` (`Level`)
- `p_49848_` (`BlockPos`)
- `p_49849_` (`BlockState`)
- `p_49850_` (`LivingEntity`)
- `p_49851_` (`ItemStack`)

**Returns:** `public void`

### isPossibleToRespawnInThis

```java
public boolean isPossibleToRespawnInThis(BlockState p_279289_)
```

**Parameters:**

- `p_279289_` (`BlockState`)

**Returns:** `public boolean`

### getName

```java
public MutableComponent getName()
```

**Returns:** `public MutableComponent`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `public String`

### fallOn

```java
public void fallOn(Level p_152426_, BlockState p_152427_, BlockPos p_152428_, Entity p_152429_, float p_152430_)
```

**Parameters:**

- `p_152426_` (`Level`)
- `p_152427_` (`BlockState`)
- `p_152428_` (`BlockPos`)
- `p_152429_` (`Entity`)
- `p_152430_` (`float`)

**Returns:** `public void`

### updateEntityAfterFallOn

```java
public void updateEntityAfterFallOn(BlockGetter p_49821_, Entity p_49822_)
```

**Parameters:**

- `p_49821_` (`BlockGetter`)
- `p_49822_` (`Entity`)

**Returns:** `public void`

### getCloneItemStack ⚠️ *Deprecated*

```java
Use more sensitive version
    public ItemStack getCloneItemStack(LevelReader p_304395_, BlockPos p_49824_, BlockState p_49825_)
```

**Parameters:**

- `p_304395_` (`LevelReader`)
- `p_49824_` (`BlockPos`)
- `p_49825_` (`BlockState`)

**Returns:** `Use more sensitive version
    public ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getFriction

```java
public float getFriction()
```

**Returns:** `public float`

### getSpeedFactor

```java
public float getSpeedFactor()
```

**Returns:** `public float`

### getJumpFactor

```java
public float getJumpFactor()
```

**Returns:** `public float`

### spawnDestroyParticles

```java
protected void spawnDestroyParticles(Level p_152422_, Player p_152423_, BlockPos p_152424_, BlockState p_152425_)
```

**Parameters:**

- `p_152422_` (`Level`)
- `p_152423_` (`Player`)
- `p_152424_` (`BlockPos`)
- `p_152425_` (`BlockState`)

**Returns:** `protected void`

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_49852_, BlockPos p_49853_, BlockState p_49854_, Player p_49855_)
```

**Parameters:**

- `p_49852_` (`Level`)
- `p_49853_` (`BlockPos`)
- `p_49854_` (`BlockState`)
- `p_49855_` (`Player`)

**Returns:** `public BlockState`

### handlePrecipitation

```java
public void handlePrecipitation(BlockState p_152450_, Level p_152451_, BlockPos p_152452_, Biome.Precipitation p_152453_)
```

**Parameters:**

- `p_152450_` (`BlockState`)
- `p_152451_` (`Level`)
- `p_152452_` (`BlockPos`)
- `p_152453_` (`Biome.Precipitation`)

**Returns:** `public void`

### dropFromExplosion ⚠️ *Deprecated*

```java
Use more sensitive version
    public boolean dropFromExplosion(Explosion p_49826_)
```

**Parameters:**

- `p_49826_` (`Explosion`)

**Returns:** `Use more sensitive version
    public boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_49915_)
```

**Parameters:**

- `p_49915_` (`StateDefinition.Builder<Block, BlockState>`)

**Returns:** `protected void`

### getStateDefinition

```java
public StateDefinition<Block, BlockState> getStateDefinition()
```

**Returns:** `public StateDefinition<Block, BlockState>`

### registerDefaultState

```java
protected final void registerDefaultState(BlockState p_49960_)
```

**Parameters:**

- `p_49960_` (`BlockState`)

**Returns:** `protected final void`

### defaultBlockState

```java
public final BlockState defaultBlockState()
```

**Returns:** `public final BlockState`

### withPropertiesOf

```java
public final BlockState withPropertiesOf(BlockState p_152466_)
```

**Parameters:**

- `p_152466_` (`BlockState`)

**Returns:** `public final BlockState`

### copyProperty

```java
private static <T extends Comparable<T>> BlockState copyProperty(BlockState p_152455_, BlockState p_152456_, Property<T> p_152457_)
```

**Parameters:**

- `p_152455_` (`BlockState`)
- `p_152456_` (`BlockState`)
- `p_152457_` (`Property<T>`)

**Returns:** `private static <T extends Comparable<T>> BlockState`

### asItem

```java
public Item asItem()
```

**Returns:** `Item`

### hasDynamicShape

```java
public boolean hasDynamicShape()
```

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### appendHoverText

```java
public void appendHoverText(ItemStack p_49816_, Item.TooltipContext p_339606_, List<Component> p_49818_, TooltipFlag p_49819_)
```

**Parameters:**

- `p_49816_` (`ItemStack`)
- `p_339606_` (`Item.TooltipContext`)
- `p_49818_` (`List<Component>`)
- `p_49819_` (`TooltipFlag`)

**Returns:** `public void`

### asBlock

```java
protected Block asBlock()
```

**Returns:** `Block`

### getShapeForEachState

```java
protected ImmutableMap<BlockState, VoxelShape> getShapeForEachState(Function<BlockState, VoxelShape> p_152459_)
```

**Parameters:**

- `p_152459_` (`Function<BlockState, VoxelShape>`)

**Returns:** `protected ImmutableMap<BlockState, VoxelShape>`

### initializeClient

```java
public void initializeClient(java.util.function.Consumer<net.neoforged.neoforge.client.extensions.common.IClientBlockExtensions> consumer)
```

**Parameters:**

- `consumer` (`java.util.function.Consumer<net.neoforged.neoforge.client.extensions.common.IClientBlockExtensions>`)

### builtInRegistryHolder

```java
public Holder.Reference<Block> builtInRegistryHolder()
```

**Returns:** `Holder.Reference<Block>`

### tryDropExperience

```java
protected void tryDropExperience(ServerLevel p_220823_, BlockPos p_220824_, ItemStack p_220825_, IntProvider p_220826_)
```

**Parameters:**

- `p_220823_` (`ServerLevel`)
- `p_220824_` (`BlockPos`)
- `p_220825_` (`ItemStack`)
- `p_220826_` (`IntProvider`)

**Returns:** `protected void`

### BlockStatePairKey

```java
public BlockStatePairKey(BlockState p_49984_, BlockState p_49985_, Direction p_49986_)
```

**Parameters:**

- `p_49984_` (`BlockState`)
- `p_49985_` (`BlockState`)
- `p_49986_` (`Direction`)

**Returns:** `public`

### equals

```java
public boolean equals(Object p_49988_)
```

**Parameters:**

- `p_49988_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockStatePairKey` | class |  |
