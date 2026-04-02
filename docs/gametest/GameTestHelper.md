# GameTestHelper

**Package:** `net.minecraft.gametest.framework`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `testInfo` | `GameTestInfo` |  |

## Methods

### GameTestHelper

```java
public GameTestHelper(GameTestInfo p_127597_)
```

**Parameters:**

- `p_127597_` (`GameTestInfo`)

**Returns:** `public`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `public ServerLevel`

### getBlockState

```java
public BlockState getBlockState(BlockPos p_177233_)
```

**Parameters:**

- `p_177233_` (`BlockPos`)

**Returns:** `public BlockState`

### getBlockEntity

```java
<T extends BlockEntity> public <T extends BlockEntity> T getBlockEntity(BlockPos p_177348_)
```

**Parameters:**

- `p_177348_` (`BlockPos`)

**Returns:** `public <T extends BlockEntity> T`

### killAllEntities

```java
public void killAllEntities()
```

**Returns:** `public void`

### killAllEntitiesOfClass

```java
public void killAllEntitiesOfClass(Class p_289538_)
```

**Parameters:**

- `p_289538_` (`Class`)

**Returns:** `public void`

### spawnItem

```java
public ItemEntity spawnItem(Item p_326872_, Vec3 p_326853_)
```

**Parameters:**

- `p_326872_` (`Item`)
- `p_326853_` (`Vec3`)

**Returns:** `public ItemEntity`

### spawnItem

```java
public ItemEntity spawnItem(Item p_177190_, float p_177191_, float p_177192_, float p_177193_)
```

**Parameters:**

- `p_177190_` (`Item`)
- `p_177191_` (`float`)
- `p_177192_` (`float`)
- `p_177193_` (`float`)

**Returns:** `public ItemEntity`

### spawnItem

```java
public ItemEntity spawnItem(Item p_251435_, BlockPos p_250287_)
```

**Parameters:**

- `p_251435_` (`Item`)
- `p_250287_` (`BlockPos`)

**Returns:** `public ItemEntity`

### spawn

```java
<E extends Entity> public <E extends Entity> E spawn(EntityType<E> p_177177_, BlockPos p_177178_)
```

**Parameters:**

- `p_177177_` (`EntityType<E>`)
- `p_177178_` (`BlockPos`)

**Returns:** `public <E extends Entity> E`

### spawn

```java
<E extends Entity> public <E extends Entity> E spawn(EntityType<E> p_177174_, Vec3 p_177175_)
```

**Parameters:**

- `p_177174_` (`EntityType<E>`)
- `p_177175_` (`Vec3`)

**Returns:** `public <E extends Entity> E`

### findOneEntity

```java
<E extends Entity> public <E extends Entity> E findOneEntity(EntityType<E> p_320756_)
```

**Parameters:**

- `p_320756_` (`EntityType<E>`)

**Returns:** `public <E extends Entity> E`

### findClosestEntity

```java
<E extends Entity> public <E extends Entity> E findClosestEntity(EntityType<E> p_320915_, int p_320152_, int p_319868_, int p_319912_, double p_320874_)
```

**Parameters:**

- `p_320915_` (`EntityType<E>`)
- `p_320152_` (`int`)
- `p_319868_` (`int`)
- `p_319912_` (`int`)
- `p_320874_` (`double`)

**Returns:** `public <E extends Entity> E`

### findEntities

```java
<E extends Entity> public <E extends Entity> List<E> findEntities(EntityType<E> p_320065_, int p_320533_, int p_320279_, int p_320721_, double p_320280_)
```

**Parameters:**

- `p_320065_` (`EntityType<E>`)
- `p_320533_` (`int`)
- `p_320279_` (`int`)
- `p_320721_` (`int`)
- `p_320280_` (`double`)

**Returns:** `public <E extends Entity> List<E>`

### findEntities

```java
<E extends Entity> public <E extends Entity> List<E> findEntities(EntityType<E> p_320878_, Vec3 p_320734_, double p_320825_)
```

**Parameters:**

- `p_320878_` (`EntityType<E>`)
- `p_320734_` (`Vec3`)
- `p_320825_` (`double`)

**Returns:** `public <E extends Entity> List<E>`

### spawn

```java
<E extends Entity> public <E extends Entity> E spawn(EntityType<E> p_177169_, int p_177170_, int p_177171_, int p_177172_)
```

**Parameters:**

- `p_177169_` (`EntityType<E>`)
- `p_177170_` (`int`)
- `p_177171_` (`int`)
- `p_177172_` (`int`)

**Returns:** `public <E extends Entity> E`

### spawn

