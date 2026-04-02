# HoneyBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HalfTransparentBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<HoneyBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<HoneyBlock> codec()
```

**Returns:** `MapCodec<HoneyBlock>`

### HoneyBlock

```java
public HoneyBlock(BlockBehaviour.Properties p_53985_)
```

**Parameters:**

- `p_53985_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### doesEntityDoHoneyBlockSlideEffects

```java
private static boolean doesEntityDoHoneyBlockSlideEffects(Entity p_54013_)
```

**Parameters:**

- `p_54013_` (`Entity`)

**Returns:** `private static boolean`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_54015_, BlockGetter p_54016_, BlockPos p_54017_, CollisionContext p_54018_)
```

**Parameters:**

- `p_54015_` (`BlockState`)
- `p_54016_` (`BlockGetter`)
- `p_54017_` (`BlockPos`)
- `p_54018_` (`CollisionContext`)

**Returns:** `VoxelShape`

### fallOn

```java
public void fallOn(Level p_153372_, BlockState p_153373_, BlockPos p_153374_, Entity p_153375_, float p_153376_)
```

**Parameters:**

- `p_153372_` (`Level`)
- `p_153373_` (`BlockState`)
- `p_153374_` (`BlockPos`)
- `p_153375_` (`Entity`)
- `p_153376_` (`float`)

### entityInside

```java
protected void entityInside(BlockState p_54003_, Level p_54004_, BlockPos p_54005_, Entity p_54006_)
```

**Parameters:**

- `p_54003_` (`BlockState`)
- `p_54004_` (`Level`)
- `p_54005_` (`BlockPos`)
- `p_54006_` (`Entity`)

### isSlidingDown

```java
private boolean isSlidingDown(BlockPos p_54008_, Entity p_54009_)
```

**Parameters:**

- `p_54008_` (`BlockPos`)
- `p_54009_` (`Entity`)

**Returns:** `private boolean`

### maybeDoSlideAchievement

```java
private void maybeDoSlideAchievement(Entity p_53992_, BlockPos p_53993_)
```

**Parameters:**

- `p_53992_` (`Entity`)
- `p_53993_` (`BlockPos`)

**Returns:** `private void`

### doSlideMovement

```java
private void doSlideMovement(Entity p_54020_)
```

**Parameters:**

- `p_54020_` (`Entity`)

**Returns:** `private void`

### maybeDoSlideEffects

```java
private void maybeDoSlideEffects(Level p_53995_, Entity p_53996_)
```

**Parameters:**

- `p_53995_` (`Level`)
- `p_53996_` (`Entity`)

**Returns:** `private void`

### showSlideParticles

```java
public static void showSlideParticles(Entity p_53987_)
```

**Parameters:**

- `p_53987_` (`Entity`)

**Returns:** `public static void`

### showParticles

```java
 showParticles()
```

**Returns:** ``

### showJumpParticles

```java
public static void showJumpParticles(Entity p_54011_)
```

**Parameters:**

- `p_54011_` (`Entity`)

**Returns:** `public static void`

### showParticles

```java
 showParticles()
```

**Returns:** ``

### showParticles

```java
private static void showParticles(Entity p_53989_, int p_53990_)
```

**Parameters:**

- `p_53989_` (`Entity`)
- `p_53990_` (`int`)

**Returns:** `private static void`
