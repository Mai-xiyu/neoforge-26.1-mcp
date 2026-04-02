# LevelWriter

**Package:** `net.minecraft.world.level`
**Type:** interface

## Methods

### setBlock

```java
boolean setBlock(BlockPos p_46947_, BlockState p_46948_, int p_46949_, int p_46950_)
```

**Parameters:**

- `p_46947_` (`BlockPos`)
- `p_46948_` (`BlockState`)
- `p_46949_` (`int`)
- `p_46950_` (`int`)

**Returns:** `boolean`

### setBlock

```java
default boolean setBlock(BlockPos p_46944_, BlockState p_46945_, int p_46946_)
```

**Parameters:**

- `p_46944_` (`BlockPos`)
- `p_46945_` (`BlockState`)
- `p_46946_` (`int`)

**Returns:** `default boolean`

### removeBlock

```java
boolean removeBlock(BlockPos p_46951_, boolean p_46952_)
```

**Parameters:**

- `p_46951_` (`BlockPos`)
- `p_46952_` (`boolean`)

**Returns:** `boolean`

### destroyBlock

```java
default boolean destroyBlock(BlockPos p_46962_, boolean p_46963_)
```

**Parameters:**

- `p_46962_` (`BlockPos`)
- `p_46963_` (`boolean`)

**Returns:** `default boolean`

### destroyBlock

```java
default boolean destroyBlock(BlockPos p_46954_, boolean p_46955_, Entity p_46956_)
```

**Parameters:**

- `p_46954_` (`BlockPos`)
- `p_46955_` (`boolean`)
- `p_46956_` (`Entity`)

**Returns:** `default boolean`

### destroyBlock

```java
boolean destroyBlock(BlockPos p_46957_, boolean p_46958_, Entity p_46959_, int p_46960_)
```

**Parameters:**

- `p_46957_` (`BlockPos`)
- `p_46958_` (`boolean`)
- `p_46959_` (`Entity`)
- `p_46960_` (`int`)

**Returns:** `boolean`

### addFreshEntity

```java
default boolean addFreshEntity(Entity p_46964_)
```

**Parameters:**

- `p_46964_` (`Entity`)

**Returns:** `default boolean`