```java
<E extends Entity> public <E extends Entity> E spawn(EntityType<E> p_177164_, float p_177165_, float p_177166_, float p_177167_)
```

**Parameters:**

- `p_177164_` (`EntityType<E>`)
- `p_177165_` (`float`)
- `p_177166_` (`float`)
- `p_177167_` (`float`)

**Returns:** `public <E extends Entity> E`

### spawnWithNoFreeWill

```java
<E extends Mob> public <E extends Mob> E spawnWithNoFreeWill(EntityType<E> p_177330_, BlockPos p_177331_)
```

**Parameters:**

- `p_177330_` (`EntityType<E>`)
- `p_177331_` (`BlockPos`)

**Returns:** `public <E extends Mob> E`

### spawnWithNoFreeWill

```java
<E extends Mob> public <E extends Mob> E spawnWithNoFreeWill(EntityType<E> p_177322_, int p_177323_, int p_177324_, int p_177325_)
```

**Parameters:**

- `p_177322_` (`EntityType<E>`)
- `p_177323_` (`int`)
- `p_177324_` (`int`)
- `p_177325_` (`int`)

**Returns:** `public <E extends Mob> E`

### spawnWithNoFreeWill

```java
<E extends Mob> public <E extends Mob> E spawnWithNoFreeWill(EntityType<E> p_177327_, Vec3 p_177328_)
```

**Parameters:**

- `p_177327_` (`EntityType<E>`)
- `p_177328_` (`Vec3`)

**Returns:** `public <E extends Mob> E`

### spawnWithNoFreeWill

```java
<E extends Mob> public <E extends Mob> E spawnWithNoFreeWill(EntityType<E> p_177317_, float p_177318_, float p_177319_, float p_177320_)
```

**Parameters:**

- `p_177317_` (`EntityType<E>`)
- `p_177318_` (`float`)
- `p_177319_` (`float`)
- `p_177320_` (`float`)

**Returns:** `public <E extends Mob> E`

### moveTo

```java
public void moveTo(Mob p_326829_, float p_326862_, float p_326823_, float p_326844_)
```

**Parameters:**

- `p_326829_` (`Mob`)
- `p_326862_` (`float`)
- `p_326823_` (`float`)
- `p_326844_` (`float`)

**Returns:** `public void`

### walkTo

```java
public GameTestSequence walkTo(Mob p_177186_, BlockPos p_177187_, float p_177188_)
```

**Parameters:**

- `p_177186_` (`Mob`)
- `p_177187_` (`BlockPos`)
- `p_177188_` (`float`)

**Returns:** `public GameTestSequence`

### pressButton

```java
public void pressButton(int p_177104_, int p_177105_, int p_177106_)
```

**Parameters:**

- `p_177104_` (`int`)
- `p_177105_` (`int`)
- `p_177106_` (`int`)

**Returns:** `public void`

### pressButton

```java
public void pressButton(BlockPos p_177386_)
```

**Parameters:**

- `p_177386_` (`BlockPos`)

**Returns:** `public void`

### useBlock

```java
public void useBlock(BlockPos p_177409_)
```

**Parameters:**

- `p_177409_` (`BlockPos`)

**Returns:** `public void`

### useBlock

```java
public void useBlock(BlockPos p_250131_, Player p_251507_)
```

**Parameters:**

- `p_250131_` (`BlockPos`)
- `p_251507_` (`Player`)

**Returns:** `public void`

### useBlock

```java
public void useBlock(BlockPos p_262023_, Player p_261901_, BlockHitResult p_262040_)
```

**Parameters:**

- `p_262023_` (`BlockPos`)
- `p_261901_` (`Player`)
- `p_262040_` (`BlockHitResult`)

**Returns:** `public void`

### makeAboutToDrown

```java
public LivingEntity makeAboutToDrown(LivingEntity p_177184_)
```

**Parameters:**

- `p_177184_` (`LivingEntity`)

**Returns:** `public LivingEntity`

### withLowHealth

```java
public LivingEntity withLowHealth(LivingEntity p_286794_)
```

**Parameters:**

- `p_286794_` (`LivingEntity`)

**Returns:** `public LivingEntity`

### makeMockPlayer

```java
public Player makeMockPlayer(GameType p_323908_)
```

**Parameters:**

- `p_323908_` (`GameType`)

**Returns:** `public Player`

### isSpectator

```java
public boolean isSpectator()
```

**Returns:** `boolean`

### isCreative

```java
public boolean isCreative()
```

**Returns:** `boolean`

### isLocalPlayer

```java
public boolean isLocalPlayer()
```

**Returns:** `boolean`

### makeMockServerPlayerInLevel

```java
public ServerPlayer makeMockServerPlayerInLevel()
```

