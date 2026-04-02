# WardenModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends Warden> extends HierarchicalModel<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `bone` | `ModelPart` |  |
| `body` | `ModelPart` |  |
| `head` | `ModelPart` |  |
| `rightTendril` | `ModelPart` |  |
| `leftTendril` | `ModelPart` |  |
| `leftLeg` | `ModelPart` |  |
| `leftArm` | `ModelPart` |  |
| `leftRibcage` | `ModelPart` |  |
| `rightArm` | `ModelPart` |  |
| `rightLeg` | `ModelPart` |  |
| `rightRibcage` | `ModelPart` |  |

## Methods

### WardenModel

```java
public WardenModel(ModelPart p_233512_)
```

**Parameters:**

- `p_233512_` (`ModelPart`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBodyLayer

```java
public static LayerDefinition createBodyLayer()
```

**Returns:** `public static LayerDefinition`

### setupAnim

```java
public void setupAnim(T p_233531_, float p_233532_, float p_233533_, float p_233534_, float p_233535_, float p_233536_)
```

**Parameters:**

- `p_233531_` (`T`)
- `p_233532_` (`float`)
- `p_233533_` (`float`)
- `p_233534_` (`float`)
- `p_233535_` (`float`)
- `p_233536_` (`float`)

**Returns:** `public void`

### animateHeadLookTarget

```java
private void animateHeadLookTarget(float p_233517_, float p_233518_)
```

**Parameters:**

- `p_233517_` (`float`)
- `p_233518_` (`float`)

**Returns:** `private void`

### animateIdlePose

```java
private void animateIdlePose(float p_233515_)
```

**Parameters:**

- `p_233515_` (`float`)

**Returns:** `private void`

### animateWalk

```java
private void animateWalk(float p_233539_, float p_233540_)
```

**Parameters:**

- `p_233539_` (`float`)
- `p_233540_` (`float`)

**Returns:** `private void`

### resetArmPoses

```java
private void resetArmPoses()
```

**Returns:** `private void`

### animateTendrils

```java
private void animateTendrils(T p_233527_, float p_233528_, float p_233529_)
```

**Parameters:**

- `p_233527_` (`T`)
- `p_233528_` (`float`)
- `p_233529_` (`float`)

**Returns:** `private void`

### root

```java
public ModelPart root()
```

**Returns:** `ModelPart`

### getTendrilsLayerModelParts

```java
public List<ModelPart> getTendrilsLayerModelParts()
```

**Returns:** `public List<ModelPart>`

### getHeartLayerModelParts

```java
public List<ModelPart> getHeartLayerModelParts()
```

**Returns:** `public List<ModelPart>`

### getBioluminescentLayerModelParts

```java
public List<ModelPart> getBioluminescentLayerModelParts()
```

**Returns:** `public List<ModelPart>`

### getPulsatingSpotsLayerModelParts

```java
public List<ModelPart> getPulsatingSpotsLayerModelParts()
```

**Returns:** `public List<ModelPart>`
