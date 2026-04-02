# Tag

**Package:** `net.minecraft.nbt`
**Type:** interface

## Methods

### write

```java
void write(DataOutput p_129329_)
```

**Parameters:**

- `p_129329_` (`DataOutput`)

### toString

```java
String toString()
```

**Returns:** `String`

### getId

```java
byte getId()
```

**Returns:** `byte`

### getType

```java
TagType<?> getType()
```

**Returns:** `TagType<?>`

### copy

```java
Tag copy()
```

**Returns:** `Tag`

### sizeInBytes

```java
int sizeInBytes()
```

**Returns:** `int`

### getAsString

```java
default String getAsString()
```

**Returns:** `default String`

### accept

```java
void accept(TagVisitor p_178208_)
```

**Parameters:**

- `p_178208_` (`TagVisitor`)

### accept

```java
StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197572_)
```

**Parameters:**

- `p_197572_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`

### acceptAsRoot

```java
default void acceptAsRoot(StreamTagVisitor p_197574_)
```

**Parameters:**

- `p_197574_` (`StreamTagVisitor`)

**Returns:** `default void`