**Returns:** `ServerPlayer`

### isSpectator

```java
public boolean isSpectator()
```

**Returns:** `boolean`

### isCreative

```java
public boolean isCreative()
```

**Returns:** `boolean`

### pullLever

```java
public void pullLever(int p_177303_, int p_177304_, int p_177305_)
```

**Parameters:**

- `p_177303_` (`int`)
- `p_177304_` (`int`)
- `p_177305_` (`int`)

**Returns:** `public void`

### pullLever

```java
public void pullLever(BlockPos p_177422_)
```

**Parameters:**

- `p_177422_` (`BlockPos`)

**Returns:** `public void`

### pulseRedstone

```java
public void pulseRedstone(BlockPos p_177235_, long p_177236_)
```

**Parameters:**

- `p_177235_` (`BlockPos`)
- `p_177236_` (`long`)

**Returns:** `public void`

### destroyBlock

```java
public void destroyBlock(BlockPos p_177435_)
```

**Parameters:**

- `p_177435_` (`BlockPos`)

**Returns:** `public void`

### setBlock

```java
public void setBlock(int p_177108_, int p_177109_, int p_177110_, Block p_177111_)
```

**Parameters:**

- `p_177108_` (`int`)
- `p_177109_` (`int`)
- `p_177110_` (`int`)
- `p_177111_` (`Block`)

**Returns:** `public void`

### setBlock

```java
public void setBlock(int p_177113_, int p_177114_, int p_177115_, BlockState p_177116_)
```

**Parameters:**

- `p_177113_` (`int`)
- `p_177114_` (`int`)
- `p_177115_` (`int`)
- `p_177116_` (`BlockState`)

**Returns:** `public void`

### setBlock

```java
public void setBlock(BlockPos p_177246_, Block p_177247_)
```

**Parameters:**

- `p_177246_` (`BlockPos`)
- `p_177247_` (`Block`)

**Returns:** `public void`

### setBlock

```java
public void setBlock(BlockPos p_177253_, BlockState p_177254_)
```

**Parameters:**

- `p_177253_` (`BlockPos`)
- `p_177254_` (`BlockState`)

**Returns:** `public void`

### setNight

```java
public void setNight()
```

**Returns:** `public void`

### setDayTime

```java
public void setDayTime(int p_177102_)
```

**Parameters:**

- `p_177102_` (`int`)

**Returns:** `public void`

### assertBlockPresent

```java
public void assertBlockPresent(Block p_177204_, int p_177205_, int p_177206_, int p_177207_)
```

**Parameters:**

- `p_177204_` (`Block`)
- `p_177205_` (`int`)
- `p_177206_` (`int`)
- `p_177207_` (`int`)

**Returns:** `public void`

### assertBlockPresent

```java
public void assertBlockPresent(Block p_177209_, BlockPos p_177210_)
```

**Parameters:**

- `p_177209_` (`Block`)
- `p_177210_` (`BlockPos`)

**Returns:** `public void`

### assertBlockNotPresent

```java
public void assertBlockNotPresent(Block p_177337_, int p_177338_, int p_177339_, int p_177340_)
```

**Parameters:**

- `p_177337_` (`Block`)
- `p_177338_` (`int`)
- `p_177339_` (`int`)
- `p_177340_` (`int`)

**Returns:** `public void`

### assertBlockNotPresent

```java
public void assertBlockNotPresent(Block p_177342_, BlockPos p_177343_)
```

**Parameters:**

- `p_177342_` (`Block`)
- `p_177343_` (`BlockPos`)

**Returns:** `public void`

### succeedWhenBlockPresent

```java
public void succeedWhenBlockPresent(Block p_177378_, int p_177379_, int p_177380_, int p_177381_)
```

**Parameters:**

- `p_177378_` (`Block`)
- `p_177379_` (`int`)
- `p_177380_` (`int`)
- `p_177381_` (`int`)

**Returns:** `public void`

### succeedWhenBlockPresent

```java
public void succeedWhenBlockPresent(Block p_177383_, BlockPos p_177384_)
```

**Parameters:**

- `p_177383_` (`Block`)
- `p_177384_` (`BlockPos`)

**Returns:** `public void`

### assertBlock

```java
public void assertBlock(BlockPos p_177272_, Predicate<Block> p_177273_, String p_177274_)
```

**Parameters:**

- `p_177272_` (`BlockPos`)
- `p_177273_` (`Predicate<Block>`)
- `p_177274_` (`String`)

**Returns:** `public void`

### assertBlock

```java
public void assertBlock(BlockPos p_177276_, Predicate<Block> p_177277_, Supplier<String> p_177278_)
```

**Parameters:**

