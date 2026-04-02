# BlockPatternBuilder

**Package:** `net.minecraft.world.level.block.state.pattern`
**Type:** class

## Methods

### BlockPatternBuilder

```java
private BlockPatternBuilder()
```

**Returns:** `private`

### aisle

```java
public BlockPatternBuilder aisle(String[]... p_61248_)
```

**Parameters:**

- `p_61248_` (`String[]...`)

**Returns:** `public BlockPatternBuilder`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Empty pattern for aisle")
```

**Parameters:**

- `aisle"` (`"Empty pattern for`)

**Returns:** `throw new`

### start

```java
public static BlockPatternBuilder start()
```

**Returns:** `public static BlockPatternBuilder`

### BlockPatternBuilder

```java
return new BlockPatternBuilder()
```

**Returns:** `return new`

### where

```java
public BlockPatternBuilder where(char p_61245_, Predicate<BlockInWorld> p_61246_)
```

**Parameters:**

- `p_61245_` (`char`)
- `p_61246_` (`Predicate<BlockInWorld>`)

**Returns:** `public BlockPatternBuilder`

### build

```java
public BlockPattern build()
```

**Returns:** `public BlockPattern`

### createPattern

```java
private Predicate<BlockInWorld>[][][] createPattern()
```

**Returns:** `private Predicate<BlockInWorld>[][][]`

### ensureAllCharactersMatched

```java
private void ensureAllCharactersMatched()
```

**Returns:** `private void`
