# OcelotModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends Entity> extends AgeableListModel<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SITTING_STATE` | `int` |  |
| `BACK_LEG_Y` | `float` |  |
| `BACK_LEG_Z` | `float` |  |
| `FRONT_LEG_Y` | `float` |  |
| `leftHindLeg` | `ModelPart` |  |
| `rightHindLeg` | `ModelPart` |  |
| `leftFrontLeg` | `ModelPart` |  |
| `rightFrontLeg` | `ModelPart` |  |
| `tail1` | `ModelPart` |  |
| `tail2` | `ModelPart` |  |
| `head` | `ModelPart` |  |
| `body` | `ModelPart` |  |
| `state` | `int` |  |

## Methods

### OcelotModel

```java
public OcelotModel(ModelPart p_170767_)
```

**Parameters:**

- `p_170767_` (`ModelPart`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBodyMesh

```java
public static MeshDefinition createBodyMesh(CubeDeformation p_170769_)
```

**Parameters:**

- `p_170769_` (`CubeDeformation`)

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
public void setupAnim(T p_103147_, float p_103148_, float p_103149_, float p_103150_, float p_103151_, float p_103152_)
```

**Parameters:**

- `p_103147_` (`T`)
- `p_103148_` (`float`)
- `p_103149_` (`float`)
- `p_103150_` (`float`)
- `p_103151_` (`float`)
- `p_103152_` (`float`)

### prepareMobModel

```java
public void prepareMobModel(T p_103142_, float p_103143_, float p_103144_, float p_103145_)
```

**Parameters:**

- `p_103142_` (`T`)
- `p_103143_` (`float`)
- `p_103144_` (`float`)
- `p_103145_` (`float`)
