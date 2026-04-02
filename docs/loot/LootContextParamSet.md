# LootContextParamSet

**Package:** `net.minecraft.world.level.storage.loot.parameters`
**Type:** class

## Methods

### LootContextParamSet

```java
 LootContextParamSet(Set<LootContextParam<?>> p_81388_, Set<LootContextParam<?>> p_81389_)
```

**Parameters:**

- `p_81388_` (`Set<LootContextParam<?>>`)
- `p_81389_` (`Set<LootContextParam<?>>`)

**Returns:** ``

### isAllowed

```java
public boolean isAllowed(LootContextParam<?> p_165476_)
```

**Parameters:**

- `p_165476_` (`LootContextParam<?>`)

**Returns:** `public boolean`

### getRequired

```java
public Set<LootContextParam<?>> getRequired()
```

**Returns:** `public Set<LootContextParam<?>>`

### getAllowed

```java
public Set<LootContextParam<?>> getAllowed()
```

**Returns:** `public Set<LootContextParam<?>>`

### toString

```java
public String toString()
```

**Returns:** `String`

### validateUser

```java
public void validateUser(ValidationContext p_81396_, LootContextUser p_81397_)
```

**Parameters:**

- `p_81396_` (`ValidationContext`)
- `p_81397_` (`LootContextUser`)

**Returns:** `public void`

### validateUser

```java
public void validateUser(ProblemReporter p_345868_, LootContextUser p_346074_)
```

**Parameters:**

- `p_345868_` (`ProblemReporter`)
- `p_346074_` (`LootContextUser`)

**Returns:** `public void`

### builder

```java
public static LootContextParamSet.Builder builder()
```

**Returns:** `public static LootContextParamSet.Builder`

### required

```java
public LootContextParamSet.Builder required(LootContextParam<?> p_81407_)
```

**Parameters:**

- `p_81407_` (`LootContextParam<?>`)

**Returns:** `public LootContextParamSet.Builder`

### optional

```java
public LootContextParamSet.Builder optional(LootContextParam<?> p_81409_)
```

**Parameters:**

- `p_81409_` (`LootContextParam<?>`)

**Returns:** `public LootContextParamSet.Builder`

### build

```java
public LootContextParamSet build()
```

**Returns:** `public LootContextParamSet`

### LootContextParamSet

```java
return new LootContextParamSet()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
