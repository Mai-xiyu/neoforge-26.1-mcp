# RegistryAwareItemModelShaper

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Extends:** `ItemModelShaper`
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Description

Wrapper around `ItemModelShaper` that cleans up the internal maps to respect ID remapping.

## Methods

### RegistryAwareItemModelShaper

```java
public RegistryAwareItemModelShaper(ModelManager manager)
```

**Parameters:**

- `manager` (`ModelManager`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getItemModel

```java
public BakedModel getItemModel(Item item)
```

**Parameters:**

- `item` (`Item`)

**Returns:** `BakedModel`

### register

```java
public void register(Item item, ModelResourceLocation location)
```

**Parameters:**

- `item` (`Item`)
- `location` (`ModelResourceLocation`)

### rebuildCache

```java
public void rebuildCache()
```

### getLocation

```java
public ModelResourceLocation getLocation(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `public ModelResourceLocation`
