# GoAndGiveItemsToTarget

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class<E extends LivingEntity & InventoryCarrier> extends Behavior<E>

## Methods

### GoAndGiveItemsToTarget

```java
public GoAndGiveItemsToTarget(Function<LivingEntity, Optional<PositionTracker>> p_249894_, float p_249937_, int p_249620_)
```

**Parameters:**

- `p_249894_` (`Function<LivingEntity, Optional<PositionTracker>>`)
- `p_249937_` (`float`)
- `p_249620_` (`int`)

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_217196_, E p_217197_)
```

**Parameters:**

- `p_217196_` (`ServerLevel`)
- `p_217197_` (`E`)

**Returns:** `boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_217218_, E p_217219_, long p_217220_)
```

**Parameters:**

- `p_217218_` (`ServerLevel`)
- `p_217219_` (`E`)
- `p_217220_` (`long`)

**Returns:** `boolean`

### start

```java
protected void start(ServerLevel p_217199_, E p_217200_, long p_217201_)
```

**Parameters:**

- `p_217199_` (`ServerLevel`)
- `p_217200_` (`E`)
- `p_217201_` (`long`)

### tick

```java
protected void tick(ServerLevel p_217226_, E p_217227_, long p_217228_)
```

**Parameters:**

- `p_217226_` (`ServerLevel`)
- `p_217227_` (`E`)
- `p_217228_` (`long`)

### triggerDropItemOnBlock

```java
private void triggerDropItemOnBlock(PositionTracker p_217214_, ItemStack p_217215_, ServerPlayer p_217216_)
```

**Parameters:**

- `p_217214_` (`PositionTracker`)
- `p_217215_` (`ItemStack`)
- `p_217216_` (`ServerPlayer`)

**Returns:** `private void`

### canThrowItemToTarget

```java
private boolean canThrowItemToTarget(E p_217203_)
```

**Parameters:**

- `p_217203_` (`E`)

**Returns:** `private boolean`

### getThrowPosition

```java
private static Vec3 getThrowPosition(PositionTracker p_217212_)
```

**Parameters:**

- `p_217212_` (`PositionTracker`)

**Returns:** `private static Vec3`

### throwItem

```java
public static void throwItem(LivingEntity p_217208_, ItemStack p_217209_, Vec3 p_217210_)
```

**Parameters:**

- `p_217208_` (`LivingEntity`)
- `p_217209_` (`ItemStack`)
- `p_217210_` (`Vec3`)

**Returns:** `public static void`
