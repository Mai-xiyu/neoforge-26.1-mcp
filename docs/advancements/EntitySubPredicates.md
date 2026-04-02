# EntitySubPredicates

**Package:** `net.minecraft.advancements.critereon`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LIGHTNING` | `MapCodec<LightningBoltPredicate>` |  |
| `FISHING_HOOK` | `MapCodec<FishingHookPredicate>` |  |
| `PLAYER` | `MapCodec<PlayerPredicate>` |  |
| `SLIME` | `MapCodec<SlimePredicate>` |  |
| `RAIDER` | `MapCodec<RaiderPredicate>` |  |
| `AXOLOTL` | `EntitySubPredicates.EntityVariantPredicateType<Axolotl.Variant>` |  |
| `BOAT` | `EntitySubPredicates.EntityVariantPredicateType<Boat.Type>` |  |
| `FOX` | `EntitySubPredicates.EntityVariantPredicateType<Fox.Type>` |  |
| `MOOSHROOM` | `EntitySubPredicates.EntityVariantPredicateType<MushroomCow.MushroomType>` |  |
| `RABBIT` | `EntitySubPredicates.EntityVariantPredicateType<Rabbit.Variant>` |  |
| `HORSE` | `EntitySubPredicates.EntityVariantPredicateType<Variant>` |  |
| `LLAMA` | `EntitySubPredicates.EntityVariantPredicateType<Llama.Variant>` |  |
| `VILLAGER` | `EntitySubPredicates.EntityVariantPredicateType<VillagerType>` |  |
| `PARROT` | `EntitySubPredicates.EntityVariantPredicateType<Parrot.Variant>` |  |
| `TROPICAL_FISH` | `EntitySubPredicates.EntityVariantPredicateType<TropicalFish.Pattern>` |  |
| `PAINTING` | `EntitySubPredicates.EntityHolderVariantPredicateType<PaintingVariant>` |  |
| `CAT` | `EntitySubPredicates.EntityHolderVariantPredicateType<CatVariant>` |  |

## Methods

### register

```java
<T extends EntitySubPredicate> private static <T extends EntitySubPredicate> MapCodec<T> register(String p_333791_, MapCodec<T> p_333859_)
```

**Parameters:**

- `p_333791_` (`String`)
- `p_333859_` (`MapCodec<T>`)

**Returns:** `private static <T extends EntitySubPredicate> MapCodec<T>`

### register

```java
<V> private static <V> EntitySubPredicates.EntityVariantPredicateType<V> register(String p_333838_, EntitySubPredicates.EntityVariantPredicateType<V> p_334081_)
```

**Parameters:**

- `p_333838_` (`String`)
- `p_334081_` (`EntitySubPredicates.EntityVariantPredicateType<V>`)

**Returns:** `private static <V> EntitySubPredicates.EntityVariantPredicateType<V>`

### register

```java
<V> private static <V> EntitySubPredicates.EntityHolderVariantPredicateType<V> register(String p_335408_, EntitySubPredicates.EntityHolderVariantPredicateType<V> p_335914_)
```

**Parameters:**

- `p_335408_` (`String`)
- `p_335914_` (`EntitySubPredicates.EntityHolderVariantPredicateType<V>`)

**Returns:** `private static <V> EntitySubPredicates.EntityHolderVariantPredicateType<V>`

### bootstrap

```java
public static MapCodec<? extends EntitySubPredicate> bootstrap(Registry<MapCodec<? extends EntitySubPredicate>> p_333899_)
```

**Parameters:**

- `p_333899_` (`Registry<MapCodec<? extends EntitySubPredicate>>`)

**Returns:** `public static MapCodec<? extends EntitySubPredicate>`

### catVariant

```java
public static EntitySubPredicate catVariant(Holder<CatVariant> p_335907_)
```

**Parameters:**

- `p_335907_` (`Holder<CatVariant>`)

**Returns:** `public static EntitySubPredicate`

### frogVariant

```java
public static EntitySubPredicate frogVariant(Holder<FrogVariant> p_335714_)
```

**Parameters:**

- `p_335714_` (`Holder<FrogVariant>`)

**Returns:** `public static EntitySubPredicate`

### wolfVariant

```java
public static EntitySubPredicate wolfVariant(HolderSet<WolfVariant> p_341342_)
```

**Parameters:**

- `p_341342_` (`HolderSet<WolfVariant>`)

**Returns:** `public static EntitySubPredicate`

### create

```java
<V> public static <V> EntitySubPredicates.EntityHolderVariantPredicateType<V> create(ResourceKey<? extends Registry<V>> p_335749_, Function<Entity, Optional<Holder<V>>> p_336155_)
```

**Parameters:**

- `p_335749_` (`ResourceKey<? extends Registry<V>>`)
- `p_336155_` (`Function<Entity, Optional<Holder<V>>>`)

**Returns:** `public static <V> EntitySubPredicates.EntityHolderVariantPredicateType<V>`

### EntityHolderVariantPredicateType

```java
public EntityHolderVariantPredicateType(ResourceKey<? extends Registry<V>> p_336141_, Function<Entity, Optional<Holder<V>>> p_336167_)
```

**Parameters:**

- `p_336141_` (`ResourceKey<? extends Registry<V>>`)
- `p_336167_` (`Function<Entity, Optional<Holder<V>>>`)

**Returns:** `public`

### createPredicate

```java
public EntitySubPredicate createPredicate(HolderSet<V> p_335847_)
```

**Parameters:**

- `p_335847_` (`HolderSet<V>`)

**Returns:** `public EntitySubPredicate`

### Instance

```java
 Instance(HolderSet<V> p_335619_)
