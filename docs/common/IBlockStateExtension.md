# IBlockStateExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private BlockState self()
```

**Returns:** `private BlockState`

### getFriction

```java
default float getFriction(LevelReader level, BlockPos pos, Entity entity)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)

**Returns:** `float`

### hasDynamicLightEmission

```java
default boolean hasDynamicLightEmission()
```

**Returns:** `boolean`

### getLightEmission

```java
default int getLightEmission(BlockGetter level, BlockPos pos)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`

### isLadder

```java
default boolean isLadder(LevelReader level, BlockPos pos, LivingEntity entity)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`LivingEntity`)

**Returns:** `boolean`

### canHarvestBlock

```java
default boolean canHarvestBlock(BlockGetter level, BlockPos pos, Player player)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `player` (`Player`)

**Returns:** `boolean`

### onDestroyedByPlayer

```java
default boolean onDestroyedByPlayer(Level level, BlockPos pos, Player player, boolean willHarvest, FluidState fluid)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `player` (`Player`)
- `willHarvest` (`boolean`)
- `fluid` (`FluidState`)

**Returns:** `boolean`

### onDestroyedByPushReaction

```java
default void onDestroyedByPushReaction(Level level, BlockPos pos, Direction pushDirection, FluidState fluid)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `pushDirection` (`Direction`)
- `fluid` (`FluidState`)

### isBed

```java
default boolean isBed(BlockGetter level, BlockPos pos, LivingEntity sleeper)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `sleeper` (`LivingEntity`)

**Returns:** `boolean`

### getRespawnPosition

```java
default Optional<ServerPlayer.RespawnPosAngle> getRespawnPosition(EntityType<?> type, LevelReader level, BlockPos pos, float orientation)
```

**Parameters:**

- `type` (`EntityType<?>`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `orientation` (`float`)

**Returns:** `Optional<ServerPlayer.RespawnPosAngle>`

### setBedOccupied

```java
default void setBedOccupied(Level level, BlockPos pos, LivingEntity sleeper, boolean occupied)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `sleeper` (`LivingEntity`)
- `occupied` (`boolean`)

### getBedDirection

```java
default Direction getBedDirection(LevelReader level, BlockPos pos)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `Direction`

### getExplosionResistance

```java
default float getExplosionResistance(BlockGetter level, BlockPos pos, Explosion explosion)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `explosion` (`Explosion`)

**Returns:** `float`

### getCloneItemStack

```java
default ItemStack getCloneItemStack(HitResult target, LevelReader level, BlockPos pos, Player player)
```

**Parameters:**

- `target` (`HitResult`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `player` (`Player`)

**Returns:** `ItemStack`

### addLandingEffects

```java
default boolean addLandingEffects(ServerLevel level, BlockPos pos, BlockState state2, LivingEntity entity, int numberOfParticles)
```

**Parameters:**

- `level` (`ServerLevel`)
- `pos` (`BlockPos`)
- `state2` (`BlockState`)
- `entity` (`LivingEntity`)
- `numberOfParticles` (`int`)

**Returns:** `boolean`

### addRunningEffects

```java
default boolean addRunningEffects(Level level, BlockPos pos, Entity entity)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)

**Returns:** `boolean`

### canSustainPlant

```java
default TriState canSustainPlant(BlockGetter level, BlockPos soilPosition, Direction facing, BlockState plant)
```

**Parameters:**

- `level` (`BlockGetter`)
- `soilPosition` (`BlockPos`)
- `facing` (`Direction`)
- `plant` (`BlockState`)

**Returns:** `TriState`

### onTreeGrow

```java
default boolean onTreeGrow(LevelReader level, BiConsumer<BlockPos, BlockState> placeFunction, RandomSource randomSource, BlockPos pos, TreeConfiguration config)
```

**Parameters:**

- `level` (`LevelReader`)
- `placeFunction` (`BiConsumer<BlockPos, BlockState>`)
- `randomSource` (`RandomSource`)
- `pos` (`BlockPos`)
- `config` (`TreeConfiguration`)

**Returns:** `boolean`

### isFertile

```java
default boolean isFertile(BlockGetter level, BlockPos pos)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### isConduitFrame

```java
default boolean isConduitFrame(LevelReader level, BlockPos pos, BlockPos conduit)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `conduit` (`BlockPos`)

**Returns:** `boolean`

### isPortalFrame

```java
default boolean isPortalFrame(BlockGetter level, BlockPos pos)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### getExpDrop

```java
default int getExpDrop(LevelAccessor level, BlockPos pos, BlockEntity blockEntity, Entity breaker, ItemStack tool)
```

**Parameters:**

- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `blockEntity` (`BlockEntity`)
- `breaker` (`Entity`)
- `tool` (`ItemStack`)

**Returns:** `int`

### rotate

```java
default BlockState rotate(LevelAccessor level, BlockPos pos, Rotation direction)
```

**Parameters:**

- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `direction` (`Rotation`)

**Returns:** `default BlockState`

### getEnchantPowerBonus

```java
default float getEnchantPowerBonus(LevelReader level, BlockPos pos)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `float`

### onNeighborChange

```java
default void onNeighborChange(LevelReader level, BlockPos pos, BlockPos neighbor)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `neighbor` (`BlockPos`)

### shouldCheckWeakPower

```java
default boolean shouldCheckWeakPower(SignalGetter level, BlockPos pos, Direction side)
```

**Parameters:**

- `level` (`SignalGetter`)
- `pos` (`BlockPos`)
- `side` (`Direction`)

**Returns:** `boolean`

### getWeakChanges

```java
default boolean getWeakChanges(LevelReader level, BlockPos pos)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### getSoundType

```java
default SoundType getSoundType(LevelReader level, BlockPos pos, Entity entity)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)