- `p_177276_` (`BlockPos`)
- `p_177277_` (`Predicate<Block>`)
- `p_177278_` (`Supplier<String>`)

**Returns:** `public void`

### assertBlockProperty

```java
public <T extends Comparable<T>> void assertBlockProperty(BlockPos p_177256_, Property<T> p_177257_, T p_177258_)
```

**Parameters:**

- `p_177256_` (`BlockPos`)
- `p_177257_` (`Property<T>`)
- `p_177258_` (`T`)

**Returns:** `public <T extends Comparable<T>> void`

### assertBlockProperty

```java
public <T extends Comparable<T>> void assertBlockProperty(BlockPos p_177260_, Property<T> p_177261_, Predicate<T> p_177262_, String p_177263_)
```

**Parameters:**

- `p_177260_` (`BlockPos`)
- `p_177261_` (`Property<T>`)
- `p_177262_` (`Predicate<T>`)
- `p_177263_` (`String`)

**Returns:** `public <T extends Comparable<T>> void`

### assertBlockState

```java
public void assertBlockState(BlockPos p_177358_, Predicate<BlockState> p_177359_, Supplier<String> p_177360_)
```

**Parameters:**

- `p_177358_` (`BlockPos`)
- `p_177359_` (`Predicate<BlockState>`)
- `p_177360_` (`Supplier<String>`)

**Returns:** `public void`

### assertBlockEntityData

```java
<T extends BlockEntity> public <T extends BlockEntity> void assertBlockEntityData(BlockPos p_348547_, Predicate<T> p_348669_, Supplier<String> p_348486_)
```

**Parameters:**

- `p_348547_` (`BlockPos`)
- `p_348669_` (`Predicate<T>`)
- `p_348486_` (`Supplier<String>`)

**Returns:** `public <T extends BlockEntity> void`

### assertRedstoneSignal

```java
public void assertRedstoneSignal(BlockPos p_289644_, Direction p_289642_, IntPredicate p_289645_, Supplier<String> p_289684_)
```

**Parameters:**

- `p_289644_` (`BlockPos`)
- `p_289642_` (`Direction`)
- `p_289645_` (`IntPredicate`)
- `p_289684_` (`Supplier<String>`)

**Returns:** `public void`

### assertEntityPresent

```java
public void assertEntityPresent(EntityType<?> p_177157_)
```

**Parameters:**

- `p_177157_` (`EntityType<?>`)

**Returns:** `public void`

### assertEntityPresent

```java
public void assertEntityPresent(EntityType<?> p_177370_, int p_177371_, int p_177372_, int p_177373_)
```

**Parameters:**

- `p_177370_` (`EntityType<?>`)
- `p_177371_` (`int`)
- `p_177372_` (`int`)
- `p_177373_` (`int`)

**Returns:** `public void`

### assertEntityPresent

```java
public void assertEntityPresent(EntityType<?> p_177375_, BlockPos p_177376_)
```

**Parameters:**

- `p_177375_` (`EntityType<?>`)
- `p_177376_` (`BlockPos`)

**Returns:** `public void`

### assertEntityPresent

```java
public void assertEntityPresent(EntityType<?> p_252010_, Vec3 p_249488_, Vec3 p_251186_)
```

**Parameters:**

- `p_252010_` (`EntityType<?>`)
- `p_249488_` (`Vec3`)
- `p_251186_` (`Vec3`)

**Returns:** `public void`

### assertEntitiesPresent

```java
public void assertEntitiesPresent(EntityType<?> p_312835_, int p_312735_)
```

**Parameters:**

- `p_312835_` (`EntityType<?>`)
- `p_312735_` (`int`)

**Returns:** `public void`

### assertEntitiesPresent

```java
public void assertEntitiesPresent(EntityType<?> p_239372_, BlockPos p_239373_, int p_239374_, double p_239375_)
```

**Parameters:**

- `p_239372_` (`EntityType<?>`)
- `p_239373_` (`BlockPos`)
- `p_239374_` (`int`)
- `p_239375_` (`double`)

**Returns:** `public void`

### assertEntityPresent

```java
public void assertEntityPresent(EntityType<?> p_177180_, BlockPos p_177181_, double p_177182_)
```

**Parameters:**

- `p_177180_` (`EntityType<?>`)
- `p_177181_` (`BlockPos`)
- `p_177182_` (`double`)

**Returns:** `public void`

### getEntities

```java
<T extends Entity> public <T extends Entity> List<T> getEntities(EntityType<T> p_238400_, BlockPos p_238401_, double p_238402_)
```

**Parameters:**

- `p_238400_` (`EntityType<T>`)
- `p_238401_` (`BlockPos`)
- `p_238402_` (`double`)

