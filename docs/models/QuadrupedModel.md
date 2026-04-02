# QuadrupedModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends Entity> extends AgeableListModel<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `head` | `ModelPart` |  |
| `body` | `ModelPart` |  |
| `rightHindLeg` | `ModelPart` |  |
| `leftHindLeg` | `ModelPart` |  |
| `rightFrontLeg` | `ModelPart` |  |
| `leftFrontLeg` | `ModelPart` |  |

## Methods

### QuadrupedModel

```java
protected QuadrupedModel(ModelPart p_170857_, boolean p_170858_, float p_170859_, float p_170860_, float p_170861_, float p_170862_, int p_170863_)
```

**Parameters:**

- `p_170857_` (`ModelPart`)
- `p_170858_` (`boolean`)
- `p_170859_` (`float`)
- `p_170860_` (`float`)
- `p_170861_` (`float`)
- `p_170862_` (`float`)
- `p_170863_` (`int`)

**Returns:** `protected`

### createBodyMesh

```java
public static MeshDefinition createBodyMesh(int p_170865_, CubeDeformation p_170866_)
```

**Parameters:**

- `p_170865_` (`int`)
- `p_170866_` (`CubeDeformation`)

**Returns:** `public static MeshDefinition`

### headParts

```java
protected Iterable<ModelPart> headParts()
```

**Returns:** `Iterable<ModelPart>`

### bodyParts

```java
protected Iterable<ModelPart> bodyParts()
```

**Returns:** `Iterable<ModelPart>`

### setupAnim

```java
public void setupAnim(T p_103509_, float p_103510_, float p_103511_, float p_103512_, float p_103513_, float p_103514_)
```

**Parameters:**

- `p_103509_` (`T`)
- `p_103510_` (`float`)
- `p_103511_` (`float`)
- `p_103512_` (`float`)
- `p_103513_` (`float`)
- `p_103514_` (`float`)
