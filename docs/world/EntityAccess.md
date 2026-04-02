# EntityAccess

**Package:** `net.minecraft.world.level.entity`
**Type:** interface

## Methods

### getId

```java
int getId()
```

**Returns:** `int`

### getUUID

```java
UUID getUUID()
```

**Returns:** `UUID`

### blockPosition

```java
BlockPos blockPosition()
```

**Returns:** `BlockPos`

### getBoundingBox

```java
AABB getBoundingBox()
```

**Returns:** `AABB`

### setLevelCallback

```java
void setLevelCallback(EntityInLevelCallback p_156797_)
```

**Parameters:**

- `p_156797_` (`EntityInLevelCallback`)

### getSelfAndPassengers

```java
Stream<? extends EntityAccess> getSelfAndPassengers()
```

**Returns:** `Stream<? extends EntityAccess>`

### getPassengersAndSelf

```java
Stream<? extends EntityAccess> getPassengersAndSelf()
```

**Returns:** `Stream<? extends EntityAccess>`

### setRemoved

```java
void setRemoved(Entity.RemovalReason p_156798_)
```

**Parameters:**

- `p_156798_` (`Entity.RemovalReason`)

### shouldBeSaved

```java
boolean shouldBeSaved()
```

**Returns:** `boolean`

### isAlwaysTicking

```java
boolean isAlwaysTicking()
```

**Returns:** `boolean`
