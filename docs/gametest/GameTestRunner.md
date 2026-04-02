# GameTestRunner

**Package:** `net.minecraft.gametest.framework`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_TESTS_PER_ROW` | `int` |  |

## Methods

### GameTestRunner

```java
protected GameTestRunner(GameTestRunner.GameTestBatcher p_320713_, Collection<GameTestBatch> p_320022_, ServerLevel p_320570_, GameTestTicker p_320736_, GameTestRunner.StructureSpawner p_320336_, GameTestRunner.StructureSpawner p_320643_, boolean p_352218_)
```

**Parameters:**

- `p_320713_` (`GameTestRunner.GameTestBatcher`)
- `p_320022_` (`Collection<GameTestBatch>`)
- `p_320570_` (`ServerLevel`)
- `p_320736_` (`GameTestTicker`)
- `p_320336_` (`GameTestRunner.StructureSpawner`)
- `p_320643_` (`GameTestRunner.StructureSpawner`)
- `p_352218_` (`boolean`)

**Returns:** `protected`

### getTestInfos

```java
public List<GameTestInfo> getTestInfos()
```

**Returns:** `public List<GameTestInfo>`

### start

```java
public void start()
```

**Returns:** `public void`

### stop

```java
public void stop()
```

**Returns:** `public void`

### rerunTest

```java
public void rerunTest(GameTestInfo p_320525_)
```

**Parameters:**

- `p_320525_` (`GameTestInfo`)

**Returns:** `public void`

### runBatch

```java
void runBatch(int p_319917_)
```

**Parameters:**

- `p_319917_` (`int`)

### testCompleted

```java
private void testCompleted()
```

**Returns:** `private void`

### testStructureLoaded

```java
public void testStructureLoaded(GameTestInfo p_320033_)
```

**Parameters:**

- `p_320033_` (`GameTestInfo`)

### testPassed

```java
public void testPassed(GameTestInfo p_320625_, GameTestRunner p_320879_)
```

**Parameters:**

- `p_320625_` (`GameTestInfo`)
- `p_320879_` (`GameTestRunner`)

### testFailed

```java
public void testFailed(GameTestInfo p_320900_, GameTestRunner p_320892_)
```

**Parameters:**

- `p_320900_` (`GameTestInfo`)
- `p_320892_` (`GameTestRunner`)

### testAddedForRerun

```java
public void testAddedForRerun(GameTestInfo p_320035_, GameTestInfo p_320699_, GameTestRunner p_320447_)
```

**Parameters:**

- `p_320035_` (`GameTestInfo`)
- `p_320699_` (`GameTestInfo`)
- `p_320447_` (`GameTestRunner`)

### runScheduledRerunTests

```java
private void runScheduledRerunTests()
```

**Returns:** `private void`

### addListener

```java
public void addListener(GameTestBatchListener p_320573_)
```

**Parameters:**

- `p_320573_` (`GameTestBatchListener`)

**Returns:** `public void`

### createStructuresForBatch

```java
private Collection<GameTestInfo> createStructuresForBatch(Collection<GameTestInfo> p_320080_)
```

**Parameters:**

- `p_320080_` (`Collection<GameTestInfo>`)

**Returns:** `private Collection<GameTestInfo>`

### spawn

```java
private Optional<GameTestInfo> spawn(GameTestInfo p_320187_)
```

**Parameters:**

- `p_320187_` (`GameTestInfo`)

**Returns:** `private Optional<GameTestInfo>`

### clearMarkers

```java
public static void clearMarkers(ServerLevel p_127686_)
```

**Parameters:**

- `p_127686_` (`ServerLevel`)

**Returns:** `public static void`

### Builder

```java
private Builder(Collection<GameTestBatch> p_320127_, ServerLevel p_320437_)
```

**Parameters:**

- `p_320127_` (`Collection<GameTestBatch>`)
- `p_320437_` (`ServerLevel`)

**Returns:** `private`

### fromBatches

```java
public static GameTestRunner.Builder fromBatches(Collection<GameTestBatch> p_319850_, ServerLevel p_320176_)
```

**Parameters:**

- `p_319850_` (`Collection<GameTestBatch>`)
- `p_320176_` (`ServerLevel`)

**Returns:** `public static GameTestRunner.Builder`

### fromInfo

```java
public static GameTestRunner.Builder fromInfo(Collection<GameTestInfo> p_319878_, ServerLevel p_320046_)
```

**Parameters:**

- `p_319878_` (`Collection<GameTestInfo>`)
- `p_320046_` (`ServerLevel`)

**Returns:** `public static GameTestRunner.Builder`

### haltOnError

```java
public GameTestRunner.Builder haltOnError(boolean p_352186_)
```

**Parameters:**

- `p_352186_` (`boolean`)

**Returns:** `public GameTestRunner.Builder`

### newStructureSpawner

```java
public GameTestRunner.Builder newStructureSpawner(GameTestRunner.StructureSpawner p_320647_)
```

**Parameters:**

- `p_320647_` (`GameTestRunner.StructureSpawner`)

**Returns:** `public GameTestRunner.Builder`

### existingStructureSpawner

```java
public GameTestRunner.Builder existingStructureSpawner(StructureGridSpawner p_352321_)
```

**Parameters:**

- `p_352321_` (`StructureGridSpawner`)

**Returns:** `public GameTestRunner.Builder`

### batcher

```java
public GameTestRunner.Builder batcher(GameTestRunner.GameTestBatcher p_352338_)
```

**Parameters:**

- `p_352338_` (`GameTestRunner.GameTestBatcher`)

**Returns:** `public GameTestRunner.Builder`

### build

```java
public GameTestRunner build()
```

**Returns:** `public GameTestRunner`

### GameTestRunner

```java
return new GameTestRunner()
```

**Returns:** `return new`

### batch

```java
Collection<GameTestBatch> batch(Collection<GameTestInfo> p_320173_)
```

**Parameters:**

- `p_320173_` (`Collection<GameTestInfo>`)

**Returns:** `Collection<GameTestBatch>`

### spawnStructure

```java
Optional<GameTestInfo> spawnStructure(GameTestInfo p_320038_)
```

**Parameters:**

- `p_320038_` (`GameTestInfo`)

**Returns:** `Optional<GameTestInfo>`

### onBatchStart

```java
default void onBatchStart(ServerLevel p_352207_)
```

**Parameters:**

- `p_352207_` (`ServerLevel`)

**Returns:** `default void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `GameTestBatcher` | interface |  |
| `StructureSpawner` | interface |  |
