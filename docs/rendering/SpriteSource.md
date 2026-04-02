# SpriteSource

**Package:** `net.minecraft.client.renderer.texture.atlas`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### run

```java
void run(ResourceManager p_261770_, SpriteSource.Output p_261757_)
```

**Parameters:**

- `p_261770_` (`ResourceManager`)
- `p_261757_` (`SpriteSource.Output`)

### type

```java
SpriteSourceType type()
```

**Returns:** `SpriteSourceType`

### add

```java
default void add(ResourceLocation p_261841_, Resource p_261651_)
```

**Parameters:**

- `p_261841_` (`ResourceLocation`)
- `p_261651_` (`Resource`)

**Returns:** `default void`

### add

```java
void add(ResourceLocation p_261821_, SpriteSource.SpriteSupplier p_261760_)
```

**Parameters:**

- `p_261821_` (`ResourceLocation`)
- `p_261760_` (`SpriteSource.SpriteSupplier`)

### removeAll

```java
void removeAll(Predicate<ResourceLocation> p_261532_)
```

**Parameters:**

- `p_261532_` (`Predicate<ResourceLocation>`)

### discard

```java
default void discard()
```

**Returns:** `default void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Output` | interface |  |
| `SpriteSupplier` | interface |  |