**Returns:** `SoundType`

### getBeaconColorMultiplier

```java
default Integer getBeaconColorMultiplier(LevelReader level, BlockPos pos, BlockPos beacon)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `beacon` (`BlockPos`)

**Returns:** `Integer`

### getStateAtViewpoint

```java
default BlockState getStateAtViewpoint(BlockGetter level, BlockPos pos, Vec3 viewpoint)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `viewpoint` (`Vec3`)

**Returns:** `BlockState`

### isSlimeBlock

```java
default boolean isSlimeBlock()
```

**Returns:** `boolean`

### isStickyBlock

```java
default boolean isStickyBlock()
```

**Returns:** `boolean`

### canStickTo

```java
default boolean canStickTo(BlockState other)
```

**Parameters:**

- `other` (`BlockState`)

**Returns:** `boolean`

### getFlammability

```java
default int getFlammability(BlockGetter level, BlockPos pos, Direction face)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `face` (`Direction`)

**Returns:** `int`

### isFlammable

```java
default boolean isFlammable(BlockGetter level, BlockPos pos, Direction face)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `face` (`Direction`)

**Returns:** `boolean`

### onCaughtFire

```java
default void onCaughtFire(Level level, BlockPos pos, Direction face, LivingEntity igniter)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `face` (`Direction`)
- `igniter` (`LivingEntity`)

### getFireSpreadSpeed

```java
default int getFireSpreadSpeed(BlockGetter level, BlockPos pos, Direction face)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `face` (`Direction`)

**Returns:** `int`

### isFireSource

```java
default boolean isFireSource(LevelReader level, BlockPos pos, Direction side)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `side` (`Direction`)

**Returns:** `boolean`

### canEntityDestroy

```java
default boolean canEntityDestroy(BlockGetter level, BlockPos pos, Entity entity)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)

**Returns:** `boolean`

### isBurning

```java
default boolean isBurning(BlockGetter level, BlockPos pos)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### getBlockPathType

```java
default PathType getBlockPathType(BlockGetter level, BlockPos pos, Mob mob)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`Mob`)

**Returns:** `PathType`

### getAdjacentBlockPathType

```java
default PathType getAdjacentBlockPathType(BlockGetter level, BlockPos pos, Mob mob, PathType originalType)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`Mob`)
- `originalType` (`PathType`)

**Returns:** `PathType`

### canDropFromExplosion

```java
default boolean canDropFromExplosion(BlockGetter level, BlockPos pos, Explosion explosion)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `explosion` (`Explosion`)

**Returns:** `boolean`

### onBlockExploded

```java
default void onBlockExploded(Level level, BlockPos pos, Explosion explosion)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `explosion` (`Explosion`)

### collisionExtendsVertically

```java
default boolean collisionExtendsVertically(BlockGetter level, BlockPos pos, Entity collidingEntity)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `collidingEntity` (`Entity`)

**Returns:** `boolean`

### shouldDisplayFluidOverlay

```java
default boolean shouldDisplayFluidOverlay(BlockAndTintGetter level, BlockPos pos, FluidState fluidState)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `fluidState` (`FluidState`)

**Returns:** `boolean`

### getToolModifiedState

```java
default BlockState getToolModifiedState(UseOnContext context, ItemAbility itemAbility, boolean simulate)
```

**Parameters:**

- `context` (`UseOnContext`)
- `itemAbility` (`ItemAbility`)
- `simulate` (`boolean`)

**Returns:** `BlockState`

### isScaffolding

```java
default boolean isScaffolding(LivingEntity entity)
```

**Parameters:**

- `entity` (`LivingEntity`)

**Returns:** `boolean`

### canRedstoneConnectTo

```java
default boolean canRedstoneConnectTo(BlockGetter level, BlockPos pos, Direction direction)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

**Returns:** `boolean`

### hidesNeighborFace

```java
default boolean hidesNeighborFace(BlockGetter level, BlockPos pos, BlockState neighborState, Direction dir)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `neighborState` (`BlockState`)
- `dir` (`Direction`)

**Returns:** `boolean`

### supportsExternalFaceHiding

```java
default boolean supportsExternalFaceHiding()
```

**Returns:** `boolean`

### onBlockStateChange

```java
default void onBlockStateChange(LevelReader level, BlockPos pos, BlockState oldState)
```

**Parameters:**

- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `oldState` (`BlockState`)

### canBeHydrated

```java
default boolean canBeHydrated(BlockGetter getter, BlockPos pos, FluidState fluid, BlockPos fluidPos)
```

**Parameters:**

- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)
- `fluid` (`FluidState`)
- `fluidPos` (`BlockPos`)

**Returns:** `boolean`

### getAppearance

```java
default BlockState getAppearance(BlockAndTintGetter level, BlockPos pos, Direction side, BlockState queryState, BlockPos queryPos)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `side` (`Direction`)
- `queryState` (`BlockState`)
- `queryPos` (`BlockPos`)

**Returns:** `BlockState`

### isEmpty

```java
default boolean isEmpty()
```

**Returns:** `boolean`

### getBubbleColumnDirection

```java
default BubbleColumnDirection getBubbleColumnDirection()
```

**Returns:** `BubbleColumnDirection`

### shouldHideAdjacentFluidFace

```java
default boolean shouldHideAdjacentFluidFace(Direction selfFace, FluidState adjacentFluid)
```

**Parameters:**

- `selfFace` (`Direction`)
- `adjacentFluid` (`FluidState`)

**Returns:** `boolean`
