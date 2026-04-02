# AllOf

**Package:** `net.minecraft.world.item.enchantment.effects`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AllOf.EntityEffects>` |  |
| `CODEC` | `MapCodec<AllOf.LocationBasedEffects>` |  |
| `CODEC` | `MapCodec<AllOf.ValueEffects>` |  |

## Methods

### codec

```java
<T, A extends T> static <T, A extends T> MapCodec<A> codec(Codec<T> p_346365_, Function<List<T>, A> p_344745_, Function<A, List<T>> p_344875_)
```

**Parameters:**

- `p_346365_` (`Codec<T>`)
- `p_344745_` (`Function<List<T>, A>`)
- `p_344875_` (`Function<A, List<T>>`)

**Returns:** `static <T, A extends T> MapCodec<A>`

### entityEffects

```java
static AllOf.EntityEffects entityEffects(EnchantmentEntityEffect[]... p_345222_)
```

**Parameters:**

- `p_345222_` (`EnchantmentEntityEffect[]...`)

**Returns:** `static AllOf.EntityEffects`

### locationBasedEffects

```java
static AllOf.LocationBasedEffects locationBasedEffects(EnchantmentLocationBasedEffect[]... p_345280_)
```

**Parameters:**

- `p_345280_` (`EnchantmentLocationBasedEffect[]...`)

**Returns:** `static AllOf.LocationBasedEffects`

### valueEffects

```java
static AllOf.ValueEffects valueEffects(EnchantmentValueEffect[]... p_346375_)
```

**Parameters:**

- `p_346375_` (`EnchantmentValueEffect[]...`)

**Returns:** `static AllOf.ValueEffects`

### apply

```java
public void apply(ServerLevel p_346093_, int p_345940_, EnchantedItemInUse p_344929_, Entity p_345319_, Vec3 p_345200_)
```

**Parameters:**

- `p_346093_` (`ServerLevel`)
- `p_345940_` (`int`)
- `p_344929_` (`EnchantedItemInUse`)
- `p_345319_` (`Entity`)
- `p_345200_` (`Vec3`)

### codec

```java
public MapCodec<AllOf.EntityEffects> codec()
```

**Returns:** `MapCodec<AllOf.EntityEffects>`

### onChangedBlock

```java
public void onChangedBlock(ServerLevel p_345329_, int p_345154_, EnchantedItemInUse p_344984_, Entity p_345671_, Vec3 p_344781_, boolean p_345113_)
```

**Parameters:**

- `p_345329_` (`ServerLevel`)
- `p_345154_` (`int`)
- `p_344984_` (`EnchantedItemInUse`)
- `p_345671_` (`Entity`)
- `p_344781_` (`Vec3`)
- `p_345113_` (`boolean`)

### onDeactivated

```java
public void onDeactivated(EnchantedItemInUse p_346024_, Entity p_346234_, Vec3 p_346036_, int p_345698_)
```

**Parameters:**

- `p_346024_` (`EnchantedItemInUse`)
- `p_346234_` (`Entity`)
- `p_346036_` (`Vec3`)
- `p_345698_` (`int`)

### codec

```java
public MapCodec<AllOf.LocationBasedEffects> codec()
```

**Returns:** `MapCodec<AllOf.LocationBasedEffects>`

### process

```java
public float process(int p_345324_, RandomSource p_345137_, float p_344866_)
```

**Parameters:**

- `p_345324_` (`int`)
- `p_345137_` (`RandomSource`)
- `p_344866_` (`float`)

**Returns:** `float`

### codec

```java
public MapCodec<AllOf.ValueEffects> codec()
```

**Returns:** `MapCodec<AllOf.ValueEffects>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EntityEffects` | record |  |
| `LocationBasedEffects` | record |  |
| `ValueEffects` | record |  |
