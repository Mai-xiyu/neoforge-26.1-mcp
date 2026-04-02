# ChunkProtoTickListFix

**Package:** `net.minecraft.util.datafix.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### ChunkProtoTickListFix

```java
public ChunkProtoTickListFix(Schema p_184988_)
```

**Parameters:**

- `p_184988_` (`Schema`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeRule

```java
protected TypeRewriteRule makeRule()
```

**Returns:** `TypeRewriteRule`

### makeTickList

```java
private Dynamic<?> makeTickList(Dynamic<?> p_185037_, Int2ObjectMap<Supplier<ChunkProtoTickListFix.PoorMansPalettedContainer>> p_185038_, byte p_185039_, int p_185040_, int p_185041_, String p_185042_, Function<Dynamic<?>, String> p_185043_)
```

**Parameters:**

- `p_185037_` (`Dynamic<?>`)
- `p_185038_` (`Int2ObjectMap<Supplier<ChunkProtoTickListFix.PoorMansPalettedContainer>>`)
- `p_185039_` (`byte`)
- `p_185040_` (`int`)
- `p_185041_` (`int`)
- `p_185042_` (`String`)
- `p_185043_` (`Function<Dynamic<?>, String>`)

**Returns:** `private Dynamic<?>`

### getBlock

```java
private static String getBlock(Dynamic<?> p_185032_)
```

**Parameters:**

- `p_185032_` (`Dynamic<?>`)

**Returns:** `private static String`

### getLiquid

```java
private static String getLiquid(Dynamic<?> p_185069_)
```

**Parameters:**

- `p_185069_` (`Dynamic<?>`)

**Returns:** `private static String`

### createTick

```java
private Dynamic<?> createTick(Dynamic<?> p_185045_, Supplier<ChunkProtoTickListFix.PoorMansPalettedContainer> p_185046_, int p_185047_, int p_185048_, int p_185049_, int p_185050_, Function<Dynamic<?>, String> p_185051_)
```

**Parameters:**

- `p_185045_` (`Dynamic<?>`)
- `p_185046_` (`Supplier<ChunkProtoTickListFix.PoorMansPalettedContainer>`)
- `p_185047_` (`int`)
- `p_185048_` (`int`)
- `p_185049_` (`int`)
- `p_185050_` (`int`)
- `p_185051_` (`Function<Dynamic<?>, String>`)

**Returns:** `private Dynamic<?>`

### PoorMansPalettedContainer

```java
public PoorMansPalettedContainer(List<? extends Dynamic<?>> p_185087_, long[] p_185088_)
```

**Parameters:**

- `p_185087_` (`List<? extends Dynamic<?>>`)
- `p_185088_` (`long[]`)

**Returns:** `public`

### get

```java
public Dynamic<?> get(int p_185091_, int p_185092_, int p_185093_)
```

**Parameters:**

- `p_185091_` (`int`)
- `p_185092_` (`int`)
- `p_185093_` (`int`)

**Returns:** `Dynamic<?>`

### getIndex

```java
private int getIndex(int p_185096_, int p_185097_, int p_185098_)
```

**Parameters:**

- `p_185096_` (`int`)
- `p_185097_` (`int`)
- `p_185098_` (`int`)

**Returns:** `private int`

### palette

```java
public List<? extends Dynamic<?>> palette()
```

**Returns:** `public List<? extends Dynamic<?>>`

### data

```java
public long[] data()
```

**Returns:** `public long[]`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PoorMansPalettedContainer` | class |  |
