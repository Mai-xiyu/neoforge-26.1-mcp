# GameTestInfo

**Package:** `net.minecraft.gametest.framework`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `sequences` | `Collection<GameTestSequence>` |  |

## Methods

### GameTestInfo

```java
public GameTestInfo(TestFunction p_127613_, Rotation p_127614_, ServerLevel p_127615_, RetryOptions p_320308_)
```

**Parameters:**

- `p_127613_` (`TestFunction`)
- `p_127614_` (`Rotation`)
- `p_127615_` (`ServerLevel`)
- `p_320308_` (`RetryOptions`)

**Returns:** `public`

### setStructureBlockPos

```java
void setStructureBlockPos(BlockPos p_127618_)
```

**Parameters:**

- `p_127618_` (`BlockPos`)

### startExecution

```java
public GameTestInfo startExecution(int p_320211_)
```

**Parameters:**

- `p_320211_` (`int`)

**Returns:** `public GameTestInfo`

### placeStructure

```java
public GameTestInfo placeStructure()
```

**Returns:** `public GameTestInfo`

### ensureStructureIsPlaced

```java
private boolean ensureStructureIsPlaced()
```

**Returns:** `private boolean`

### tick

```java
public void tick(GameTestRunner p_320062_)
```

**Parameters:**

- `p_320062_` (`GameTestRunner`)

**Returns:** `public void`

### tickInternal

```java
private void tickInternal()
```

**Returns:** `private void`

### startTest

```java
private void startTest()
```

**Returns:** `private void`

### setRunAtTickTime

```java
public void setRunAtTickTime(long p_177473_, Runnable p_177474_)
```

**Parameters:**

- `p_177473_` (`long`)
- `p_177474_` (`Runnable`)

**Returns:** `public void`

### getTestName

```java
public String getTestName()
```

**Returns:** `public String`

### getStructureBlockPos

```java
public BlockPos getStructureBlockPos()
```

**Returns:** `BlockPos`

### getStructureBounds

```java
public AABB getStructureBounds()
```

**Returns:** `public AABB`

### getStructureBlockEntity

```java
public StructureBlockEntity getStructureBlockEntity()
```

**Returns:** `public StructureBlockEntity`

### IllegalStateException

```java
throw new IllegalStateException("Could not find a structureBlockEntity for this GameTestInfo")
```

**Parameters:**

- `GameTestInfo"` (`"Could not find a structureBlockEntity for this`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Could not find a structureBlockEntity at the given coordinate " + this.structureBlockPos)
```

**Parameters:**

- `this.structureBlockPos` (`"Could not find a structureBlockEntity at the given coordinate " +`)

**Returns:** `throw new`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `public ServerLevel`

### hasSucceeded

```java
public boolean hasSucceeded()
```

**Returns:** `public boolean`

### hasFailed

```java
public boolean hasFailed()
```

**Returns:** `public boolean`

### hasStarted

```java
public boolean hasStarted()
```

**Returns:** `public boolean`

### isDone

```java
public boolean isDone()
```

**Returns:** `public boolean`

### getRunTime

```java
public long getRunTime()
```

**Returns:** `public long`

### finish

```java
private void finish()
```

**Returns:** `private void`

### succeed

```java
public void succeed()
```

**Returns:** `public void`

### fail

```java
public void fail(Throwable p_127623_)
```

**Parameters:**

- `p_127623_` (`Throwable`)

**Returns:** `public void`

### getError

```java
public Throwable getError()
```

**Returns:** `Throwable`

### toString

```java
public String toString()
```

**Returns:** `String`

### addListener

```java
public void addListener(GameTestListener p_127625_)
```

**Parameters:**

- `p_127625_` (`GameTestListener`)

**Returns:** `public void`

### prepareTestStructure

```java
public GameTestInfo prepareTestStructure()
```

**Returns:** `public GameTestInfo`

### getTick

```java
long getTick()
```

**Returns:** `long`

### createSequence

```java
GameTestSequence createSequence()
```

**Returns:** `GameTestSequence`

### isRequired

```java
public boolean isRequired()
```

**Returns:** `public boolean`

### isOptional

```java
public boolean isOptional()
```

**Returns:** `public boolean`

### getStructureName

```java
public String getStructureName()
```

**Returns:** `public String`

### getRotation

```java
public Rotation getRotation()
```

**Returns:** `public Rotation`

### getTestFunction

```java
public TestFunction getTestFunction()
```

**Returns:** `public TestFunction`

### getTimeoutTicks

```java
public int getTimeoutTicks()
```

**Returns:** `public int`

### isFlaky

```java
public boolean isFlaky()
```

**Returns:** `public boolean`

### maxAttempts

```java
public int maxAttempts()
```

**Returns:** `public int`

### requiredSuccesses

```java
public int requiredSuccesses()
```

**Returns:** `public int`

### retryOptions

```java
public RetryOptions retryOptions()
```

**Returns:** `public RetryOptions`

### getListeners

```java
public Stream<GameTestListener> getListeners()
```

**Returns:** `public Stream<GameTestListener>`

### copyReset

```java
public GameTestInfo copyReset()
```

**Returns:** `public GameTestInfo`

### getOrCalculateNorthwestCorner

```java
private BlockPos getOrCalculateNorthwestCorner()
```

**Returns:** `private BlockPos`

### setNorthWestCorner

```java
public void setNorthWestCorner(BlockPos p_320945_)
```

**Parameters:**

- `p_320945_` (`BlockPos`)

**Returns:** `public void`
