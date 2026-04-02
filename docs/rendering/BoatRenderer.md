# BoatRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Extends:** `EntityRenderer<Boat>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BoatRenderer

```java
public BoatRenderer(EntityRendererProvider.Context p_234563_, boolean p_234564_)
```

**Parameters:**

- `p_234563_` (`EntityRendererProvider.Context`)
- `p_234564_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBoatModel

```java
private ListModel<Boat> createBoatModel(EntityRendererProvider.Context p_248834_, Boat.Type p_249317_, boolean p_250093_)
```

**Parameters:**

- `p_248834_` (`EntityRendererProvider.Context`)
- `p_249317_` (`Boat.Type`)
- `p_250093_` (`boolean`)

**Returns:** `private ListModel<Boat>`

### getTextureLocation

```java
private static ResourceLocation getTextureLocation(Boat.Type p_234566_, boolean p_234567_)
```

**Parameters:**

- `p_234566_` (`Boat.Type`)
- `p_234567_` (`boolean`)

**Returns:** `private static ResourceLocation`

### render

```java
public void render(Boat p_113929_, float p_113930_, float p_113931_, PoseStack p_113932_, MultiBufferSource p_113933_, int p_113934_)
```

**Parameters:**

- `p_113929_` (`Boat`)
- `p_113930_` (`float`)
- `p_113931_` (`float`)
- `p_113932_` (`PoseStack`)
- `p_113933_` (`MultiBufferSource`)
- `p_113934_` (`int`)

**Returns:** `public void`

### getTextureLocation ⚠️ *Deprecated*

```java
model
    public ResourceLocation getTextureLocation(Boat p_113927_)
```

**Parameters:**

- `p_113927_` (`Boat`)

**Returns:** `model
    public ResourceLocation`

### getModelWithLocation

```java
public Pair<ResourceLocation, ListModel<Boat>> getModelWithLocation(Boat boat)
```

**Parameters:**

- `boat` (`Boat`)

**Returns:** `public Pair<ResourceLocation, ListModel<Boat>>`
