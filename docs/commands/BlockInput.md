# BlockInput

**Package:** `net.minecraft.commands.arguments.blocks`
**Type:** class
**Implements:** `Predicate<BlockInWorld>`

## Methods

### BlockInput

```java
public BlockInput(BlockState p_114666_, Set<Property<?>> p_114667_, CompoundTag p_114668_)
```

**Parameters:**

- `p_114666_` (`BlockState`)
- `p_114667_` (`Set<Property<?>>`)
- `p_114668_` (`CompoundTag`)

**Returns:** `public`

### getState

```java
public BlockState getState()
```

**Returns:** `public BlockState`

### getDefinedProperties

```java
public Set<Property<?>> getDefinedProperties()
```

**Returns:** `public Set<Property<?>>`

### test

```java
public boolean test(BlockInWorld p_114675_)
```

**Parameters:**

- `p_114675_` (`BlockInWorld`)

**Returns:** `public boolean`

### test

```java
public boolean test(ServerLevel p_173524_, BlockPos p_173525_)
```

**Parameters:**

- `p_173524_` (`ServerLevel`)
- `p_173525_` (`BlockPos`)

**Returns:** `public boolean`

### place

```java
public boolean place(ServerLevel p_114671_, BlockPos p_114672_, int p_114673_)
```

**Parameters:**

- `p_114671_` (`ServerLevel`)
- `p_114672_` (`BlockPos`)
- `p_114673_` (`int`)

**Returns:** `public boolean`