**Returns:** `public <T extends Entity> List<T>`

### getEntities

```java
<T extends Entity> public <T extends Entity> List<T> getEntities(EntityType<T> p_320029_)
```

**Parameters:**

- `p_320029_` (`EntityType<T>`)

**Returns:** `public <T extends Entity> List<T>`

### assertEntityInstancePresent

```java
public void assertEntityInstancePresent(Entity p_177133_, int p_177134_, int p_177135_, int p_177136_)
```

**Parameters:**

- `p_177133_` (`Entity`)
- `p_177134_` (`int`)
- `p_177135_` (`int`)
- `p_177136_` (`int`)

**Returns:** `public void`

### assertEntityInstancePresent

```java
public void assertEntityInstancePresent(Entity p_177141_, BlockPos p_177142_)
```

**Parameters:**

- `p_177141_` (`Entity`)
- `p_177142_` (`BlockPos`)

**Returns:** `public void`

### assertItemEntityCountIs

```java
public void assertItemEntityCountIs(Item p_177199_, BlockPos p_177200_, double p_177201_, int p_177202_)
```

**Parameters:**

- `p_177199_` (`Item`)
- `p_177200_` (`BlockPos`)
- `p_177201_` (`double`)
- `p_177202_` (`int`)

**Returns:** `public void`

### assertItemEntityPresent

```java
public void assertItemEntityPresent(Item p_177195_, BlockPos p_177196_, double p_177197_)
```

**Parameters:**

- `p_177195_` (`Item`)
- `p_177196_` (`BlockPos`)
- `p_177197_` (`double`)

**Returns:** `public void`

### assertItemEntityNotPresent

```java
public void assertItemEntityNotPresent(Item p_236779_, BlockPos p_236780_, double p_236781_)
```

**Parameters:**

- `p_236779_` (`Item`)
- `p_236780_` (`BlockPos`)
- `p_236781_` (`double`)

**Returns:** `public void`

### assertItemEntityPresent

```java
public void assertItemEntityPresent(Item p_304857_)
```

**Parameters:**

- `p_304857_` (`Item`)

**Returns:** `public void`

### assertItemEntityNotPresent

```java
public void assertItemEntityNotPresent(Item p_304474_)
```

**Parameters:**

- `p_304474_` (`Item`)

**Returns:** `public void`

### assertEntityNotPresent

```java
public void assertEntityNotPresent(EntityType<?> p_177310_)
```

**Parameters:**

- `p_177310_` (`EntityType<?>`)

**Returns:** `public void`

### assertEntityNotPresent

```java
public void assertEntityNotPresent(EntityType<?> p_177398_, int p_177399_, int p_177400_, int p_177401_)
```

**Parameters:**

- `p_177398_` (`EntityType<?>`)
- `p_177399_` (`int`)
- `p_177400_` (`int`)
- `p_177401_` (`int`)

**Returns:** `public void`

### assertEntityNotPresent

```java
public void assertEntityNotPresent(EntityType<?> p_177403_, BlockPos p_177404_)
```

**Parameters:**

- `p_177403_` (`EntityType<?>`)
- `p_177404_` (`BlockPos`)

**Returns:** `public void`

### assertEntityNotPresent

```java
public void assertEntityNotPresent(EntityType<?> p_341944_, Vec3 p_341926_, Vec3 p_341919_)
```

**Parameters:**

- `p_341944_` (`EntityType<?>`)
- `p_341926_` (`Vec3`)
- `p_341919_` (`Vec3`)

**Returns:** `public void`

### assertEntityTouching

```java
public void assertEntityTouching(EntityType<?> p_177159_, double p_177160_, double p_177161_, double p_177162_)
```

**Parameters:**

- `p_177159_` (`EntityType<?>`)
- `p_177160_` (`double`)
- `p_177161_` (`double`)
- `p_177162_` (`double`)

**Returns:** `public void`

### assertEntityNotTouching

```java
public void assertEntityNotTouching(EntityType<?> p_177312_, double p_177313_, double p_177314_, double p_177315_)
```

**Parameters:**

- `p_177312_` (`EntityType<?>`)
- `p_177313_` (`double`)
- `p_177314_` (`double`)
- `p_177315_` (`double`)

**Returns:** `public void`

### assertEntityData

```java
<E extends Entity, T> public <E extends Entity, T> void assertEntityData(BlockPos p_177238_, EntityType<E> p_177239_, Function<? super E, T> p_177240_, T p_177241_)
```

**Parameters:**

- `p_177238_` (`BlockPos`)
- `p_177239_` (`EntityType<E>`)
- `p_177240_` (`Function<? super E, T>`)
- `p_177241_` (`T`)

