# SignText

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIRECT_CODEC` | `Codec<SignText>` |  |
| `LINES` | `int` |  |

## Methods

### SignText

```java
public SignText()
```

**Returns:** `public`

### SignText

```java
public SignText(Component[] p_277506_, Component[] p_277908_, DyeColor p_277883_, boolean p_278091_)
```

**Parameters:**

- `p_277506_` (`Component[]`)
- `p_277908_` (`Component[]`)
- `p_277883_` (`DyeColor`)
- `p_278091_` (`boolean`)

**Returns:** `public`

### emptyMessages

```java
private static Component[] emptyMessages()
```

**Returns:** `private static Component[]`

### load

```java
private static SignText load(Component[] p_277661_, Optional<Component[]> p_277768_, DyeColor p_277345_, boolean p_278008_)
```

**Parameters:**

- `p_277661_` (`Component[]`)
- `p_277768_` (`Optional<Component[]>`)
- `p_277345_` (`DyeColor`)
- `p_278008_` (`boolean`)

**Returns:** `private static SignText`

### hasGlowingText

```java
public boolean hasGlowingText()
```

**Returns:** `public boolean`

### setHasGlowingText

```java
public SignText setHasGlowingText(boolean p_277953_)
```

**Parameters:**

- `p_277953_` (`boolean`)

**Returns:** `public SignText`

### getColor

```java
public DyeColor getColor()
```

**Returns:** `public DyeColor`

### setColor

```java
public SignText setColor(DyeColor p_277507_)
```

**Parameters:**

- `p_277507_` (`DyeColor`)

**Returns:** `public SignText`

### getMessage

```java
public Component getMessage(int p_277404_, boolean p_278108_)
```

**Parameters:**

- `p_277404_` (`int`)
- `p_278108_` (`boolean`)

**Returns:** `public Component`

### setMessage

```java
public SignText setMessage(int p_277878_, Component p_277360_)
```

**Parameters:**

- `p_277878_` (`int`)
- `p_277360_` (`Component`)

**Returns:** `public SignText`

### setMessage

```java
public SignText setMessage(int p_277690_, Component p_277852_, Component p_277564_)
```

**Parameters:**

- `p_277690_` (`int`)
- `p_277852_` (`Component`)
- `p_277564_` (`Component`)

**Returns:** `public SignText`

### SignText

```java
return new SignText()
```

**Returns:** `return new`

### hasMessage

```java
public boolean hasMessage(Player p_277764_)
```

**Parameters:**

- `p_277764_` (`Player`)

**Returns:** `public boolean`

### getMessages

```java
public Component[] getMessages(boolean p_277992_)
```

**Parameters:**

- `p_277992_` (`boolean`)

**Returns:** `public Component[]`

### getRenderMessages

```java
public FormattedCharSequence[] getRenderMessages(boolean p_277336_, Function<Component, FormattedCharSequence> p_277538_)
```

**Parameters:**

- `p_277336_` (`boolean`)
- `p_277538_` (`Function<Component, FormattedCharSequence>`)

**Returns:** `public FormattedCharSequence[]`

### filteredMessages

```java
private Optional<Component[]> filteredMessages()
```

**Returns:** `private Optional<Component[]>`

### hasAnyClickCommands

```java
public boolean hasAnyClickCommands(Player p_277865_)
```

**Parameters:**

- `p_277865_` (`Player`)

**Returns:** `public boolean`