```

**Parameters:**

- `p_335619_` (`HolderSet<V>`)

**Returns:** ``

### codec

```java
public MapCodec<EntitySubPredicates.EntityHolderVariantPredicateType<V>.Instance> codec()
```

**Returns:** `MapCodec<EntitySubPredicates.EntityHolderVariantPredicateType<V>.Instance>`

### matches

```java
public boolean matches(Entity p_335756_, ServerLevel p_335539_, Vec3 p_336193_)
```

**Parameters:**

- `p_335756_` (`Entity`)
- `p_335539_` (`ServerLevel`)
- `p_336193_` (`Vec3`)

**Returns:** `boolean`

### create

```java
<V> public static <V> EntitySubPredicates.EntityVariantPredicateType<V> create(Registry<V> p_333921_, Function<Entity, Optional<V>> p_334088_)
```

**Parameters:**

- `p_333921_` (`Registry<V>`)
- `p_334088_` (`Function<Entity, Optional<V>>`)

**Returns:** `public static <V> EntitySubPredicates.EntityVariantPredicateType<V>`

### create

```java
<V> public static <V> EntitySubPredicates.EntityVariantPredicateType<V> create(Codec<V> p_333837_, Function<Entity, Optional<V>> p_334017_)
```

**Parameters:**

- `p_333837_` (`Codec<V>`)
- `p_334017_` (`Function<Entity, Optional<V>>`)

**Returns:** `public static <V> EntitySubPredicates.EntityVariantPredicateType<V>`

### EntityVariantPredicateType

```java
public EntityVariantPredicateType(Codec<V> p_333738_, Function<Entity, Optional<V>> p_333805_)
```

**Parameters:**

- `p_333738_` (`Codec<V>`)
- `p_333805_` (`Function<Entity, Optional<V>>`)

**Returns:** `public`

### createPredicate

```java
public EntitySubPredicate createPredicate(V p_333888_)
```

**Parameters:**

- `p_333888_` (`V`)

**Returns:** `public EntitySubPredicate`

### Instance

```java
 Instance(V p_333871_)
```

**Parameters:**

- `p_333871_` (`V`)

**Returns:** ``

### codec

```java
public MapCodec<EntitySubPredicates.EntityVariantPredicateType<V>.Instance> codec()
```

**Returns:** `MapCodec<EntitySubPredicates.EntityVariantPredicateType<V>.Instance>`

### matches

```java
public boolean matches(Entity p_334092_, ServerLevel p_333810_, Vec3 p_333907_)
```

**Parameters:**

- `p_334092_` (`Entity`)
- `p_333810_` (`ServerLevel`)
- `p_333907_` (`Vec3`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EntityHolderVariantPredicateType` | class |  |
| `EntityVariantPredicateType` | class |  |
