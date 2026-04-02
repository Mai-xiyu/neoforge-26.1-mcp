# DisplaySlot

**Package:** `net.minecraft.world.scores`
**Type:** enum
**Implements:** `StringRepresentable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `StringRepresentable.EnumCodec<DisplaySlot>` |  |
| `BY_ID` | `IntFunction<DisplaySlot>` |  |

## Methods

### TEAM_WHITE

```java
, TEAM_WHITE()
```

**Returns:** `,`

### DisplaySlot

```java
private DisplaySlot(int p_296111_, String p_296101_)
```

**Parameters:**

- `p_296111_` (`int`)
- `p_296101_` (`String`)

**Returns:** `private`

### id

```java
public int id()
```

**Returns:** `public int`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### teamColorToSlot

```java
public static DisplaySlot teamColorToSlot(ChatFormatting p_296133_)
```

**Parameters:**

- `p_296133_` (`ChatFormatting`)

**Returns:** `DisplaySlot`
