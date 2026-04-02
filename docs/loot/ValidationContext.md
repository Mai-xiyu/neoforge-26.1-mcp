# ValidationContext

**Package:** `net.minecraft.world.level.storage.loot`
**Type:** class

## Methods

### ValidationContext

```java
public ValidationContext(ProblemReporter p_311875_, LootContextParamSet p_279485_, HolderGetter.Provider p_335890_)
```

**Parameters:**

- `p_311875_` (`ProblemReporter`)
- `p_279485_` (`LootContextParamSet`)
- `p_335890_` (`HolderGetter.Provider`)

**Returns:** `public`

### ValidationContext

```java
public ValidationContext(ProblemReporter p_352229_, LootContextParamSet p_352267_)
```

**Parameters:**

- `p_352229_` (`ProblemReporter`)
- `p_352267_` (`LootContextParamSet`)

**Returns:** `public`

### ValidationContext

```java
private ValidationContext(ProblemReporter p_312319_, LootContextParamSet p_279447_, Optional<HolderGetter.Provider> p_352342_, Set<ResourceKey<?>> p_311760_)
```

**Parameters:**

- `p_312319_` (`ProblemReporter`)
- `p_279447_` (`LootContextParamSet`)
- `p_352342_` (`Optional<HolderGetter.Provider>`)
- `p_311760_` (`Set<ResourceKey<?>>`)

**Returns:** `private`

### forChild

```java
public ValidationContext forChild(String p_79366_)
```

**Parameters:**

- `p_79366_` (`String`)

**Returns:** `public ValidationContext`

### enterElement

```java
public ValidationContext enterElement(String p_279180_, ResourceKey<?> p_335771_)
```

**Parameters:**

- `p_279180_` (`String`)
- `p_335771_` (`ResourceKey<?>`)

**Returns:** `public ValidationContext`

### hasVisitedElement

```java
public boolean hasVisitedElement(ResourceKey<?> p_335626_)
```

**Parameters:**

- `p_335626_` (`ResourceKey<?>`)

**Returns:** `public boolean`

### reportProblem

```java
public void reportProblem(String p_79358_)
```

**Parameters:**

- `p_79358_` (`String`)

**Returns:** `public void`

### validateUser

```java
public void validateUser(LootContextUser p_79354_)
```

**Parameters:**

- `p_79354_` (`LootContextUser`)

**Returns:** `public void`

### resolver

```java
public HolderGetter.Provider resolver()
```

**Returns:** `public HolderGetter.Provider`

### allowsReferences

```java
public boolean allowsReferences()
```

**Returns:** `public boolean`

### setParams

```java
public ValidationContext setParams(LootContextParamSet p_79356_)
```

**Parameters:**

- `p_79356_` (`LootContextParamSet`)

**Returns:** `public ValidationContext`

### ValidationContext

```java
return new ValidationContext()
```

**Returns:** `return new`

### reporter

```java
public ProblemReporter reporter()
```

**Returns:** `public ProblemReporter`
