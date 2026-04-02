# SpawnEggItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### SpawnEggItem

```java
public public SpawnEggItem(EntityType<? extends Mob> p_43207_, int p_43208_, int p_43209_, Item.Properties p_43210_)
```

**Parameters:**

- `p_43207_` (`EntityType<? extends Mob>`)
- `p_43208_` (`int`)
- `p_43209_` (`int`)
- `p_43210_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_43223_)
```

**Parameters:**

- `p_43223_` (`UseOnContext`)

**Returns:** `InteractionResult`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_43225_, Player p_43226_, InteractionHand p_43227_)
```

**Parameters:**

- `p_43225_` (`Level`)
- `p_43226_` (`Player`)
- `p_43227_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### spawnsEntity

```java
public boolean spawnsEntity(ItemStack p_330965_, EntityType<?> p_43232_)
```

**Parameters:**

- `p_330965_` (`ItemStack`)
- `p_43232_` (`EntityType<?>`)

**Returns:** `public boolean`

### getColor

```java
public int getColor(int p_43212_)
```

**Parameters:**

- `p_43212_` (`int`)

**Returns:** `public int`

### byId

```java
public static SpawnEggItem byId(EntityType<?> p_43214_)
```

**Parameters:**

- `p_43214_` (`EntityType<?>`)

**Returns:** `SpawnEggItem`

### eggs

```java
public static Iterable<SpawnEggItem> eggs()
```

**Returns:** `public static Iterable<SpawnEggItem>`

### getType

```java
public EntityType<?> getType(ItemStack p_330335_)
```

**Parameters:**

- `p_330335_` (`ItemStack`)

**Returns:** `public EntityType<?>`

### requiredFeatures

```java
public FeatureFlagSet requiredFeatures()
```

**Returns:** `FeatureFlagSet`

### spawnOffspringFromSpawnEgg

```java
public Optional<Mob> spawnOffspringFromSpawnEgg(Player p_43216_, Mob p_43217_, EntityType<? extends Mob> p_43218_, ServerLevel p_43219_, Vec3 p_43220_, ItemStack p_43221_)
```

**Parameters:**

- `p_43216_` (`Player`)
- `p_43217_` (`Mob`)
- `p_43218_` (`EntityType<? extends Mob>`)
- `p_43219_` (`ServerLevel`)
- `p_43220_` (`Vec3`)
- `p_43221_` (`ItemStack`)

**Returns:** `public Optional<Mob>`

### getDefaultType

```java
protected EntityType<?> getDefaultType()
```

**Returns:** `protected EntityType<?>`
