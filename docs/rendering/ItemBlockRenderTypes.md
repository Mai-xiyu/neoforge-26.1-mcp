# ItemBlockRenderTypes

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getRenderLayers

```java
net.neoforged.neoforge.client.ChunkRenderTypeSet getRenderLayers(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `net.neoforged.neoforge.client.ChunkRenderTypeSet`

### setRenderLayer

```java
public static void setRenderLayer(Block block, RenderType type)
```

**Parameters:**

- `block` (`Block`)
- `type` (`RenderType`)

### setRenderLayer

```java
public static synchronized void setRenderLayer(Block block, java.util.function.Predicate<RenderType> predicate)
```

**Parameters:**

- `block` (`Block`)
- `predicate` (`java.util.function.Predicate<RenderType>`)

### setRenderLayer

```java
public static synchronized void setRenderLayer(Block block, net.neoforged.neoforge.client.ChunkRenderTypeSet layers)
```

**Parameters:**

- `block` (`Block`)
- `layers` (`net.neoforged.neoforge.client.ChunkRenderTypeSet`)

### checkClientLoading

```java
 checkClientLoading()
```

**Returns:** ``

### setRenderLayer

```java
public static synchronized void setRenderLayer(Fluid fluid, RenderType type)
```

**Parameters:**

- `fluid` (`Fluid`)
- `type` (`RenderType`)

### checkClientLoading

```java
 checkClientLoading()
```

**Returns:** ``

### checkClientLoading

```java
private static void checkClientLoading()
```

**Returns:** `private static void`

### createSetFromPredicate

```java
private static net.neoforged.neoforge.client.ChunkRenderTypeSet createSetFromPredicate(java.util.function.Predicate<RenderType> predicate)
```

**Parameters:**

- `predicate` (`java.util.function.Predicate<RenderType>`)

**Returns:** `private static net.neoforged.neoforge.client.ChunkRenderTypeSet`
