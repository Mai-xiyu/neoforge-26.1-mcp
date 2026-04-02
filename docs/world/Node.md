# Node

**Package:** `net.minecraft.world.level.pathfinder`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `x` | `int` |  |
| `y` | `int` |  |
| `z` | `int` |  |
| `heapIdx` | `int` |  |
| `g` | `float` |  |
| `h` | `float` |  |
| `f` | `float` |  |
| `closed` | `boolean` |  |
| `walkedDistance` | `float` |  |
| `costMalus` | `float` |  |
| `type` | `PathType` |  |

## Methods

### Node

```java
public Node(int p_77285_, int p_77286_, int p_77287_)
```

**Parameters:**

- `p_77285_` (`int`)
- `p_77286_` (`int`)
- `p_77287_` (`int`)

**Returns:** `public`

### cloneAndMove

```java
public Node cloneAndMove(int p_77290_, int p_77291_, int p_77292_)
```

**Parameters:**

- `p_77290_` (`int`)
- `p_77291_` (`int`)
- `p_77292_` (`int`)

**Returns:** `public Node`

### createHash

```java
public static int createHash(int p_77296_, int p_77297_, int p_77298_)
```

**Parameters:**

- `p_77296_` (`int`)
- `p_77297_` (`int`)
- `p_77298_` (`int`)

**Returns:** `public static int`

### distanceTo

```java
public float distanceTo(Node p_77294_)
```

**Parameters:**

- `p_77294_` (`Node`)

**Returns:** `public float`

### distanceToXZ

```java
public float distanceToXZ(Node p_230614_)
```

**Parameters:**

- `p_230614_` (`Node`)

**Returns:** `public float`

### distanceTo

```java
public float distanceTo(BlockPos p_164698_)
```

**Parameters:**

- `p_164698_` (`BlockPos`)

**Returns:** `public float`

### distanceToSqr

```java
public float distanceToSqr(Node p_77300_)
```

**Parameters:**

- `p_77300_` (`Node`)

**Returns:** `public float`

### distanceToSqr

```java
public float distanceToSqr(BlockPos p_164703_)
```

**Parameters:**

- `p_164703_` (`BlockPos`)

**Returns:** `public float`

### distanceManhattan

```java
public float distanceManhattan(Node p_77305_)
```

**Parameters:**

- `p_77305_` (`Node`)

**Returns:** `public float`

### distanceManhattan

```java
public float distanceManhattan(BlockPos p_77307_)
```

**Parameters:**

- `p_77307_` (`BlockPos`)

**Returns:** `public float`

### asBlockPos

```java
public BlockPos asBlockPos()
```

**Returns:** `public BlockPos`

### BlockPos

```java
return new BlockPos()
```

**Returns:** `return new`

### asVec3

```java
public Vec3 asVec3()
```

**Returns:** `public Vec3`

### equals

```java
public boolean equals(Object p_77309_)
```

**Parameters:**

- `p_77309_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### inOpenSet

```java
public boolean inOpenSet()
```

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### writeToStream

```java
public void writeToStream(FriendlyByteBuf p_164700_)
```

**Parameters:**

- `p_164700_` (`FriendlyByteBuf`)

**Returns:** `public void`

### createFromStream

```java
public static Node createFromStream(FriendlyByteBuf p_77302_)
```

**Parameters:**

- `p_77302_` (`FriendlyByteBuf`)

**Returns:** `public static Node`

### readContents

```java
 readContents()
```

**Returns:** ``

### readContents

```java
protected static void readContents(FriendlyByteBuf p_262984_, Node p_263009_)
```

**Parameters:**

- `p_262984_` (`FriendlyByteBuf`)
- `p_263009_` (`Node`)

**Returns:** `protected static void`
