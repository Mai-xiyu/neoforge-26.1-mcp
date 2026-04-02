# ParrotModel

**Package:** `net.minecraft.client.model`
**Type:** class
**Extends:** `HierarchicalModel<Parrot>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ParrotModel

```java
public ParrotModel(ModelPart p_170780_)
```

**Parameters:**

- `p_170780_` (`ModelPart`)

**Returns:** `public`

### createBodyLayer

```java
public static LayerDefinition createBodyLayer()
```

**Returns:** `public static LayerDefinition`

### root

```java
public ModelPart root()
```

**Returns:** `ModelPart`

### setupAnim

```java
public void setupAnim(Parrot p_103217_, float p_103218_, float p_103219_, float p_103220_, float p_103221_, float p_103222_)
```

**Parameters:**

- `p_103217_` (`Parrot`)
- `p_103218_` (`float`)
- `p_103219_` (`float`)
- `p_103220_` (`float`)
- `p_103221_` (`float`)
- `p_103222_` (`float`)

**Returns:** `public void`

### prepareMobModel

```java
public void prepareMobModel(Parrot p_103212_, float p_103213_, float p_103214_, float p_103215_)
```

**Parameters:**

- `p_103212_` (`Parrot`)
- `p_103213_` (`float`)
- `p_103214_` (`float`)
- `p_103215_` (`float`)

**Returns:** `public void`

### renderOnShoulder

```java
public void renderOnShoulder(PoseStack p_103224_, VertexConsumer p_103225_, int p_103226_, int p_103227_, float p_103228_, float p_103229_, float p_103230_, float p_103231_, int p_103232_)
```

**Parameters:**

- `p_103224_` (`PoseStack`)
- `p_103225_` (`VertexConsumer`)
- `p_103226_` (`int`)
- `p_103227_` (`int`)
- `p_103228_` (`float`)
- `p_103229_` (`float`)
- `p_103230_` (`float`)
- `p_103231_` (`float`)
- `p_103232_` (`int`)

**Returns:** `public void`

### setupAnim

```java
private void setupAnim(ParrotModel.State p_103242_, int p_103243_, float p_103244_, float p_103245_, float p_103246_, float p_103247_, float p_103248_)
```

**Parameters:**

- `p_103242_` (`ParrotModel.State`)
- `p_103243_` (`int`)
- `p_103244_` (`float`)
- `p_103245_` (`float`)
- `p_103246_` (`float`)
- `p_103247_` (`float`)
- `p_103248_` (`float`)

**Returns:** `private void`

### prepare

```java
private void prepare(ParrotModel.State p_103240_)
```

**Parameters:**

- `p_103240_` (`ParrotModel.State`)

**Returns:** `private void`

### getState

```java
private static ParrotModel.State getState(Parrot p_103210_)
```

**Parameters:**

- `p_103210_` (`Parrot`)

**Returns:** `private static ParrotModel.State`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `State` | enum |  |
