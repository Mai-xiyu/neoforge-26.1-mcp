# EntityType

**Package:** `net.minecraft.world.entity`
**Type:** class<T extends Entity> implements FeatureElement, EntityTypeTest<Entity, T>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ALLAY` | `EntityType<Allay>` |  |
| `AREA_EFFECT_CLOUD` | `EntityType<AreaEffectCloud>` |  |
| `ARMADILLO` | `EntityType<Armadillo>` |  |
| `ARMOR_STAND` | `EntityType<ArmorStand>` |  |
| `ARROW` | `EntityType<Arrow>` |  |
| `AXOLOTL` | `EntityType<Axolotl>` |  |
| `BAT` | `EntityType<Bat>` |  |
| `BEE` | `EntityType<Bee>` |  |
| `BLAZE` | `EntityType<Blaze>` |  |
| `BLOCK_DISPLAY` | `EntityType<Display.BlockDisplay>` |  |
| `BOAT` | `EntityType<Boat>` |  |
| `BOGGED` | `EntityType<Bogged>` |  |
| `BREEZE` | `EntityType<Breeze>` |  |
| `BREEZE_WIND_CHARGE` | `EntityType<BreezeWindCharge>` |  |
| `CAMEL` | `EntityType<Camel>` |  |
| `CAT` | `EntityType<Cat>` |  |
| `CAVE_SPIDER` | `EntityType<CaveSpider>` |  |
| `CHEST_BOAT` | `EntityType<ChestBoat>` |  |
| `CHEST_MINECART` | `EntityType<MinecartChest>` |  |

## Methods

### register

```java
<T extends Entity> private static <T extends Entity> EntityType<T> register(String p_20635_, EntityType.Builder<T> p_20636_)
```

**Parameters:**

- `p_20635_` (`String`)
- `p_20636_` (`EntityType.Builder<T>`)

**Returns:** `private static <T extends Entity> EntityType<T>`

### getKey

```java
public static ResourceLocation getKey(EntityType<?> p_20614_)
```

**Parameters:**

- `p_20614_` (`EntityType<?>`)

**Returns:** `public static ResourceLocation`

### byString

```java
public static Optional<EntityType<?>> byString(String p_20633_)
```

**Parameters:**

- `p_20633_` (`String`)

**Returns:** `public static Optional<EntityType<?>>`

### EntityType

```java
public EntityType(EntityType.EntityFactory<T> p_273268_, MobCategory p_272918_, boolean p_273417_, boolean p_273389_, boolean p_273556_, boolean p_272654_, ImmutableSet<Block> p_273631_, EntityDimensions p_272946_, float p_338404_, int p_272895_, int p_273451_, FeatureFlagSet p_273518_)
```

**Parameters:**

- `p_273268_` (`EntityType.EntityFactory<T>`)
- `p_272918_` (`MobCategory`)
- `p_273417_` (`boolean`)
- `p_273389_` (`boolean`)
- `p_273556_` (`boolean`)
- `p_272654_` (`boolean`)
- `p_273631_` (`ImmutableSet<Block>`)
- `p_272946_` (`EntityDimensions`)
- `p_338404_` (`float`)
- `p_272895_` (`int`)
- `p_273451_` (`int`)
- `p_273518_` (`FeatureFlagSet`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### EntityType

```java
public EntityType(EntityType.EntityFactory<T> p_273268_, MobCategory p_272918_, boolean p_273417_, boolean p_273389_, boolean p_273556_, boolean p_272654_, ImmutableSet<Block> p_273631_, EntityDimensions p_272946_, float p_338404_, int p_272895_, int p_273451_, FeatureFlagSet p_273518_, java.util.function.Predicate<EntityType<?>> trackDeltasSupplier, java.util.function.ToIntFunction<EntityType<?>> trackingRangeSupplier, java.util.function.ToIntFunction<EntityType<?>> updateIntervalSupplier)
```

**Parameters:**

- `p_273268_` (`EntityType.EntityFactory<T>`)
- `p_272918_` (`MobCategory`)
- `p_273417_` (`boolean`)
- `p_273389_` (`boolean`)
- `p_273556_` (`boolean`)
- `p_272654_` (`boolean`)
- `p_273631_` (`ImmutableSet<Block>`)
- `p_272946_` (`EntityDimensions`)
- `p_338404_` (`float`)
- `p_272895_` (`int`)
- `p_273451_` (`int`)
- `p_273518_` (`FeatureFlagSet`)
- `trackDeltasSupplier` (`java.util.function.Predicate<EntityType<?>>`)
- `trackingRangeSupplier` (`java.util.function.ToIntFunction<EntityType<?>>`)
- `updateIntervalSupplier` (`java.util.function.ToIntFunction<EntityType<?>>`)

**Returns:** `public`

### spawn

```java
public T spawn(ServerLevel p_20593_, ItemStack p_20594_, Player p_20595_, BlockPos p_20596_, MobSpawnType p_20597_, boolean p_20598_, boolean p_20599_)
```

**Parameters:**

- `p_20593_` (`ServerLevel`)
- `p_20594_` (`ItemStack`)
- `p_20595_` (`Player`)
- `p_20596_` (`BlockPos`)
- `p_20597_` (`MobSpawnType`)
- `p_20598_` (`boolean`)
- `p_20599_` (`boolean`)

**Returns:** `T`

### createDefaultStackConfig

```java
<T extends Entity> public static <T extends Entity> Consumer<T> createDefaultStackConfig(ServerLevel p_263583_, ItemStack p_263568_, Player p_263575_)
```

**Parameters:**

- `p_263583_` (`ServerLevel`)
- `p_263568_` (`ItemStack`)
- `p_263575_` (`Player`)

**Returns:** `public static <T extends Entity> Consumer<T>`

### appendDefaultStackConfig

```java
return appendDefaultStackConfig(p_262561_ -> { }, p_263583_, p_263568_, p_263575_)
```

**Parameters:**

- `p_263575_` (`p_262561_ -> { }, p_263583_, p_263568_,`)

**Returns:** `return`

### appendDefaultStackConfig

```java
<T extends Entity> public static <T extends Entity> Consumer<T> appendDefaultStackConfig(Consumer<T> p_265154_, ServerLevel p_265733_, ItemStack p_265598_, Player p_265666_)
```

**Parameters:**

- `p_265154_` (`Consumer<T>`)
- `p_265733_` (`ServerLevel`)
- `p_265598_` (`ItemStack`)
- `p_265666_` (`Player`)

**Returns:** `public static <T extends Entity> Consumer<T>`

### appendCustomNameConfig

```java
<T extends Entity> public static <T extends Entity> Consumer<T> appendCustomNameConfig(Consumer<T> p_263567_, ItemStack p_263564_)
```

**Parameters:**

- `p_263567_` (`Consumer<T>`)
- `p_263564_` (`ItemStack`)

**Returns:** `public static <T extends Entity> Consumer<T>`

### appendCustomEntityStackConfig

```java
<T extends Entity> public static <T extends Entity> Consumer<T> appendCustomEntityStackConfig(Consumer<T> p_263579_, ServerLevel p_263571_, ItemStack p_263582_, Player p_263574_)
```

**Parameters:**

- `p_263579_` (`Consumer<T>`)
- `p_263571_` (`ServerLevel`)
- `p_263582_` (`ItemStack`)
- `p_263574_` (`Player`)

**Returns:** `public static <T extends Entity> Consumer<T>`

### spawn

```java
public T spawn(ServerLevel p_262634_, BlockPos p_262707_, MobSpawnType p_262597_)
```

**Parameters:**

- `p_262634_` (`ServerLevel`)
- `p_262707_` (`BlockPos`)
- `p_262597_` (`MobSpawnType`)

**Returns:** `T`

### spawn

```java
public T spawn(ServerLevel p_262704_, Consumer<T> p_262621_, BlockPos p_262672_, MobSpawnType p_262644_, boolean p_262690_, boolean p_262590_)
```

**Parameters:**

- `p_262704_` (`ServerLevel`)
- `p_262621_` (`Consumer<T>`)
- `p_262672_` (`BlockPos`)
- `p_262644_` (`MobSpawnType`)
- `p_262690_` (`boolean`)
- `p_262590_` (`boolean`)

**Returns:** `T`

### create

```java
public T create(ServerLevel p_262637_, Consumer<T> p_262629_, BlockPos p_262595_, MobSpawnType p_262666_, boolean p_262685_, boolean p_262588_)
```

**Parameters:**

- `p_262637_` (`ServerLevel`)
- `p_262629_` (`Consumer<T>`)
- `p_262595_` (`BlockPos`)
- `p_262666_` (`MobSpawnType`)
- `p_262685_` (`boolean`)
- `p_262588_` (`boolean`)

**Returns:** `T`

### getYOffset

```java
protected static double getYOffset(LevelReader p_20626_, BlockPos p_20627_, boolean p_20628_, AABB p_20629_)
```

**Parameters:**

- `p_20626_` (`LevelReader`)
- `p_20627_` (`BlockPos`)
- `p_20628_` (`boolean`)
- `p_20629_` (`AABB`)

**Returns:** `protected static double`

### updateCustomEntityTag

```java
public static void updateCustomEntityTag(Level p_20621_, Player p_20622_, Entity p_20623_, CustomData p_331752_)
```

**Parameters:**

- `p_20621_` (`Level`)
- `p_20622_` (`Player`)
- `p_20623_` (`Entity`)
- `p_331752_` (`CustomData`)

**Returns:** `public static void`

### canSerialize

```java
public boolean canSerialize()
```

**Returns:** `public boolean`

### canSummon

```java
public boolean canSummon()
```

**Returns:** `public boolean`

### fireImmune

```java
public boolean fireImmune()
```

**Returns:** `public boolean`

### canSpawnFarFromPlayer

```java
public boolean canSpawnFarFromPlayer()
```

**Returns:** `public boolean`

### getCategory

```java
public MobCategory getCategory()
```

**Returns:** `public MobCategory`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `public String`

### getDescription

```java
public Component getDescription()
```

**Returns:** `public Component`

### toString

```java
public String toString()
```

**Returns:** `String`

### toShortString

```java
public String toShortString()
```

**Returns:** `public String`

### getDefaultLootTable

```java
public ResourceKey<LootTable> getDefaultLootTable()
```

**Returns:** `public ResourceKey<LootTable>`

### getWidth

```java
public float getWidth()
```

**Returns:** `public float`

### getHeight

```java
public float getHeight()
```

**Returns:** `public float`

### requiredFeatures

```java
public FeatureFlagSet requiredFeatures()
```

**Returns:** `FeatureFlagSet`

### create

```java
public T create(Level p_20616_)
```

**Parameters:**

- `p_20616_` (`Level`)

**Returns:** `T`

### create

```java
public static Optional<Entity> create(CompoundTag p_20643_, Level p_20644_)
```

**Parameters:**

- `p_20643_` (`CompoundTag`)
- `p_20644_` (`Level`)

**Returns:** `public static Optional<Entity>`

### getSpawnAABB

```java
public AABB getSpawnAABB(double p_338403_, double p_338190_, double p_338227_)
```

**Parameters:**

- `p_338403_` (`double`)
- `p_338190_` (`double`)
- `p_338227_` (`double`)

**Returns:** `public AABB`

### isBlockDangerous

```java
public boolean isBlockDangerous(BlockState p_20631_)
```

**Parameters:**

- `p_20631_` (`BlockState`)

**Returns:** `public boolean`

### getDimensions

```java
public EntityDimensions getDimensions()
```

**Returns:** `public EntityDimensions`

### by

```java
public static Optional<EntityType<?>> by(CompoundTag p_20638_)
```

**Parameters:**

- `p_20638_` (`CompoundTag`)

**Returns:** `public static Optional<EntityType<?>>`

### loadEntityRecursive

```java
public static Entity loadEntityRecursive(CompoundTag p_20646_, Level p_20647_, Function<Entity, Entity> p_20648_)
```

**Parameters:**

- `p_20646_` (`CompoundTag`)
- `p_20647_` (`Level`)
- `p_20648_` (`Function<Entity, Entity>`)

**Returns:** `Entity`

### loadEntitiesRecursive

```java
public static Stream<Entity> loadEntitiesRecursive(List<? extends Tag> p_147046_, Level p_147047_)
```

**Parameters:**

- `p_147046_` (`List<? extends Tag>`)
- `p_147047_` (`Level`)

**Returns:** `public static Stream<Entity>`

### tryAdvance

```java
public boolean tryAdvance(Consumer<? super Entity> p_147066_)
```

**Parameters:**

- `p_147066_` (`Consumer<? super Entity>`)

**Returns:** `boolean`

### trySplit

```java
public Spliterator<Entity> trySplit()
```

**Returns:** `Spliterator<Entity>`

### estimateSize

```java
public long estimateSize()
```

**Returns:** `long`

### characteristics

```java
public int characteristics()
```

**Returns:** `int`

### loadStaticEntity

```java
private static Optional<Entity> loadStaticEntity(CompoundTag p_20670_, Level p_20671_)
```

**Parameters:**

- `p_20670_` (`CompoundTag`)
- `p_20671_` (`Level`)

**Returns:** `private static Optional<Entity>`

### create

```java
return create()
```

**Returns:** `return`

### clientTrackingRange

```java
public int clientTrackingRange()
```

**Returns:** `public int`

### defaultTrackingRangeSupplier

```java
private int defaultTrackingRangeSupplier()
```

**Returns:** `private int`

### updateInterval

```java
public int updateInterval()
```

**Returns:** `public int`

### defaultUpdateIntervalSupplier

```java
private int defaultUpdateIntervalSupplier()
```

**Returns:** `private int`

### trackDeltas

```java
public boolean trackDeltas()
```

**Returns:** `public boolean`

### defaultTrackDeltasSupplier

```java
private boolean defaultTrackDeltasSupplier()
```

**Returns:** `private boolean`

### is

```java
public boolean is(TagKey<EntityType<?>> p_204040_)
```

**Parameters:**

- `p_204040_` (`TagKey<EntityType<?>>`)

**Returns:** `public boolean`

### is

```java
public boolean is(HolderSet<EntityType<?>> p_299060_)
```

**Parameters:**

- `p_299060_` (`HolderSet<EntityType<?>>`)

**Returns:** `public boolean`

### tryCast

```java
public T tryCast(Entity p_147042_)
```

**Parameters:**

- `p_147042_` (`Entity`)

**Returns:** `T`

### getBaseClass

```java
public Class<? extends Entity> getBaseClass()
```

**Returns:** `Class<? extends Entity>`

### builtInRegistryHolder

```java
public Holder.Reference<EntityType<?>> builtInRegistryHolder()
```

**Returns:** `Holder.Reference<EntityType<?>>`

### getTags

```java
public Stream<TagKey<EntityType<?>>> getTags()
```

**Returns:** `public Stream<TagKey<EntityType<?>>>`

### Builder

```java
private Builder(EntityType.EntityFactory<T> p_20696_, MobCategory p_20697_)
```

**Parameters:**

- `p_20696_` (`EntityType.EntityFactory<T>`)
- `p_20697_` (`MobCategory`)

**Returns:** `private`

### of

```java
<T extends Entity> public static <T extends Entity> EntityType.Builder<T> of(EntityType.EntityFactory<T> p_20705_, MobCategory p_20706_)
```

**Parameters:**

- `p_20705_` (`EntityType.EntityFactory<T>`)
- `p_20706_` (`MobCategory`)

**Returns:** `public static <T extends Entity> EntityType.Builder<T>`

### createNothing

```java
<T extends Entity> public static <T extends Entity> EntityType.Builder<T> createNothing(MobCategory p_20711_)
```

**Parameters:**

- `p_20711_` (`MobCategory`)

**Returns:** `public static <T extends Entity> EntityType.Builder<T>`

### sized

```java
public EntityType.Builder<T> sized(float p_20700_, float p_20701_)
```

**Parameters:**

- `p_20700_` (`float`)
- `p_20701_` (`float`)

**Returns:** `public EntityType.Builder<T>`

### spawnDimensionsScale

```java
public EntityType.Builder<T> spawnDimensionsScale(float p_338311_)
```

**Parameters:**

- `p_338311_` (`float`)

**Returns:** `public EntityType.Builder<T>`

### eyeHeight

```java
public EntityType.Builder<T> eyeHeight(float p_316663_)
```

**Parameters:**

- `p_316663_` (`float`)

**Returns:** `public EntityType.Builder<T>`

### passengerAttachments

```java
public EntityType.Builder<T> passengerAttachments(float[]... p_316352_)
```

**Parameters:**

- `p_316352_` (`float[]...`)

**Returns:** `public EntityType.Builder<T>`

### passengerAttachments

```java
public EntityType.Builder<T> passengerAttachments(Vec3[]... p_316160_)
```

**Parameters:**

- `p_316160_` (`Vec3[]...`)

**Returns:** `public EntityType.Builder<T>`

### vehicleAttachment

```java
public EntityType.Builder<T> vehicleAttachment(Vec3 p_316758_)
```

**Parameters:**

- `p_316758_` (`Vec3`)

**Returns:** `public EntityType.Builder<T>`

### ridingOffset

```java
public EntityType.Builder<T> ridingOffset(float p_316455_)
```

**Parameters:**

- `p_316455_` (`float`)

**Returns:** `public EntityType.Builder<T>`

### nameTagOffset

```java
public EntityType.Builder<T> nameTagOffset(float p_316662_)
```

**Parameters:**

- `p_316662_` (`float`)

**Returns:** `public EntityType.Builder<T>`

### attach

```java
public EntityType.Builder<T> attach(EntityAttachment p_320654_, float p_320819_, float p_320871_, float p_320278_)
```

**Parameters:**

- `p_320654_` (`EntityAttachment`)
- `p_320819_` (`float`)
- `p_320871_` (`float`)
- `p_320278_` (`float`)

**Returns:** `public EntityType.Builder<T>`

### attach

```java
public EntityType.Builder<T> attach(EntityAttachment p_320601_, Vec3 p_320745_)
```

**Parameters:**

- `p_320601_` (`EntityAttachment`)
- `p_320745_` (`Vec3`)

**Returns:** `public EntityType.Builder<T>`

### noSummon

```java
public EntityType.Builder<T> noSummon()
```

**Returns:** `public EntityType.Builder<T>`

### noSave

```java
public EntityType.Builder<T> noSave()
```

**Returns:** `public EntityType.Builder<T>`

### fireImmune

```java
public EntityType.Builder<T> fireImmune()
```

**Returns:** `public EntityType.Builder<T>`

### immuneTo

```java
public EntityType.Builder<T> immuneTo(Block[]... p_20715_)
```

**Parameters:**

- `p_20715_` (`Block[]...`)

**Returns:** `public EntityType.Builder<T>`

### canSpawnFarFromPlayer

```java
public EntityType.Builder<T> canSpawnFarFromPlayer()
```

**Returns:** `public EntityType.Builder<T>`

### clientTrackingRange

```java
public EntityType.Builder<T> clientTrackingRange(int p_20703_)
```

**Parameters:**

- `p_20703_` (`int`)

**Returns:** `public EntityType.Builder<T>`

### updateInterval

```java
public EntityType.Builder<T> updateInterval(int p_20718_)
```

**Parameters:**

- `p_20718_` (`int`)

**Returns:** `public EntityType.Builder<T>`

### requiredFeatures

```java
public EntityType.Builder<T> requiredFeatures(FeatureFlag[]... p_251646_)
```

**Parameters:**

- `p_251646_` (`FeatureFlag[]...`)

**Returns:** `public EntityType.Builder<T>`

### setUpdateInterval

```java
public EntityType.Builder<T> setUpdateInterval(int interval)
```

**Parameters:**

- `interval` (`int`)

**Returns:** `public EntityType.Builder<T>`

### setTrackingRange

```java
public EntityType.Builder<T> setTrackingRange(int range)
```

**Parameters:**

- `range` (`int`)

**Returns:** `public EntityType.Builder<T>`

### setShouldReceiveVelocityUpdates

```java
public EntityType.Builder<T> setShouldReceiveVelocityUpdates(boolean value)
```

**Parameters:**

- `value` (`boolean`)

**Returns:** `public EntityType.Builder<T>`

### build

```java
public EntityType<T> build(String p_20713_)
```

**Parameters:**

- `p_20713_` (`String`)

**Returns:** `public EntityType<T>`

### create

```java
T create(EntityType<T> p_20722_, Level p_20723_)
```

**Parameters:**

- `p_20722_` (`EntityType<T>`)
- `p_20723_` (`Level`)

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `EntityFactory` | interface |  |
