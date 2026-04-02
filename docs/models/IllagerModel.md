# IllagerModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends AbstractIllager> extends HierarchicalModel<T>
**Implements:** `ArmedModel`, `HeadedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### IllagerModel

```java
public IllagerModel(ModelPart p_170688_)
```

**Parameters:**

- `p_170688_` (`ModelPart`)

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
public void setupAnim(T p_102928_, float p_102929_, float p_102930_, float p_102931_, float p_102932_, float p_102933_)
```

**Parameters:**

- `p_102928_` (`T`)
- `p_102929_` (`float`)
- `p_102930_` (`float`)
- `p_102931_` (`float`)
- `p_102932_` (`float`)
- `p_102933_` (`float`)

**Returns:** `public void`

### getArm

```java
private ModelPart getArm(HumanoidArm p_102923_)
```

**Parameters:**

- `p_102923_` (`HumanoidArm`)

**Returns:** `private ModelPart`

### getHat

```java
public ModelPart getHat()
```

**Returns:** `public ModelPart`

### getHead

```java
public ModelPart getHead()
```

**Returns:** `ModelPart`

### translateToHand

```java
public void translateToHand(HumanoidArm p_102925_, PoseStack p_102926_)
```

**Parameters:**

- `p_102925_` (`HumanoidArm`)
- `p_102926_` (`PoseStack`)
