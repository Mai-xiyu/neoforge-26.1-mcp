# SpriteResourceLoader

**Package:** `net.minecraft.client.renderer.texture.atlas`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`, `@FunctionalInterface`

## Methods

### create

```java
static SpriteResourceLoader create(Collection<MetadataSectionSerializer<?>> p_296204_)
```

**Parameters:**

- `p_296204_` (`Collection<MetadataSectionSerializer<?>>`)

**Returns:** `static SpriteResourceLoader`

### loadSprite

```java
default SpriteContents loadSprite(ResourceLocation p_295581_, Resource p_294329_)
```

**Parameters:**

- `p_295581_` (`ResourceLocation`)
- `p_294329_` (`Resource`)

**Returns:** `SpriteContents`

### loadSprite

```java
return loadSprite()
```

**Returns:** `return`

### loadSprite

```java
SpriteContents loadSprite(ResourceLocation id, Resource resource, net.neoforged.neoforge.client.textures.SpriteContentsConstructor constructor)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `resource` (`Resource`)
- `constructor` (`net.neoforged.neoforge.client.textures.SpriteContentsConstructor`)

**Returns:** `SpriteContents`