**Returns:** `public <E extends Entity, T> void`

### GameTestAssertException

```java
throw new GameTestAssertException("Expected entity data to be: " + p_177241_ + ", but was: " + t)
```

**Parameters:**

- `"` (`"Expected entity data to be: " + p_177241_ +`)
- `t` (`but was: " +`)

**Returns:** `throw new`

### GameTestAssertException

```java
throw new GameTestAssertException("Expected entity data to be: " + p_177241_ + ", but was: " + t)
```

**Parameters:**

- `"` (`"Expected entity data to be: " + p_177241_ +`)
- `t` (`but was: " +`)

**Returns:** `throw new`

### assertEntityIsHolding

```java
<E extends LivingEntity> public <E extends LivingEntity> void assertEntityIsHolding(BlockPos p_263501_, EntityType<E> p_263510_, Item p_263517_)
```

**Parameters:**

- `p_263501_` (`BlockPos`)
- `p_263510_` (`EntityType<E>`)
- `p_263517_` (`Item`)

**Returns:** `public <E extends LivingEntity> void`

### assertEntityInventoryContains

```java
public <E extends Entity & InventoryCarrier> void assertEntityInventoryContains(BlockPos p_263495_, EntityType<E> p_263521_, Item p_263502_)
```

**Parameters:**

- `p_263495_` (`BlockPos`)
- `p_263521_` (`EntityType<E>`)
- `p_263502_` (`Item`)

### assertContainerEmpty

```java
public void assertContainerEmpty(BlockPos p_177441_)
```

**Parameters:**

- `p_177441_` (`BlockPos`)

**Returns:** `public void`

### GameTestAssertException

```java
throw new GameTestAssertException("Container should be empty")
```

**Parameters:**

- `empty"` (`"Container should be`)

**Returns:** `throw new`

### assertContainerContains

```java
public void assertContainerContains(BlockPos p_177243_, Item p_177244_)
```

**Parameters:**

- `p_177243_` (`BlockPos`)
- `p_177244_` (`Item`)

**Returns:** `public void`

### GameTestAssertException

```java
throw new GameTestAssertException("Container should contain: " + p_177244_)
```

**Parameters:**

- `p_177244_` (`"Container should contain: " +`)

**Returns:** `throw new`

### assertSameBlockStates

```java
public void assertSameBlockStates(BoundingBox p_177225_, BlockPos p_177226_)
```

**Parameters:**

- `p_177225_` (`BoundingBox`)
- `p_177226_` (`BlockPos`)

**Returns:** `public void`

### assertSameBlockState

```java
public void assertSameBlockState(BlockPos p_177269_, BlockPos p_177270_)
```

**Parameters:**

- `p_177269_` (`BlockPos`)
- `p_177270_` (`BlockPos`)

**Returns:** `public void`

### assertAtTickTimeContainerContains

```java
public void assertAtTickTimeContainerContains(long p_177124_, BlockPos p_177125_, Item p_177126_)
```

**Parameters:**

- `p_177124_` (`long`)
- `p_177125_` (`BlockPos`)
- `p_177126_` (`Item`)

**Returns:** `public void`

### assertAtTickTimeContainerEmpty

```java
public void assertAtTickTimeContainerEmpty(long p_177121_, BlockPos p_177122_)
```

**Parameters:**

- `p_177121_` (`long`)
- `p_177122_` (`BlockPos`)

**Returns:** `public void`

### succeedWhenEntityData

```java
<E extends Entity, T> public <E extends Entity, T> void succeedWhenEntityData(BlockPos p_177350_, EntityType<E> p_177351_, Function<E, T> p_177352_, T p_177353_)
```

**Parameters:**

- `p_177350_` (`BlockPos`)
- `p_177351_` (`EntityType<E>`)
- `p_177352_` (`Function<E, T>`)
- `p_177353_` (`T`)

**Returns:** `public <E extends Entity, T> void`

### assertEntityPosition

```java
public void assertEntityPosition(Entity p_353077_, AABB p_353054_, String p_353075_)
```

**Parameters:**

- `p_353077_` (`Entity`)
- `p_353054_` (`AABB`)
- `p_353075_` (`String`)

**Returns:** `public void`

### assertEntityProperty

```java
<E extends Entity> public <E extends Entity> void assertEntityProperty(E p_177153_, Predicate<E> p_177154_, String p_177155_)
```

**Parameters:**

- `p_177153_` (`E`)
- `p_177154_` (`Predicate<E>`)
- `p_177155_` (`String`)

**Returns:** `public <E extends Entity> void`

### GameTestAssertException

