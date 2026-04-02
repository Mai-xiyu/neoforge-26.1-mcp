# ProjectileItem

**Package:** `net.minecraft.world.item`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT` | `ProjectileItem.DispenseConfig` |  |

## Methods

### asProjectile

```java
Projectile asProjectile(Level p_338867_, Position p_338379_, ItemStack p_338543_, Direction p_338380_)
```

**Parameters:**

- `p_338867_` (`Level`)
- `p_338379_` (`Position`)
- `p_338543_` (`ItemStack`)
- `p_338380_` (`Direction`)

**Returns:** `Projectile`

### createDispenseConfig

```java
default ProjectileItem.DispenseConfig createDispenseConfig()
```

**Returns:** `default ProjectileItem.DispenseConfig`

### shoot

```java
default void shoot(Projectile p_338559_, double p_338418_, double p_338827_, double p_338653_, float p_338287_, float p_338314_)
```

**Parameters:**

- `p_338559_` (`Projectile`)
- `p_338418_` (`double`)
- `p_338827_` (`double`)
- `p_338653_` (`double`)
- `p_338287_` (`float`)
- `p_338314_` (`float`)

**Returns:** `default void`

### DispenseConfig

```java
public static record DispenseConfig(ProjectileItem.PositionFunction positionFunction, float uncertainty, float power, OptionalInt overrideDispenseEvent)
```

**Parameters:**

- `positionFunction` (`ProjectileItem.PositionFunction`)
- `uncertainty` (`float`)
- `power` (`float`)
- `overrideDispenseEvent` (`OptionalInt`)

**Returns:** `public static record`

### builder

```java
public static ProjectileItem.DispenseConfig.Builder builder()
```

**Returns:** `public static ProjectileItem.DispenseConfig.Builder`

### positionFunction

```java
public ProjectileItem.DispenseConfig.Builder positionFunction(ProjectileItem.PositionFunction p_338644_)
```

**Parameters:**

- `p_338644_` (`ProjectileItem.PositionFunction`)

**Returns:** `public ProjectileItem.DispenseConfig.Builder`

### uncertainty

```java
public ProjectileItem.DispenseConfig.Builder uncertainty(float p_338449_)
```

**Parameters:**

- `p_338449_` (`float`)

**Returns:** `public ProjectileItem.DispenseConfig.Builder`

### power

```java
public ProjectileItem.DispenseConfig.Builder power(float p_338328_)
```

**Parameters:**

- `p_338328_` (`float`)

**Returns:** `public ProjectileItem.DispenseConfig.Builder`

### overrideDispenseEvent

```java
public ProjectileItem.DispenseConfig.Builder overrideDispenseEvent(int p_338272_)
```

**Parameters:**

- `p_338272_` (`int`)

**Returns:** `public ProjectileItem.DispenseConfig.Builder`

### build

```java
public ProjectileItem.DispenseConfig build()
```

**Returns:** `public ProjectileItem.DispenseConfig`

### getDispensePosition

```java
Position getDispensePosition(BlockSource p_338784_, Direction p_338422_)
```

**Parameters:**

- `p_338784_` (`BlockSource`)
- `p_338422_` (`Direction`)

**Returns:** `Position`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DispenseConfig` | record |  |
| `Builder` | class |  |
| `PositionFunction` | interface |  |
