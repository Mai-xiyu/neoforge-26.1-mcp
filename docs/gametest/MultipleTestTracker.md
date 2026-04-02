# MultipleTestTracker

**Package:** `net.minecraft.gametest.framework`
**Type:** class

## Methods

### MultipleTestTracker

```java
public MultipleTestTracker()
```

**Returns:** `public`

### MultipleTestTracker

```java
public MultipleTestTracker(Collection<GameTestInfo> p_127802_)
```

**Parameters:**

- `p_127802_` (`Collection<GameTestInfo>`)

**Returns:** `public`

### addTestToTrack

```java
public void addTestToTrack(GameTestInfo p_127810_)
```

**Parameters:**

- `p_127810_` (`GameTestInfo`)

**Returns:** `public void`

### addListener

```java
public void addListener(GameTestListener p_127812_)
```

**Parameters:**

- `p_127812_` (`GameTestListener`)

**Returns:** `public void`

### addFailureListener

```java
public void addFailureListener(Consumer<GameTestInfo> p_127808_)
```

**Parameters:**

- `p_127808_` (`Consumer<GameTestInfo>`)

**Returns:** `public void`

### testStructureLoaded

```java
public void testStructureLoaded(GameTestInfo p_127830_)
```

**Parameters:**

- `p_127830_` (`GameTestInfo`)

### testPassed

```java
public void testPassed(GameTestInfo p_177685_, GameTestRunner p_319909_)
```

**Parameters:**

- `p_177685_` (`GameTestInfo`)
- `p_319909_` (`GameTestRunner`)

### testFailed

```java
public void testFailed(GameTestInfo p_127832_, GameTestRunner p_319772_)
```

**Parameters:**

- `p_127832_` (`GameTestInfo`)
- `p_319772_` (`GameTestRunner`)

### testAddedForRerun

```java
public void testAddedForRerun(GameTestInfo p_320337_, GameTestInfo p_319975_, GameTestRunner p_320688_)
```

**Parameters:**

- `p_320337_` (`GameTestInfo`)
- `p_319975_` (`GameTestInfo`)
- `p_320688_` (`GameTestRunner`)

### getFailedRequiredCount

```java
public int getFailedRequiredCount()
```

**Returns:** `public int`

### getFailedOptionalCount

```java
public int getFailedOptionalCount()
```

**Returns:** `public int`

### getDoneCount

```java
public int getDoneCount()
```

**Returns:** `public int`

### hasFailedRequired

```java
public boolean hasFailedRequired()
```

**Returns:** `public boolean`

### hasFailedOptional

```java
public boolean hasFailedOptional()
```

**Returns:** `public boolean`

### getFailedRequired

```java
public Collection<GameTestInfo> getFailedRequired()
```

**Returns:** `public Collection<GameTestInfo>`

### getFailedOptional

```java
public Collection<GameTestInfo> getFailedOptional()
```

**Returns:** `public Collection<GameTestInfo>`

### getTotalCount

```java
public int getTotalCount()
```

**Returns:** `public int`

### isDone

```java
public boolean isDone()
```

**Returns:** `public boolean`

### getProgressBar

```java
public String getProgressBar()
```

**Returns:** `public String`

### toString

```java
public String toString()
```

**Returns:** `String`

### remove

```java
public void remove(GameTestInfo p_320868_)
```

**Parameters:**

- `p_320868_` (`GameTestInfo`)

**Returns:** `public void`
