# CollisionContext

**Package:** `net.minecraft.world.phys.shapes`
**Type:** interface

## Methods

### empty

```java
static CollisionContext empty()
```

**Returns:** `static CollisionContext`

### of

```java
static CollisionContext of(Entity p_82751_)
```

**Parameters:**

- `p_82751_` (`Entity`)

**Returns:** `static CollisionContext`

### EntityCollisionContext

```java
return new EntityCollisionContext()
```

**Returns:** `return new`

### isDescending

```java
boolean isDescending()
```

**Returns:** `boolean`

### isAbove

```java
boolean isAbove(VoxelShape p_82755_, BlockPos p_82756_, boolean p_82757_)
```

**Parameters:**

- `p_82755_` (`VoxelShape`)
- `p_82756_` (`BlockPos`)
- `p_82757_` (`boolean`)

**Returns:** `boolean`

### isHoldingItem

```java
boolean isHoldingItem(Item p_82752_)
```

**Parameters:**

- `p_82752_` (`Item`)

**Returns:** `boolean`

### canStandOnFluid

```java
boolean canStandOnFluid(FluidState p_205110_, FluidState p_205111_)
```

**Parameters:**

- `p_205110_` (`FluidState`)
- `p_205111_` (`FluidState`)

**Returns:** `boolean`
