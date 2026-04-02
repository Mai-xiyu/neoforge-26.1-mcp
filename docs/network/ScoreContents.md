# ScoreContents

**Package:** `net.minecraft.network.chat.contents`
**Type:** class
**Implements:** `ComponentContents`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INNER_CODEC` | `MapCodec<ScoreContents>` |  |
| `CODEC` | `MapCodec<ScoreContents>` |  |
| `TYPE` | `ComponentContents.Type<ScoreContents>` |  |

## Methods

### ScoreContents

```java
public ScoreContents(String p_237438_, String p_237439_)
```

**Parameters:**

- `p_237438_` (`String`)
- `p_237439_` (`String`)

**Returns:** `public`

### type

```java
public ComponentContents.Type<?> type()
```

**Returns:** `ComponentContents.Type<?>`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getSelector

```java
public EntitySelector getSelector()
```

**Returns:** `EntitySelector`

### getObjective

```java
public String getObjective()
```

**Returns:** `public String`

### findTargetName

```java
private ScoreHolder findTargetName(CommandSourceStack p_237442_)
```

**Parameters:**

- `p_237442_` (`CommandSourceStack`)

**Returns:** `private ScoreHolder`

### getScore

```java
private MutableComponent getScore(ScoreHolder p_313863_, CommandSourceStack p_237451_)
```

**Parameters:**

- `p_313863_` (`ScoreHolder`)
- `p_237451_` (`CommandSourceStack`)

**Returns:** `private MutableComponent`

### resolve

```java
public MutableComponent resolve(CommandSourceStack p_237444_, Entity p_237445_, int p_237446_)
```

**Parameters:**

- `p_237444_` (`CommandSourceStack`)
- `p_237445_` (`Entity`)
- `p_237446_` (`int`)

**Returns:** `MutableComponent`

### equals

```java
public boolean equals(Object p_237455_)
```

**Parameters:**

- `p_237455_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`
