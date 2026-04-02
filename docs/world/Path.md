# Path

**Package:** `net.minecraft.world.level.pathfinder`
**Type:** class

## Methods

### Path

```java
public Path(List<Node> p_77371_, BlockPos p_77372_, boolean p_77373_)
```

**Parameters:**

- `p_77371_` (`List<Node>`)
- `p_77372_` (`BlockPos`)
- `p_77373_` (`boolean`)

**Returns:** `public`

### advance

```java
public void advance()
```

**Returns:** `public void`

### notStarted

```java
public boolean notStarted()
```

**Returns:** `public boolean`

### isDone

```java
public boolean isDone()
```

**Returns:** `public boolean`

### getEndNode

```java
public Node getEndNode()
```

**Returns:** `Node`

### getNode

```java
public Node getNode(int p_77376_)
```

**Parameters:**

- `p_77376_` (`int`)

**Returns:** `public Node`

### truncateNodes

```java
public void truncateNodes(int p_77389_)
```

**Parameters:**

- `p_77389_` (`int`)

**Returns:** `public void`

### replaceNode

```java
public void replaceNode(int p_77378_, Node p_77379_)
```

**Parameters:**

- `p_77378_` (`int`)
- `p_77379_` (`Node`)

**Returns:** `public void`

### getNodeCount

```java
public int getNodeCount()
```

**Returns:** `public int`

### getNextNodeIndex

```java
public int getNextNodeIndex()
```

**Returns:** `public int`

### setNextNodeIndex

```java
public void setNextNodeIndex(int p_77394_)
```

**Parameters:**

- `p_77394_` (`int`)

**Returns:** `public void`

### getEntityPosAtNode

```java
public Vec3 getEntityPosAtNode(Entity p_77383_, int p_77384_)
```

**Parameters:**

- `p_77383_` (`Entity`)
- `p_77384_` (`int`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### getNodePos

```java
public BlockPos getNodePos(int p_77397_)
```

**Parameters:**

- `p_77397_` (`int`)

**Returns:** `public BlockPos`

### getNextEntityPos

```java
public Vec3 getNextEntityPos(Entity p_77381_)
```

**Parameters:**

- `p_77381_` (`Entity`)

**Returns:** `public Vec3`

### getNextNodePos

```java
public BlockPos getNextNodePos()
```

**Returns:** `public BlockPos`

### getNextNode

```java
public Node getNextNode()
```

**Returns:** `public Node`

### getPreviousNode

```java
public Node getPreviousNode()
```

**Returns:** `Node`

### sameAs

```java
public boolean sameAs(Path p_77386_)
```

**Parameters:**

- `p_77386_` (`Path`)

**Returns:** `public boolean`

### canReach

```java
public boolean canReach()
```

**Returns:** `public boolean`

### setDebug

```java
void setDebug(Node[] p_164710_, Node[] p_164711_, Set<Target> p_164712_)
```

**Parameters:**

- `p_164710_` (`Node[]`)
- `p_164711_` (`Node[]`)
- `p_164712_` (`Set<Target>`)

### debugData

```java
public Path.DebugData debugData()
```

**Returns:** `Path.DebugData`

### writeToStream

```java
public void writeToStream(FriendlyByteBuf p_164705_)
```

**Parameters:**

- `p_164705_` (`FriendlyByteBuf`)

**Returns:** `public void`

### createFromStream

```java
public static Path createFromStream(FriendlyByteBuf p_77391_)
```

**Parameters:**

- `p_77391_` (`FriendlyByteBuf`)

**Returns:** `public static Path`

### toString

```java
public String toString()
```

**Returns:** `String`

### getTarget

```java
public BlockPos getTarget()
```

**Returns:** `public BlockPos`

### getDistToTarget

```java
public float getDistToTarget()
```

**Returns:** `public float`

### readNodeArray

```java
static Node[] readNodeArray(FriendlyByteBuf p_294398_)
```

**Parameters:**

- `p_294398_` (`FriendlyByteBuf`)

**Returns:** `static Node[]`

### writeNodeArray

```java
static void writeNodeArray(FriendlyByteBuf p_296066_, Node[] p_294231_)
```

**Parameters:**

- `p_296066_` (`FriendlyByteBuf`)
- `p_294231_` (`Node[]`)

**Returns:** `static void`

### copy

```java
public Path copy()
```

**Returns:** `public Path`

### DebugData

```java
public static record DebugData(Node[] openSet, Node[] closedSet, Set<Target> targetNodes)
```

**Parameters:**

- `openSet` (`Node[]`)
- `closedSet` (`Node[]`)
- `targetNodes` (`Set<Target>`)

**Returns:** `public static record`

### write

```java
public void write(FriendlyByteBuf p_296345_)
```

**Parameters:**

- `p_296345_` (`FriendlyByteBuf`)

**Returns:** `public void`

### read

```java
public static Path.DebugData read(FriendlyByteBuf p_295853_)
```

**Parameters:**

- `p_295853_` (`FriendlyByteBuf`)

**Returns:** `public static Path.DebugData`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DebugData` | record |  |
