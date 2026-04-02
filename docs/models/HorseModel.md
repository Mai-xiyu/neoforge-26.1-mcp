# HorseModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends AbstractHorse> extends AgeableListModel<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `HEAD_PARTS` | `String` |  |
| `body` | `ModelPart` |  |
| `headParts` | `ModelPart` |  |

## Methods

### HorseModel

```java
public HorseModel(ModelPart p_170668_)
```

**Parameters:**

- `p_170668_` (`ModelPart`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBodyMesh

```java
public static MeshDefinition createBodyMesh(CubeDeformation p_170670_)
```

**Parameters:**

- `p_170670_` (`CubeDeformation`)

**Returns:** `public static MeshDefinition`

### setupAnim

```java
public void setupAnim(T p_102785_, float p_102786_, float p_102787_, float p_102788_, float p_102789_, float p_102790_)
```

**Parameters:**

- `p_102785_` (`T`)
- `p_102786_` (`float`)
- `p_102787_` (`float`)
- `p_102788_` (`float`)
- `p_102789_` (`float`)
- `p_102790_` (`float`)

**Returns:** `public void`

### headParts

```java
public Iterable<ModelPart> headParts()
```

**Returns:** `Iterable<ModelPart>`

### bodyParts

```java
protected Iterable<ModelPart> bodyParts()
```

**Returns:** `Iterable<ModelPart>`

### prepareMobModel

```java
public void prepareMobModel(T p_102780_, float p_102781_, float p_102782_, float p_102783_)
```

**Parameters:**

- `p_102780_` (`T`)
- `p_102781_` (`float`)
- `p_102782_` (`float`)
- `p_102783_` (`float`)

**Returns:** `public void`
