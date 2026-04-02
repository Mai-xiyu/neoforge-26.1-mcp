# GiveGiftToHero

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class
**Extends:** `Behavior<Villager>`

## Methods

### GiveGiftToHero

```java
public GiveGiftToHero(int p_22992_)
```

**Parameters:**

- `p_22992_` (`int`)

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_23003_, Villager p_23004_)
```

**Parameters:**

- `p_23003_` (`ServerLevel`)
- `p_23004_` (`Villager`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_23006_, Villager p_23007_, long p_23008_)
```

**Parameters:**

- `p_23006_` (`ServerLevel`)
- `p_23007_` (`Villager`)
- `p_23008_` (`long`)

**Returns:** `protected void`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_23026_, Villager p_23027_, long p_23028_)
```

**Parameters:**

- `p_23026_` (`ServerLevel`)
- `p_23027_` (`Villager`)
- `p_23028_` (`long`)

**Returns:** `protected boolean`

### tick

```java
protected void tick(ServerLevel p_23036_, Villager p_23037_, long p_23038_)
```

**Parameters:**

- `p_23036_` (`ServerLevel`)
- `p_23037_` (`Villager`)
- `p_23038_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_23046_, Villager p_23047_, long p_23048_)
```

**Parameters:**

- `p_23046_` (`ServerLevel`)
- `p_23047_` (`Villager`)
- `p_23048_` (`long`)

**Returns:** `protected void`

### throwGift

```java
private void throwGift(Villager p_23012_, LivingEntity p_23013_)
```

**Parameters:**

- `p_23012_` (`Villager`)
- `p_23013_` (`LivingEntity`)

**Returns:** `private void`

### getItemToThrow

```java
private List<ItemStack> getItemToThrow(Villager p_23010_)
```

**Parameters:**

- `p_23010_` (`Villager`)

**Returns:** `private List<ItemStack>`

### isHeroVisible

```java
private boolean isHeroVisible(Villager p_23030_)
```

**Parameters:**

- `p_23030_` (`Villager`)

**Returns:** `private boolean`

### getNearestTargetableHero

```java
private Optional<Player> getNearestTargetableHero(Villager p_23040_)
```

**Parameters:**

- `p_23040_` (`Villager`)

**Returns:** `private Optional<Player>`

### isHero

```java
private boolean isHero(Player p_23018_)
```

**Parameters:**

- `p_23018_` (`Player`)

**Returns:** `private boolean`

### isWithinThrowingDistance

```java
private boolean isWithinThrowingDistance(Villager p_23015_, Player p_23016_)
```

**Parameters:**

- `p_23015_` (`Villager`)
- `p_23016_` (`Player`)

**Returns:** `private boolean`

### calculateTimeUntilNextGift

```java
private static int calculateTimeUntilNextGift(ServerLevel p_22994_)
```

**Parameters:**

- `p_22994_` (`ServerLevel`)

**Returns:** `private static int`
