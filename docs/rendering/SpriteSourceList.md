# SpriteSourceList

**Package:** `net.minecraft.client.renderer.texture.atlas`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SpriteSourceList

```java
private SpriteSourceList(List<SpriteSource> p_295898_)
```

**Parameters:**

- `p_295898_` (`List<SpriteSource>`)

**Returns:** `private`

### list

```java
public List<Function<SpriteResourceLoader, SpriteContents>> list(ResourceManager p_294111_)
```

**Parameters:**

- `p_294111_` (`ResourceManager`)

**Returns:** `public List<Function<SpriteResourceLoader, SpriteContents>>`

### add

```java
public void add(ResourceLocation p_296060_, SpriteSource.SpriteSupplier p_296385_)
```

**Parameters:**

- `p_296060_` (`ResourceLocation`)
- `p_296385_` (`SpriteSource.SpriteSupplier`)

### removeAll

```java
public void removeAll(Predicate<ResourceLocation> p_296294_)
```

**Parameters:**

- `p_296294_` (`Predicate<ResourceLocation>`)

### load

```java
public static SpriteSourceList load(ResourceManager p_295606_, ResourceLocation p_295617_)
```

**Parameters:**

- `p_295606_` (`ResourceManager`)
- `p_295617_` (`ResourceLocation`)

**Returns:** `public static SpriteSourceList`

### SpriteSourceList

```java
return new SpriteSourceList()
```

**Returns:** `return new`
