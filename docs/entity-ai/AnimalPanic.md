# AnimalPanic

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class<E extends PathfinderMob> extends Behavior<E>

## Methods

### AnimalPanic

```java
public AnimalPanic(float p_147385_)
```

**Parameters:**

- `p_147385_` (`float`)

**Returns:** `public`

### this

```java
 this(p_349992_ -> DamageTypeTags.PANIC_CAUSES)
```

**Parameters:**

- `DamageTypeTags.PANIC_CAUSES` (`p_349992_ ->`)

**Returns:** ``

### AnimalPanic

```java
public AnimalPanic(float p_275357_, Function<PathfinderMob, TagKey<DamageType>> p_350957_)
```

**Parameters:**

- `p_275357_` (`float`)
- `p_350957_` (`Function<PathfinderMob, TagKey<DamageType>>`)

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_275286_, E p_275721_)
```

**Parameters:**

- `p_275286_` (`ServerLevel`)
- `p_275721_` (`E`)

**Returns:** `protected boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_147391_, E p_147392_, long p_147393_)
```

**Parameters:**

- `p_147391_` (`ServerLevel`)
- `p_147392_` (`E`)
- `p_147393_` (`long`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_147399_, E p_147400_, long p_147401_)
```

**Parameters:**

- `p_147399_` (`ServerLevel`)
- `p_147400_` (`E`)
- `p_147401_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_217118_, E p_217119_, long p_217120_)
```

**Parameters:**

- `p_217118_` (`ServerLevel`)
- `p_217119_` (`E`)
- `p_217120_` (`long`)

**Returns:** `protected void`

### tick

```java
protected void tick(ServerLevel p_147403_, E p_147404_, long p_147405_)
```

**Parameters:**

- `p_147403_` (`ServerLevel`)
- `p_147404_` (`E`)
- `p_147405_` (`long`)

**Returns:** `protected void`

### lookForWater

```java
private Optional<BlockPos> lookForWater(BlockGetter p_196642_, Entity p_196643_)
```

**Parameters:**

- `p_196642_` (`BlockGetter`)
- `p_196643_` (`Entity`)

**Returns:** `private Optional<BlockPos>`
