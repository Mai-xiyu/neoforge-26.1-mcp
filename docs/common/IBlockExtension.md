# IBlockExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface
**Annotations:** `@SuppressWarnings("deprecation")`

## Methods

### self

```java
private Block self()
```

**Returns:** `private Block`

### getFriction

```java
default float getFriction(BlockState state, LevelReader level, BlockPos pos, Entity entity)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)

**Returns:** `float`

### hasDynamicLightEmission

```java
default boolean hasDynamicLightEmission(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `boolean`

### getLightEmission

```java
default int getLightEmission(BlockState state, BlockGetter level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`

### isLadder

```java
default boolean isLadder(BlockState state, LevelReader level, BlockPos pos, LivingEntity entity)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`LivingEntity`)

**Returns:** `boolean`

### makesOpenTrapdoorAboveClimbable

```java
default boolean makesOpenTrapdoorAboveClimbable(BlockState state, LevelReader level, BlockPos pos, BlockState trapdoorState)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `trapdoorState` (`BlockState`)

**Returns:** `boolean`

### isBurning

```java
default boolean isBurning(BlockState state, BlockGetter level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### canHarvestBlock

```java
default public public boolean canHarvestBlock(BlockState state, BlockGetter level, BlockPos pos, Player player)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `player` (`Player`)

**Returns:** `public boolean`

### onDestroyedByPlayer

```java
default boolean onDestroyedByPlayer(BlockState state, Level level, BlockPos pos, Player player, boolean willHarvest, FluidState fluid)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `player` (`Player`)
- `willHarvest` (`boolean`)
- `fluid` (`FluidState`)

**Returns:** `boolean`

### onDestroyedByPushReaction

```java
default void onDestroyedByPushReaction(BlockState state, Level level, BlockPos pos, Direction pushDirection, FluidState fluid)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `pushDirection` (`Direction`)
- `fluid` (`FluidState`)

### isBed

```java
default boolean isBed(BlockState state, BlockGetter level, BlockPos pos, LivingEntity sleeper)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `sleeper` (`LivingEntity`)

**Returns:** `boolean`

### getRespawnPosition

```java
default Optional<ServerPlayer.RespawnPosAngle> getRespawnPosition(BlockState state, EntityType<?> type, LevelReader levelReader, BlockPos pos, float orientation)
```

**Parameters:**

- `state` (`BlockState`)
- `type` (`EntityType<?>`)
- `levelReader` (`LevelReader`)
- `pos` (`BlockPos`)
- `orientation` (`float`)

**Returns:** `Optional<ServerPlayer.RespawnPosAngle>`

### setBedOccupied

```java
default void setBedOccupied(BlockState state, Level level, BlockPos pos, LivingEntity sleeper, boolean occupied)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `sleeper` (`LivingEntity`)
- `occupied` (`boolean`)

### getBedDirection

```java
default Direction getBedDirection(BlockState state, LevelReader level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `Direction`

### getExplosionResistance

```java
default float getExplosionResistance(BlockState state, BlockGetter level, BlockPos pos, Explosion explosion)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `explosion` (`Explosion`)

**Returns:** `float`

### getCloneItemStack

```java
default ItemStack getCloneItemStack(BlockState state, HitResult target, LevelReader level, BlockPos pos, Player player)
```

**Parameters:**

- `state` (`BlockState`)
- `target` (`HitResult`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `player` (`Player`)

**Returns:** `ItemStack`

### addLandingEffects

```java
default boolean addLandingEffects(BlockState state1, ServerLevel level, BlockPos pos, BlockState state2, LivingEntity entity, int numberOfParticles)
```

**Parameters:**

- `state1` (`BlockState`)
- `level` (`ServerLevel`)
- `pos` (`BlockPos`)
- `state2` (`BlockState`)
- `entity` (`LivingEntity`)
- `numberOfParticles` (`int`)

**Returns:** `boolean`

### addRunningEffects

```java
default boolean addRunningEffects(BlockState state, Level level, BlockPos pos, Entity entity)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)

**Returns:** `boolean`

### canSustainPlant

```java
default TriState canSustainPlant(BlockState state, BlockGetter level, BlockPos soilPosition, Direction facing, BlockState plant)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `soilPosition` (`BlockPos`)
- `facing` (`Direction`)
- `plant` (`BlockState`)

**Returns:** `TriState`

### onTreeGrow

```java
default boolean onTreeGrow(BlockState state, LevelReader level, BiConsumer<BlockPos, BlockState> placeFunction, RandomSource randomSource, BlockPos pos, TreeConfiguration config)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `placeFunction` (`BiConsumer<BlockPos, BlockState>`)
- `randomSource` (`RandomSource`)
- `pos` (`BlockPos`)
- `config` (`TreeConfiguration`)

**Returns:** `boolean`

### isFertile

```java
default boolean isFertile(BlockState state, BlockGetter level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### isConduitFrame

```java
default boolean isConduitFrame(BlockState state, LevelReader level, BlockPos pos, BlockPos conduit)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `conduit` (`BlockPos`)

**Returns:** `boolean`

### isPortalFrame

```java
default boolean isPortalFrame(BlockState state, BlockGetter level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### getExpDrop

```java
default int getExpDrop(BlockState state, LevelAccessor level, BlockPos pos, BlockEntity blockEntity, Entity breaker, ItemStack tool)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `blockEntity` (`BlockEntity`)
- `breaker` (`Entity`)
- `tool` (`ItemStack`)

**Returns:** `int`

### rotate

```java
default BlockState rotate(BlockState state, LevelAccessor level, BlockPos pos, Rotation direction)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `direction` (`Rotation`)

**Returns:** `default BlockState`

### getEnchantPowerBonus

```java
default float getEnchantPowerBonus(BlockState state, LevelReader level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `float`

### onNeighborChange

```java
default void onNeighborChange(BlockState state, LevelReader level, BlockPos pos, BlockPos neighbor)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `neighbor` (`BlockPos`)

### shouldCheckWeakPower

```java
default boolean shouldCheckWeakPower(BlockState state, SignalGetter level, BlockPos pos, Direction side)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`SignalGetter`)
- `pos` (`BlockPos`)
- `side` (`Direction`)

**Returns:** `boolean`

### getWeakChanges

```java
default boolean getWeakChanges(BlockState state, LevelReader level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### getSoundType

```java
default SoundType getSoundType(BlockState state, LevelReader level, BlockPos pos, Entity entity)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)

**Returns:** `SoundType`

### getBeaconColorMultiplier

```java
default Integer getBeaconColorMultiplier(BlockState state, LevelReader level, BlockPos pos, BlockPos beaconPos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `beaconPos` (`BlockPos`)

**Returns:** `Integer`

### getStateAtViewpoint

```java
default BlockState getStateAtViewpoint(BlockState state, BlockGetter level, BlockPos pos, Vec3 viewpoint)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `viewpoint` (`Vec3`)

**Returns:** `BlockState`

### getBlockPathType

```java
default PathType getBlockPathType(BlockState state, BlockGetter level, BlockPos pos, Mob mob)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`Mob`)

**Returns:** `PathType`

### getAdjacentBlockPathType

```java
default PathType getAdjacentBlockPathType(BlockState state, BlockGetter level, BlockPos pos, Mob mob, PathType originalType)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`Mob`)
- `originalType` (`PathType`)

**Returns:** `PathType`

### isSlimeBlock

```java
default boolean isSlimeBlock(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `boolean`

### isStickyBlock

```java
default boolean isStickyBlock(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `boolean`

### canStickTo

```java
default boolean canStickTo(BlockState state, BlockState other)
```

**Parameters:**

- `state` (`BlockState`)
- `other` (`BlockState`)

**Returns:** `boolean`

### getFlammability

```java
default int getFlammability(BlockState state, BlockGetter level, BlockPos pos, Direction direction)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

**Returns:** `int`

### isFlammable

```java
default boolean isFlammable(BlockState state, BlockGetter level, BlockPos pos, Direction direction)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

**Returns:** `boolean`

### onCaughtFire

```java
default void onCaughtFire(BlockState state, Level level, BlockPos pos, Direction direction, LivingEntity igniter)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)
- `igniter` (`LivingEntity`)

### getFireSpreadSpeed

```java
default int getFireSpreadSpeed(BlockState state, BlockGetter level, BlockPos pos, Direction direction)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

**Returns:** `int`

### isFireSource

```java
default boolean isFireSource(BlockState state, LevelReader level, BlockPos pos, Direction direction)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

**Returns:** `boolean`

### canEntityDestroy

```java
default boolean canEntityDestroy(BlockState state, BlockGetter level, BlockPos pos, Entity entity)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)

**Returns:** `boolean`

### canDropFromExplosion

```java
default boolean canDropFromExplosion(BlockState state, BlockGetter level, BlockPos pos, Explosion explosion)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `explosion` (`Explosion`)

**Returns:** `boolean`

### onBlockExploded

```java
default void onBlockExploded(BlockState state, Level level, BlockPos pos, Explosion explosion)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `explosion` (`Explosion`)

### collisionExtendsVertically

```java
default boolean collisionExtendsVertically(BlockState state, BlockGetter level, BlockPos pos, Entity collidingEntity)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `collidingEntity` (`Entity`)

**Returns:** `boolean`

### shouldDisplayFluidOverlay

```java
default boolean shouldDisplayFluidOverlay(BlockState state, BlockAndTintGetter level, BlockPos pos, FluidState fluidState)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `fluidState` (`FluidState`)

**Returns:** `boolean`

### getToolModifiedState

```java
default BlockState getToolModifiedState(BlockState state, UseOnContext context, ItemAbility itemAbility, boolean simulate)
```

**Parameters:**

- `state` (`BlockState`)
- `context` (`UseOnContext`)
- `itemAbility` (`ItemAbility`)
- `simulate` (`boolean`)

**Returns:** `BlockState`

### isScaffolding

```java
default boolean isScaffolding(BlockState state, LevelReader level, BlockPos pos, LivingEntity entity)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`LivingEntity`)

**Returns:** `boolean`

### canConnectRedstone

```java
default boolean canConnectRedstone(BlockState state, BlockGetter level, BlockPos pos, Direction direction)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

**Returns:** `boolean`

### hidesNeighborFace

```java
default boolean hidesNeighborFace(BlockGetter level, BlockPos pos, BlockState state, BlockState neighborState, Direction dir)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `neighborState` (`BlockState`)
- `dir` (`Direction`)

**Returns:** `boolean`

### supportsExternalFaceHiding

```java
default boolean supportsExternalFaceHiding(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `boolean`

### onBlockStateChange

```java
default void onBlockStateChange(LevelReader level, BlockPos pos, BlockState oldState, BlockState newState)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `oldState` (`BlockState`)
- `newState` (`BlockState`)

### canBeHydrated

```java
default boolean canBeHydrated(BlockState state, BlockGetter getter, BlockPos pos, FluidState fluid, BlockPos fluidPos)
```

**Parameters:**

- `state` (`BlockState`)
- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)
- `fluid` (`FluidState`)
- `fluidPos` (`BlockPos`)

**Returns:** `boolean`

### getMapColor

```java
default MapColor getMapColor(BlockState state, BlockGetter level, BlockPos pos, MapColor defaultColor)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `defaultColor` (`MapColor`)

**Returns:** `MapColor`

### getAppearance

```java
default BlockState getAppearance(BlockState state, BlockAndTintGetter level, BlockPos pos, Direction side, BlockState queryState, BlockPos queryPos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `side` (`Direction`)
- `queryState` (`BlockState`)
- `queryPos` (`BlockPos`)

**Returns:** `BlockState`

### getPistonPushReaction

```java
default PushReaction getPistonPushReaction(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `PushReaction`

### isEmpty

```java
default boolean isEmpty(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `boolean`

### getBubbleColumnDirection

```java
default BubbleColumnDirection getBubbleColumnDirection(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `BubbleColumnDirection`

### shouldHideAdjacentFluidFace

```java
default boolean shouldHideAdjacentFluidFace(BlockState state, Direction selfFace, FluidState adjacentFluid)
```

**Parameters:**

- `state` (`BlockState`)
- `selfFace` (`Direction`)
- `adjacentFluid` (`FluidState`)

**Returns:** `boolean`
