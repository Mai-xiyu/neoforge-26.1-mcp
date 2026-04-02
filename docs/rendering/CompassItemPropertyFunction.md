# CompassItemPropertyFunction

**Package:** `net.minecraft.client.renderer.item`
**Type:** class
**Implements:** `ClampedItemPropertyFunction`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_ROTATION` | `int` |  |
| `compassTarget` | `CompassItemPropertyFunction.CompassTarget` |  |

## Methods

### CompassItemPropertyFunction

```java
public CompassItemPropertyFunction(CompassItemPropertyFunction.CompassTarget p_234933_)
```

**Parameters:**

- `p_234933_` (`CompassItemPropertyFunction.CompassTarget`)

**Returns:** `public`

### unclampedCall

```java
public float unclampedCall(ItemStack p_234960_, ClientLevel p_234961_, LivingEntity p_234962_, int p_234963_)
```

**Parameters:**

- `p_234960_` (`ItemStack`)
- `p_234961_` (`ClientLevel`)
- `p_234962_` (`LivingEntity`)
- `p_234963_` (`int`)

**Returns:** `float`

### getCompassRotation

```java
private float getCompassRotation(ItemStack p_234955_, ClientLevel p_234956_, int p_234957_, Entity p_234958_)
```

**Parameters:**

- `p_234955_` (`ItemStack`)
- `p_234956_` (`ClientLevel`)
- `p_234957_` (`int`)
- `p_234958_` (`Entity`)

**Returns:** `private float`

### getRandomlySpinningRotation

```java
private float getRandomlySpinningRotation(int p_234937_, long p_234938_)
```

**Parameters:**

- `p_234937_` (`int`)
- `p_234938_` (`long`)

**Returns:** `private float`

### getRotationTowardsCompassTarget

```java
private float getRotationTowardsCompassTarget(Entity p_234942_, long p_234943_, BlockPos p_234944_)
```

**Parameters:**

- `p_234942_` (`Entity`)
- `p_234943_` (`long`)
- `p_234944_` (`BlockPos`)

**Returns:** `private float`

### isValidCompassTargetPos

```java
private boolean isValidCompassTargetPos(Entity p_234952_, GlobalPos p_234953_)
```

**Parameters:**

- `p_234952_` (`Entity`)
- `p_234953_` (`GlobalPos`)

**Returns:** `private boolean`

### getAngleFromEntityToPos

```java
private double getAngleFromEntityToPos(Entity p_234949_, BlockPos p_234950_)
```

**Parameters:**

- `p_234949_` (`Entity`)
- `p_234950_` (`BlockPos`)

**Returns:** `private double`

### getWrappedVisualRotationY

```java
private double getWrappedVisualRotationY(Entity p_234940_)
```

**Parameters:**

- `p_234940_` (`Entity`)

**Returns:** `private double`

### hash

```java
private int hash(int p_234935_)
```

**Parameters:**

- `p_234935_` (`int`)

**Returns:** `private int`

### getPos

```java
GlobalPos getPos(ClientLevel p_234965_, ItemStack p_234966_, Entity p_234967_)
```

**Parameters:**

- `p_234965_` (`ClientLevel`)
- `p_234966_` (`ItemStack`)
- `p_234967_` (`Entity`)

**Returns:** `GlobalPos`

### shouldUpdate

```java
boolean shouldUpdate(long p_234973_)
```

**Parameters:**

- `p_234973_` (`long`)

**Returns:** `boolean`

### update

```java
void update(long p_234975_, double p_234976_)
```

**Parameters:**

- `p_234975_` (`long`)
- `p_234976_` (`double`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CompassTarget` | interface |  |