```java
throw new GameTestAssertException("Entity " + p_177153_ + " failed " + p_177155_ + " test")
```

**Parameters:**

- `test"` (`"Entity " + p_177153_ + " failed " + p_177155_ + "`)

**Returns:** `throw new`

### assertEntityProperty

```java
<E extends Entity, T> public <E extends Entity, T> void assertEntityProperty(E p_177148_, Function<E, T> p_177149_, String p_177150_, T p_177151_)
```

**Parameters:**

- `p_177148_` (`E`)
- `p_177149_` (`Function<E, T>`)
- `p_177150_` (`String`)
- `p_177151_` (`T`)

**Returns:** `public <E extends Entity, T> void`

### GameTestAssertException

```java
throw new GameTestAssertException("Entity " + p_177148_ + " value " + p_177150_ + "=" + t + " is not equal to expected " + p_177151_)
```

**Parameters:**

- `p_177151_` (`"Entity " + p_177148_ + " value " + p_177150_ + "=" + t + " is not equal to expected " +`)

**Returns:** `throw new`

### assertLivingEntityHasMobEffect

```java
public void assertLivingEntityHasMobEffect(LivingEntity p_296040_, Holder<MobEffect> p_316528_, int p_294266_)
```

**Parameters:**

- `p_296040_` (`LivingEntity`)
- `p_316528_` (`Holder<MobEffect>`)
- `p_294266_` (`int`)

**Returns:** `public void`

### succeedWhenEntityPresent

```java
public void succeedWhenEntityPresent(EntityType<?> p_177414_, int p_177415_, int p_177416_, int p_177417_)
```

**Parameters:**

- `p_177414_` (`EntityType<?>`)
- `p_177415_` (`int`)
- `p_177416_` (`int`)
- `p_177417_` (`int`)

**Returns:** `public void`

### succeedWhenEntityPresent

```java
public void succeedWhenEntityPresent(EntityType<?> p_177419_, BlockPos p_177420_)
```

**Parameters:**

- `p_177419_` (`EntityType<?>`)
- `p_177420_` (`BlockPos`)

**Returns:** `public void`

### succeedWhenEntityNotPresent

```java
public void succeedWhenEntityNotPresent(EntityType<?> p_177427_, int p_177428_, int p_177429_, int p_177430_)
```

**Parameters:**

- `p_177427_` (`EntityType<?>`)
- `p_177428_` (`int`)
- `p_177429_` (`int`)
- `p_177430_` (`int`)

**Returns:** `public void`

### succeedWhenEntityNotPresent

```java
public void succeedWhenEntityNotPresent(EntityType<?> p_177432_, BlockPos p_177433_)
```

**Parameters:**

- `p_177432_` (`EntityType<?>`)
- `p_177433_` (`BlockPos`)

**Returns:** `public void`

### succeed

```java
public void succeed()
```

**Returns:** `public void`

### ensureSingleFinalCheck

