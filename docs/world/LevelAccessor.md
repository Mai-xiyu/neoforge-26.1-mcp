# LevelAccessor

**Package:** `net.minecraft.world.level`
**Type:** interface
**Extends:** `CommonLevelAccessor, LevelTimeAccess`

## Methods

### dayTime

```java
default long dayTime()
```

**Returns:** `long`

### nextSubTickCount

```java
long nextSubTickCount()
```

**Returns:** `long`

### getBlockTicks

```java
LevelTickAccess<Block> getBlockTicks()
```

**Returns:** `LevelTickAccess<Block>`

### createTick

```java
<T> private <T> ScheduledTick<T> createTick(BlockPos p_186483_, T p_186484_, int p_186485_, TickPriority p_186486_)
```

**Parameters:**

- `p_186483_` (`BlockPos`)
- `p_186484_` (`T`)
- `p_186485_` (`int`)
- `p_186486_` (`TickPriority`)

**Returns:** `private <T> ScheduledTick<T>`

### createTick

```java
<T> private <T> ScheduledTick<T> createTick(BlockPos p_186479_, T p_186480_, int p_186481_)
```

**Parameters:**

- `p_186479_` (`BlockPos`)
- `p_186480_` (`T`)
- `p_186481_` (`int`)

**Returns:** `private <T> ScheduledTick<T>`

### scheduleTick

```java
default void scheduleTick(BlockPos p_186465_, Block p_186466_, int p_186467_, TickPriority p_186468_)
```

**Parameters:**

- `p_186465_` (`BlockPos`)
- `p_186466_` (`Block`)
- `p_186467_` (`int`)
- `p_186468_` (`TickPriority`)

**Returns:** `default void`

### scheduleTick

```java
default void scheduleTick(BlockPos p_186461_, Block p_186462_, int p_186463_)
```

**Parameters:**

- `p_186461_` (`BlockPos`)
- `p_186462_` (`Block`)
- `p_186463_` (`int`)

**Returns:** `default void`

### getFluidTicks

```java
LevelTickAccess<Fluid> getFluidTicks()
```

**Returns:** `LevelTickAccess<Fluid>`

### scheduleTick

```java
default void scheduleTick(BlockPos p_186474_, Fluid p_186475_, int p_186476_, TickPriority p_186477_)
```

**Parameters:**

- `p_186474_` (`BlockPos`)
- `p_186475_` (`Fluid`)
- `p_186476_` (`int`)
- `p_186477_` (`TickPriority`)

**Returns:** `default void`

### scheduleTick

```java
default void scheduleTick(BlockPos p_186470_, Fluid p_186471_, int p_186472_)
```

**Parameters:**

- `p_186470_` (`BlockPos`)
- `p_186471_` (`Fluid`)
- `p_186472_` (`int`)

**Returns:** `default void`

### getLevelData

```java
LevelData getLevelData()
```

**Returns:** `LevelData`

### getCurrentDifficultyAt

```java
DifficultyInstance getCurrentDifficultyAt(BlockPos p_46800_)
```

**Parameters:**

- `p_46800_` (`BlockPos`)

**Returns:** `DifficultyInstance`

### getServer

```java
MinecraftServer getServer()
```

**Returns:** `MinecraftServer`

### getDifficulty

```java
default Difficulty getDifficulty()
```

**Returns:** `default Difficulty`

### getChunkSource

```java
ChunkSource getChunkSource()
```

**Returns:** `ChunkSource`

### hasChunk

```java
default boolean hasChunk(int p_46794_, int p_46795_)
```

**Parameters:**

- `p_46794_` (`int`)
- `p_46795_` (`int`)

**Returns:** `boolean`

### getRandom

```java
RandomSource getRandom()
```

**Returns:** `RandomSource`

### blockUpdated

```java
default void blockUpdated(BlockPos p_46781_, Block p_46782_)
```

**Parameters:**

- `p_46781_` (`BlockPos`)
- `p_46782_` (`Block`)

**Returns:** `default void`

### neighborShapeChanged

