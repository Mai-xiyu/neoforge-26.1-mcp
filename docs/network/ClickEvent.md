# ClickEvent

**Package:** `net.minecraft.network.chat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ClickEvent>` |  |
| `UNSAFE_CODEC` | `MapCodec<ClickEvent.Action>` |  |
| `CODEC` | `MapCodec<ClickEvent.Action>` |  |

## Methods

### ClickEvent

```java
public ClickEvent(ClickEvent.Action p_130620_, String p_130621_)
```

**Parameters:**

- `p_130620_` (`ClickEvent.Action`)
- `p_130621_` (`String`)

**Returns:** `public`

### getAction

```java
public ClickEvent.Action getAction()
```

**Returns:** `public ClickEvent.Action`

### getValue

```java
public String getValue()
```

**Returns:** `public String`

### equals

```java
public boolean equals(Object p_130625_)
```

**Parameters:**

- `p_130625_` (`Object`)

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### COPY_TO_CLIPBOARD

```java
, COPY_TO_CLIPBOARD()
```

**Returns:** `,`

### Action

```java
private Action(String p_130642_, boolean p_130643_)
```

**Parameters:**

- `p_130642_` (`String`)
- `p_130643_` (`boolean`)

**Returns:** `private`

### isAllowedFromServer

```java
public boolean isAllowedFromServer()
```

**Returns:** `public boolean`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### filterForSerialization

```java
public static DataResult<ClickEvent.Action> filterForSerialization(ClickEvent.Action p_304789_)
```

**Parameters:**

- `p_304789_` (`ClickEvent.Action`)

**Returns:** `public static DataResult<ClickEvent.Action>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | enum |  |
