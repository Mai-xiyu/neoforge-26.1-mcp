# Coordinates

**Package:** `net.minecraft.commands.arguments.coordinates`
**Type:** interface

## Methods

### getPosition

```java
Vec3 getPosition(CommandSourceStack p_119566_)
```

**Parameters:**

- `p_119566_` (`CommandSourceStack`)

**Returns:** `Vec3`

### getRotation

```java
Vec2 getRotation(CommandSourceStack p_119567_)
```

**Parameters:**

- `p_119567_` (`CommandSourceStack`)

**Returns:** `Vec2`

### getBlockPos

```java
default BlockPos getBlockPos(CommandSourceStack p_119569_)
```

**Parameters:**

- `p_119569_` (`CommandSourceStack`)

**Returns:** `default BlockPos`

### isXRelative

```java
boolean isXRelative()
```

**Returns:** `boolean`

### isYRelative

```java
boolean isYRelative()
```

**Returns:** `boolean`

### isZRelative

```java
boolean isZRelative()
```

**Returns:** `boolean`
