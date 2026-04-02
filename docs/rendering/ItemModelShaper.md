# ItemModelShaper

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `shapes` | `Int2ObjectMap<ModelResourceLocation>` |  |

## Methods

### ItemModelShaper

```java
public ItemModelShaper(ModelManager p_109392_)
```

**Parameters:**

- `p_109392_` (`ModelManager`)

**Returns:** `public`

### getItemModel

```java
public BakedModel getItemModel(ItemStack p_109407_)
```

**Parameters:**

- `p_109407_` (`ItemStack`)

**Returns:** `public BakedModel`

### getItemModel

```java
public BakedModel getItemModel(Item p_109395_)
```

**Parameters:**

- `p_109395_` (`Item`)

**Returns:** `BakedModel`

### getIndex

```java
private static int getIndex(Item p_109405_)
```

**Parameters:**

- `p_109405_` (`Item`)

**Returns:** `private static int`

### register

```java
public void register(Item p_109397_, ModelResourceLocation p_109398_)
```

**Parameters:**

- `p_109397_` (`Item`)
- `p_109398_` (`ModelResourceLocation`)

**Returns:** `public void`

### getModelManager

```java
public ModelManager getModelManager()
```

**Returns:** `public ModelManager`

### rebuildCache

```java
public void rebuildCache()
```

**Returns:** `public void`