```java
default void neighborShapeChanged(Direction p_220411_, BlockState p_220412_, BlockPos p_220413_, BlockPos p_220414_, int p_220415_, int p_220416_)
```

**Parameters:**

- `p_220411_` (`Direction`)
- `p_220412_` (`BlockState`)
- `p_220413_` (`BlockPos`)
- `p_220414_` (`BlockPos`)
- `p_220415_` (`int`)
- `p_220416_` (`int`)

**Returns:** `default void`

### playSound

```java
default void playSound(Player p_251195_, BlockPos p_250192_, SoundEvent p_249887_, SoundSource p_250593_)
```

**Parameters:**

- `p_251195_` (`Player`)
- `p_250192_` (`BlockPos`)
- `p_249887_` (`SoundEvent`)
- `p_250593_` (`SoundSource`)

**Returns:** `default void`

### playSound

```java
void playSound(Player p_46775_, BlockPos p_46776_, SoundEvent p_46777_, SoundSource p_46778_, float p_46779_, float p_46780_)
```

**Parameters:**

- `p_46775_` (`Player`)
- `p_46776_` (`BlockPos`)
- `p_46777_` (`SoundEvent`)
- `p_46778_` (`SoundSource`)
- `p_46779_` (`float`)
- `p_46780_` (`float`)

### addParticle

```java
void addParticle(ParticleOptions p_46783_, double p_46784_, double p_46785_, double p_46786_, double p_46787_, double p_46788_, double p_46789_)
```

**Parameters:**

- `p_46783_` (`ParticleOptions`)
- `p_46784_` (`double`)
- `p_46785_` (`double`)
- `p_46786_` (`double`)
- `p_46787_` (`double`)
- `p_46788_` (`double`)
- `p_46789_` (`double`)

### levelEvent

```java
void levelEvent(Player p_46771_, int p_46772_, BlockPos p_46773_, int p_46774_)
```

**Parameters:**

- `p_46771_` (`Player`)
- `p_46772_` (`int`)
- `p_46773_` (`BlockPos`)
- `p_46774_` (`int`)

### levelEvent

```java
default void levelEvent(int p_46797_, BlockPos p_46798_, int p_46799_)
```

**Parameters:**

- `p_46797_` (`int`)
- `p_46798_` (`BlockPos`)
- `p_46799_` (`int`)

**Returns:** `default void`

### gameEvent

```java
void gameEvent(Holder<GameEvent> p_316267_, Vec3 p_220405_, GameEvent.Context p_220406_)
```

**Parameters:**

- `p_316267_` (`Holder<GameEvent>`)
- `p_220405_` (`Vec3`)
- `p_220406_` (`GameEvent.Context`)

### gameEvent

```java
default void gameEvent(Entity p_151549_, Holder<GameEvent> p_316314_, Vec3 p_316613_)
```

**Parameters:**

- `p_151549_` (`Entity`)
- `p_316314_` (`Holder<GameEvent>`)
- `p_316613_` (`Vec3`)

**Returns:** `default void`

### gameEvent

```java
default void gameEvent(Entity p_316772_, Holder<GameEvent> p_316248_, BlockPos p_316282_)
```

**Parameters:**

- `p_316772_` (`Entity`)
- `p_316248_` (`Holder<GameEvent>`)
- `p_316282_` (`BlockPos`)

**Returns:** `default void`

### gameEvent

```java
default void gameEvent(Holder<GameEvent> p_316320_, BlockPos p_220409_, GameEvent.Context p_220410_)
```

**Parameters:**

- `p_316320_` (`Holder<GameEvent>`)
- `p_220409_` (`BlockPos`)
- `p_220410_` (`GameEvent.Context`)

**Returns:** `default void`

### gameEvent

```java
default void gameEvent(ResourceKey<GameEvent> p_316780_, BlockPos p_316509_, GameEvent.Context p_316524_)
```

**Parameters:**

- `p_316780_` (`ResourceKey<GameEvent>`)
- `p_316509_` (`BlockPos`)
- `p_316524_` (`GameEvent.Context`)

**Returns:** `default void`
