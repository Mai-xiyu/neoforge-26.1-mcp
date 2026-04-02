# ObjectiveCriteria

**Package:** `net.minecraft.world.scores.criteria`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DUMMY` | `ObjectiveCriteria` |  |
| `TRIGGER` | `ObjectiveCriteria` |  |
| `DEATH_COUNT` | `ObjectiveCriteria` |  |
| `KILL_COUNT_PLAYERS` | `ObjectiveCriteria` |  |
| `KILL_COUNT_ALL` | `ObjectiveCriteria` |  |
| `HEALTH` | `ObjectiveCriteria` |  |
| `FOOD` | `ObjectiveCriteria` |  |
| `AIR` | `ObjectiveCriteria` |  |
| `ARMOR` | `ObjectiveCriteria` |  |
| `EXPERIENCE` | `ObjectiveCriteria` |  |
| `LEVEL` | `ObjectiveCriteria` |  |
| `TEAM_KILL` | `ObjectiveCriteria[]` |  |
| `KILLED_BY_TEAM` | `ObjectiveCriteria[]` |  |

## Methods

### registerCustom

```java
private static ObjectiveCriteria registerCustom(String p_166110_, boolean p_166111_, ObjectiveCriteria.RenderType p_166112_)
```

**Parameters:**

- `p_166110_` (`String`)
- `p_166111_` (`boolean`)
- `p_166112_` (`ObjectiveCriteria.RenderType`)

**Returns:** `private static ObjectiveCriteria`

### registerCustom

```java
private static ObjectiveCriteria registerCustom(String p_166114_)
```

**Parameters:**

- `p_166114_` (`String`)

**Returns:** `private static ObjectiveCriteria`

### registerCustom

```java
return registerCustom()
```

**Returns:** `return`

### ObjectiveCriteria

```java
protected ObjectiveCriteria(String p_83606_)
```

**Parameters:**

- `p_83606_` (`String`)

**Returns:** `protected`

### this

```java
 this()
```

**Returns:** ``

### ObjectiveCriteria

```java
protected ObjectiveCriteria(String p_83608_, boolean p_83609_, ObjectiveCriteria.RenderType p_83610_)
```

**Parameters:**

- `p_83608_` (`String`)
- `p_83609_` (`boolean`)
- `p_83610_` (`ObjectiveCriteria.RenderType`)

**Returns:** `protected`

### getCustomCriteriaNames

```java
public static Set<String> getCustomCriteriaNames()
```

**Returns:** `public static Set<String>`

### byName

```java
public static Optional<ObjectiveCriteria> byName(String p_83615_)
```

**Parameters:**

- `p_83615_` (`String`)

**Returns:** `public static Optional<ObjectiveCriteria>`

### getStat

```java
<T> private static <T> Optional<ObjectiveCriteria> getStat(StatType<T> p_83612_, ResourceLocation p_83613_)
```

**Parameters:**

- `p_83612_` (`StatType<T>`)
- `p_83613_` (`ResourceLocation`)

**Returns:** `private static <T> Optional<ObjectiveCriteria>`

### getName

```java
public String getName()
```

**Returns:** `public String`

### isReadOnly

```java
public boolean isReadOnly()
```

**Returns:** `public boolean`

### getDefaultRenderType

```java
public ObjectiveCriteria.RenderType getDefaultRenderType()
```

**Returns:** `public ObjectiveCriteria.RenderType`

### HEARTS

```java
, HEARTS()
```

**Returns:** `,`

### RenderType

```java
private RenderType(String p_83632_)
```

**Parameters:**

- `p_83632_` (`String`)

**Returns:** `private`

### getId

```java
public String getId()
```

**Returns:** `public String`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### byId

```java
public static ObjectiveCriteria.RenderType byId(String p_83635_)
```

**Parameters:**

- `p_83635_` (`String`)

**Returns:** `public static ObjectiveCriteria.RenderType`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RenderType` | enum |  |