```java
private void ensureSingleFinalCheck()
```

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("This test already has final clause")
```

**Parameters:**

- `clause"` (`"This test already has final`)

**Returns:** `throw new`

### succeedIf

```java
public void succeedIf(Runnable p_177280_)
```

**Parameters:**

- `p_177280_` (`Runnable`)

**Returns:** `public void`

### succeedWhen

```java
public void succeedWhen(Runnable p_177362_)
```

**Parameters:**

- `p_177362_` (`Runnable`)

**Returns:** `public void`

### succeedOnTickWhen

```java
public void succeedOnTickWhen(int p_177118_, Runnable p_177119_)
```

**Parameters:**

- `p_177118_` (`int`)
- `p_177119_` (`Runnable`)

**Returns:** `public void`

### runAtTickTime

```java
public void runAtTickTime(long p_177128_, Runnable p_177129_)
```

**Parameters:**

- `p_177128_` (`long`)
- `p_177129_` (`Runnable`)

**Returns:** `public void`

### runAfterDelay

```java
public void runAfterDelay(long p_177307_, Runnable p_177308_)
```

**Parameters:**

- `p_177307_` (`long`)
- `p_177308_` (`Runnable`)

**Returns:** `public void`

### randomTick

```java
public void randomTick(BlockPos p_177447_)
```

**Parameters:**

- `p_177447_` (`BlockPos`)

**Returns:** `public void`

### tickPrecipitation

```java
public void tickPrecipitation(BlockPos p_313817_)
```

**Parameters:**

- `p_313817_` (`BlockPos`)

**Returns:** `public void`

### tickPrecipitation

```java
public void tickPrecipitation()
```

**Returns:** `public void`

### getHeight

```java
public int getHeight(Heightmap.Types p_236775_, int p_236776_, int p_236777_)
```

**Parameters:**

- `p_236775_` (`Heightmap.Types`)
- `p_236776_` (`int`)
- `p_236777_` (`int`)

**Returns:** `public int`

### fail

```java
public void fail(String p_177290_, BlockPos p_177291_)
```

**Parameters:**

- `p_177290_` (`String`)
- `p_177291_` (`BlockPos`)

**Returns:** `public void`

### fail

```java
public void fail(String p_177287_, Entity p_177288_)
```

**Parameters:**

- `p_177287_` (`String`)
- `p_177288_` (`Entity`)

**Returns:** `public void`

### fail

```java
public void fail(String p_177285_)
```

**Parameters:**

- `p_177285_` (`String`)

**Returns:** `public void`

### GameTestAssertException

```java
throw new GameTestAssertException()
```

**Returns:** `throw new`

### failIf

```java
public void failIf(Runnable p_177393_)
```

**Parameters:**

- `p_177393_` (`Runnable`)

**Returns:** `public void`

### failIfEver

```java
public void failIfEver(Runnable p_177411_)
```

**Parameters:**

- `p_177411_` (`Runnable`)

**Returns:** `public void`

### startSequence

```java
public GameTestSequence startSequence()
```

**Returns:** `public GameTestSequence`

### absolutePos

```java
public BlockPos absolutePos(BlockPos p_177450_)
```

**Parameters:**

- `p_177450_` (`BlockPos`)

**Returns:** `public BlockPos`

### relativePos

```java
public BlockPos relativePos(BlockPos p_177453_)
```

**Parameters:**

- `p_177453_` (`BlockPos`)

**Returns:** `public BlockPos`

### absoluteVec

```java
public Vec3 absoluteVec(Vec3 p_177228_)
```

**Parameters:**

- `p_177228_` (`Vec3`)

**Returns:** `public Vec3`

### relativeVec

```java
public Vec3 relativeVec(Vec3 p_251543_)
```

**Parameters:**

- `p_251543_` (`Vec3`)

**Returns:** `public Vec3`

### getTestRotation

```java
public Rotation getTestRotation()
```

**Returns:** `public Rotation`

### assertTrue

```java
public void assertTrue(boolean p_249380_, String p_248720_)
```

**Parameters:**

- `p_249380_` (`boolean`)
- `p_248720_` (`String`)

**Returns:** `public void`

### GameTestAssertException

```java
throw new GameTestAssertException()
```

**Returns:** `throw new`

### assertValueEqual

```java
<N> public <N> void assertValueEqual(N p_324013_, N p_323869_, String p_321732_)
```

**Parameters:**

- `p_324013_` (`N`)
- `p_323869_` (`N`)
- `p_321732_` (`String`)

**Returns:** `public <N> void`

### GameTestAssertException

```java
throw new GameTestAssertException("Expected " + p_321732_ + " to be " + p_323869_ + ", but was " + p_324013_)
```

**Parameters:**

- `"` (`"Expected " + p_321732_ + " to be " + p_323869_ +`)
- `p_324013_` (`but was " +`)

**Returns:** `throw new`

### assertFalse

```java
public void assertFalse(boolean p_277974_, String p_277933_)
```

**Parameters:**

- `p_277974_` (`boolean`)
- `p_277933_` (`String`)

**Returns:** `public void`

### GameTestAssertException

```java
throw new GameTestAssertException()
```

**Returns:** `throw new`

### getTick

```java
public long getTick()
```

**Returns:** `public long`

### getBounds

```java
public AABB getBounds()
```

**Returns:** `public AABB`

### getRelativeBounds

```java
private AABB getRelativeBounds()
```

**Returns:** `private AABB`

### forEveryBlockInStructure

```java
public void forEveryBlockInStructure(Consumer<BlockPos> p_177293_)
```

**Parameters:**

- `p_177293_` (`Consumer<BlockPos>`)

**Returns:** `public void`

### onEachTick

```java
public void onEachTick(Runnable p_177424_)
```

**Parameters:**

- `p_177424_` (`Runnable`)

**Returns:** `public void`

### placeAt

```java
public void placeAt(Player p_261595_, ItemStack p_262007_, BlockPos p_261973_, Direction p_262008_)
```

**Parameters:**

- `p_261595_` (`Player`)
- `p_262007_` (`ItemStack`)
- `p_261973_` (`BlockPos`)
- `p_262008_` (`Direction`)

**Returns:** `public void`

### setBiome

```java
public void setBiome(ResourceKey<Biome> p_313921_)
```

**Parameters:**

- `p_313921_` (`ResourceKey<Biome>`)

**Returns:** `public void`
