# BlockModelShaper

**Package:** `net.minecraft.client.renderer.block`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BlockModelShaper

```java
public BlockModelShaper(ModelManager p_110880_)
```

**Parameters:**

- `p_110880_` (`ModelManager`)

**Returns:** `public`

### getParticleIcon

```java
public TextureAtlasSprite getParticleIcon(BlockState p_110883_)
```

**Parameters:**

- `p_110883_` (`BlockState`)

**Returns:** `TextureAtlasSprite`

### getTexture

```java
public TextureAtlasSprite getTexture(BlockState p_110883_, net.minecraft.world.level.Level level, net.minecraft.core.BlockPos pos)
```

**Parameters:**

- `p_110883_` (`BlockState`)
- `level` (`net.minecraft.world.level.Level`)
- `pos` (`net.minecraft.core.BlockPos`)

**Returns:** `public TextureAtlasSprite`

### getBlockModel

```java
public BakedModel getBlockModel(BlockState p_110894_)
```

**Parameters:**

- `p_110894_` (`BlockState`)

**Returns:** `public BakedModel`

### getModelManager

```java
public ModelManager getModelManager()
```

**Returns:** `public ModelManager`

### replaceCache

```java
public void replaceCache(Map<BlockState, BakedModel> p_248582_)
```

**Parameters:**

- `p_248582_` (`Map<BlockState, BakedModel>`)

**Returns:** `public void`

### stateToModelLocation

```java
public static ModelResourceLocation stateToModelLocation(BlockState p_110896_)
```

**Parameters:**

- `p_110896_` (`BlockState`)

**Returns:** `public static ModelResourceLocation`

### stateToModelLocation

```java
public static ModelResourceLocation stateToModelLocation(ResourceLocation p_110890_, BlockState p_110891_)
```

**Parameters:**

- `p_110890_` (`ResourceLocation`)
- `p_110891_` (`BlockState`)

**Returns:** `public static ModelResourceLocation`

### statePropertiesToString

```java
public static String statePropertiesToString(Map<Property<?>, Comparable<?>> p_110888_)
```

**Parameters:**

- `p_110888_` (`Map<Property<?>, Comparable<?>>`)

**Returns:** `public static String`

### getValue

```java
private static <T extends Comparable<T>> String getValue(Property<T> p_110885_, Comparable<?> p_110886_)
```

**Parameters:**

- `p_110885_` (`Property<T>`)
- `p_110886_` (`Comparable<?>`)

**Returns:** `private static <T extends Comparable<T>> String`
