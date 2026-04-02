# NbtContents

**Package:** `net.minecraft.network.chat.contents`
**Type:** class
**Implements:** `ComponentContents`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NbtContents>` |  |
| `TYPE` | `ComponentContents.Type<NbtContents>` |  |

## Methods

### NbtContents

```java
public NbtContents(String p_237395_, boolean p_237396_, Optional<Component> p_237397_, DataSource p_237398_)
```

**Parameters:**

- `p_237395_` (`String`)
- `p_237396_` (`boolean`)
- `p_237397_` (`Optional<Component>`)
- `p_237398_` (`DataSource`)

**Returns:** `public`

### NbtContents

```java
private NbtContents(String p_237389_, NbtPathArgument.NbtPath p_237390_, boolean p_237391_, Optional<Component> p_237392_, DataSource p_237393_)
```

**Parameters:**

- `p_237389_` (`String`)
- `p_237390_` (`NbtPathArgument.NbtPath`)
- `p_237391_` (`boolean`)
- `p_237392_` (`Optional<Component>`)
- `p_237393_` (`DataSource`)

**Returns:** `private`

### getNbtPath

```java
public String getNbtPath()
```

**Returns:** `public String`

### isInterpreting

```java
public boolean isInterpreting()
```

**Returns:** `public boolean`

### getSeparator

```java
public Optional<Component> getSeparator()
```

**Returns:** `public Optional<Component>`

### getDataSource

```java
public DataSource getDataSource()
```

**Returns:** `public DataSource`

### equals

```java
public boolean equals(Object p_237430_)
```

**Parameters:**

- `p_237430_` (`Object`)

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

### resolve

```java
public MutableComponent resolve(CommandSourceStack p_237401_, Entity p_237402_, int p_237403_)
```

**Parameters:**

- `p_237401_` (`CommandSourceStack`)
- `p_237402_` (`Entity`)
- `p_237403_` (`int`)

**Returns:** `MutableComponent`

### type

```java
public ComponentContents.Type<?> type()
```

**Returns:** `ComponentContents.Type<?>`
