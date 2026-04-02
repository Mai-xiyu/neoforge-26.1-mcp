# AdvancementProgress

**Package:** `net.minecraft.advancements`
**Type:** class
**Implements:** `Comparable<AdvancementProgress>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<AdvancementProgress>` |  |

## Methods

### AdvancementProgress

```java
private AdvancementProgress(Map<String, CriterionProgress> p_144358_)
```

**Parameters:**

- `p_144358_` (`Map<String, CriterionProgress>`)

**Returns:** `private`

### AdvancementProgress

```java
public AdvancementProgress()
```

**Returns:** `public`

### update

```java
public void update(AdvancementRequirements p_301278_)
```

**Parameters:**

- `p_301278_` (`AdvancementRequirements`)

**Returns:** `public void`

### isDone

```java
public boolean isDone()
```

**Returns:** `public boolean`

### hasProgress

```java
public boolean hasProgress()
```

**Returns:** `public boolean`

### grantProgress

```java
public boolean grantProgress(String p_8197_)
```

**Parameters:**

- `p_8197_` (`String`)

**Returns:** `public boolean`

### revokeProgress

```java
public boolean revokeProgress(String p_8210_)
```

**Parameters:**

- `p_8210_` (`String`)

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### serializeToNetwork

```java
public void serializeToNetwork(FriendlyByteBuf p_8205_)
```

**Parameters:**

- `p_8205_` (`FriendlyByteBuf`)

**Returns:** `public void`

### fromNetwork

```java
public static AdvancementProgress fromNetwork(FriendlyByteBuf p_8212_)
```

**Parameters:**

- `p_8212_` (`FriendlyByteBuf`)

**Returns:** `public static AdvancementProgress`

### AdvancementProgress

```java
return new AdvancementProgress()
```

**Returns:** `return new`

### getCriterion

```java
public CriterionProgress getCriterion(String p_8215_)
```

**Parameters:**

- `p_8215_` (`String`)

**Returns:** `CriterionProgress`

### isCriterionDone

```java
private boolean isCriterionDone(String p_300915_)
```

**Parameters:**

- `p_300915_` (`String`)

**Returns:** `private boolean`

### getPercent

```java
public float getPercent()
```

**Returns:** `public float`

### getProgressText

```java
public Component getProgressText()
```

**Returns:** `Component`

### countCompletedRequirements

```java
private int countCompletedRequirements()
```

**Returns:** `private int`

### getRemainingCriteria

```java
public Iterable<String> getRemainingCriteria()
```

**Returns:** `public Iterable<String>`

### getCompletedCriteria

```java
public Iterable<String> getCompletedCriteria()
```

**Returns:** `public Iterable<String>`

### getFirstProgressDate

```java
public Instant getFirstProgressDate()
```

**Returns:** `Instant`

### compareTo

```java
public int compareTo(AdvancementProgress p_8195_)
```

**Parameters:**

- `p_8195_` (`AdvancementProgress`)

**Returns:** `public int`
