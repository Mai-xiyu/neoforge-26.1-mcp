# PlayerModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends LivingEntity> extends HumanoidModel<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `leftSleeve` | `ModelPart` |  |
| `rightSleeve` | `ModelPart` |  |
| `leftPants` | `ModelPart` |  |
| `rightPants` | `ModelPart` |  |
| `jacket` | `ModelPart` |  |

## Methods

### PlayerModel

```java
public PlayerModel(ModelPart p_170821_, boolean p_170822_)
```

**Parameters:**

- `p_170821_` (`ModelPart`)
- `p_170822_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createMesh

```java
public static MeshDefinition createMesh(CubeDeformation p_170826_, boolean p_170827_)
```

**Parameters:**

- `p_170826_` (`CubeDeformation`)
- `p_170827_` (`boolean`)

**Returns:** `public static MeshDefinition`

### bodyParts

```java
protected Iterable<ModelPart> bodyParts()
```

**Returns:** `Iterable<ModelPart>`

### renderEars

```java
public void renderEars(PoseStack p_103402_, VertexConsumer p_103403_, int p_103404_, int p_103405_)
```

**Parameters:**

- `p_103402_` (`PoseStack`)
- `p_103403_` (`VertexConsumer`)
- `p_103404_` (`int`)
- `p_103405_` (`int`)

**Returns:** `public void`

### renderCloak

```java
public void renderCloak(PoseStack p_103412_, VertexConsumer p_103413_, int p_103414_, int p_103415_)
```

**Parameters:**

- `p_103412_` (`PoseStack`)
- `p_103413_` (`VertexConsumer`)
- `p_103414_` (`int`)
- `p_103415_` (`int`)

**Returns:** `public void`

### setupAnim

```java
public void setupAnim(T p_103395_, float p_103396_, float p_103397_, float p_103398_, float p_103399_, float p_103400_)
```

**Parameters:**

- `p_103395_` (`T`)
- `p_103396_` (`float`)
- `p_103397_` (`float`)
- `p_103398_` (`float`)
- `p_103399_` (`float`)
- `p_103400_` (`float`)

### setAllVisible

```java
public void setAllVisible(boolean p_103419_)
```

**Parameters:**

- `p_103419_` (`boolean`)

### translateToHand

```java
public void translateToHand(HumanoidArm p_103392_, PoseStack p_103393_)
```

**Parameters:**

- `p_103392_` (`HumanoidArm`)
- `p_103393_` (`PoseStack`)

### getRandomModelPart

```java
public ModelPart getRandomModelPart(RandomSource p_233439_)
```

**Parameters:**

- `p_233439_` (`RandomSource`)

**Returns:** `public ModelPart`
