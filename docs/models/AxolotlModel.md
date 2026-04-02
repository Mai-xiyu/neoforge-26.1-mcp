# AxolotlModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends Axolotl & LerpingModel> extends AgeableListModel<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SWIMMING_LEG_XROT` | `float` |  |

## Methods

### AxolotlModel

```java
public AxolotlModel(ModelPart p_170370_)
```

**Parameters:**

- `p_170370_` (`ModelPart`)

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
public void setupAnim(T p_170395_, float p_170396_, float p_170397_, float p_170398_, float p_170399_, float p_170400_)
```

**Parameters:**

- `p_170395_` (`T`)
- `p_170396_` (`float`)
- `p_170397_` (`float`)
- `p_170398_` (`float`)
- `p_170399_` (`float`)
- `p_170400_` (`float`)

**Returns:** `public void`

### saveAnimationValues

```java
private void saveAnimationValues(T p_170389_)
```

**Parameters:**

- `p_170389_` (`T`)

**Returns:** `private void`

### getRotationVector

```java
private Vector3f getRotationVector(ModelPart p_254355_)
```

**Parameters:**

- `p_254355_` (`ModelPart`)

**Returns:** `private Vector3f`

### Vector3f

```java
return new Vector3f()
```

**Returns:** `return new`

### setRotationFromVector

```java
private void setRotationFromVector(ModelPart p_254301_, Vector3f p_253783_)
```

**Parameters:**

- `p_254301_` (`ModelPart`)
- `p_253783_` (`Vector3f`)

**Returns:** `private void`

### setupInitialAnimationValues

```java
private void setupInitialAnimationValues(T p_170391_, float p_170392_, float p_170393_)
```

**Parameters:**

- `p_170391_` (`T`)
- `p_170392_` (`float`)
- `p_170393_` (`float`)

**Returns:** `private void`

### lerpTo

```java
private float lerpTo(float p_170375_, float p_170376_)
```

**Parameters:**

- `p_170375_` (`float`)
- `p_170376_` (`float`)

**Returns:** `private float`

### lerpTo

```java
private float lerpTo(float p_170378_, float p_170379_, float p_170380_)
```

**Parameters:**

- `p_170378_` (`float`)
- `p_170379_` (`float`)
- `p_170380_` (`float`)

**Returns:** `private float`

### lerpPart

```java
private void lerpPart(ModelPart p_170404_, float p_170405_, float p_170406_, float p_170407_)
```

**Parameters:**

- `p_170404_` (`ModelPart`)
- `p_170405_` (`float`)
- `p_170406_` (`float`)
- `p_170407_` (`float`)

**Returns:** `private void`

### setupLayStillOnGroundAnimation

```java
private void setupLayStillOnGroundAnimation(float p_170415_, float p_170416_)
```

**Parameters:**

- `p_170415_` (`float`)
- `p_170416_` (`float`)

**Returns:** `private void`

### setupGroundCrawlingAnimation

```java
private void setupGroundCrawlingAnimation(float p_170419_, float p_170420_)
```

**Parameters:**

- `p_170419_` (`float`)
- `p_170420_` (`float`)

**Returns:** `private void`

### setupWaterHoveringAnimation

```java
private void setupWaterHoveringAnimation(float p_170373_)
```

**Parameters:**

- `p_170373_` (`float`)

**Returns:** `private void`

### setupSwimmingAnimation

```java
private void setupSwimmingAnimation(float p_170423_, float p_170424_)
```

**Parameters:**

- `p_170423_` (`float`)
- `p_170424_` (`float`)

**Returns:** `private void`

### setupPlayDeadAnimation

```java
private void setupPlayDeadAnimation(float p_170413_)
```

**Parameters:**

- `p_170413_` (`float`)

**Returns:** `private void`

### applyMirrorLegRotations

```java
private void applyMirrorLegRotations()
```

**Returns:** `private void`
