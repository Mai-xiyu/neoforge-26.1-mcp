# ILevelExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### getMaxEntityRadius

```java
double getMaxEntityRadius()
```

**Returns:** `double`

### increaseMaxEntityRadius

```java
public double increaseMaxEntityRadius(double value)
```

**Parameters:**

- `value` (`double`)

**Returns:** `double`

### getPartEntities

```java
public default Collection<PartEntity<?>> getPartEntities()
```

**Returns:** `Collection<PartEntity<?>>`

### getModelDataManager

```java
default ModelDataManager getModelDataManager()
```

**Returns:** `ModelDataManager`

### getCapability

```java
default <T, C extends @Nullable Object> T getCapability(BlockCapability<T, C> cap, BlockPos pos, C context)
```

**Parameters:**

- `cap` (`BlockCapability<T, C>`)
- `pos` (`BlockPos`)
- `context` (`C`)

**Returns:** `T`

### getCapability

```java
default <T, C extends @Nullable Object> T getCapability(BlockCapability<T, C> cap, BlockPos pos, BlockState state, BlockEntity blockEntity, C context)
```

**Parameters:**

- `cap` (`BlockCapability<T, C>`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `blockEntity` (`BlockEntity`)
- `context` (`C`)

**Returns:** `T`

### getCapability

```java
default <T> T getCapability(BlockCapability<T, Void> cap, BlockPos pos)
```

**Parameters:**

- `cap` (`BlockCapability<T, Void>`)
- `pos` (`BlockPos`)

**Returns:** `T`

### getCapability

```java
default <T> T getCapability(BlockCapability<T, Void> cap, BlockPos pos, BlockState state, BlockEntity blockEntity)
```

**Parameters:**

- `cap` (`BlockCapability<T, Void>`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `blockEntity` (`BlockEntity`)

**Returns:** `T`

### invalidateCapabilities

```java
default void invalidateCapabilities(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

### invalidateCapabilities

```java
default void invalidateCapabilities(ChunkPos pos)
```

**Parameters:**

- `pos` (`ChunkPos`)

### getDescriptionKey

```java
default String getDescriptionKey()
```

**Returns:** `String`

### getDescription

```java
default Component getDescription()
```

**Returns:** `Component`
