# IMinecartCollisionHandler

**Package:** `net.neoforged.neoforge.common`
**Type:** interface

## Description

This class defines a replacement for the default minecart collision code.
Only one handler can be registered at a time. It it registered with AbstractMinecartEntity.registerCollisionHandler().
If you use this, make it a configuration option.
@author CovertJaguar

## Methods

### onEntityCollision

```java
void onEntityCollision(AbstractMinecart cart, Entity other)
```

**Parameters:**

- `cart` (`AbstractMinecart`)
- `other` (`Entity`)

### getCollisionBox

```java
AABB getCollisionBox(AbstractMinecart cart, Entity other)
```

**Parameters:**

- `cart` (`AbstractMinecart`)
- `other` (`Entity`)

**Returns:** `AABB`

### getMinecartCollisionBox

```java
AABB getMinecartCollisionBox(AbstractMinecart cart)
```

**Parameters:**

- `cart` (`AbstractMinecart`)

**Returns:** `AABB`

### getBoundingBox

```java
AABB getBoundingBox(AbstractMinecart cart)
```

**Parameters:**

- `cart` (`AbstractMinecart`)

**Returns:** `AABB`
