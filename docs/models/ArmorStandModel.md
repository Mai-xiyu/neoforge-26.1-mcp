# ArmorStandModel

**Package:** `net.minecraft.client.model`
**Type:** class
**Extends:** `ArmorStandArmorModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ArmorStandModel

```java
public ArmorStandModel(ModelPart p_170356_)
```

**Parameters:**

- `p_170356_` (`ModelPart`)

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

### prepareMobModel

```java
public void prepareMobModel(ArmorStand p_102172_, float p_102173_, float p_102174_, float p_102175_)
```

**Parameters:**

- `p_102172_` (`ArmorStand`)
- `p_102173_` (`float`)
- `p_102174_` (`float`)
- `p_102175_` (`float`)

**Returns:** `public void`

### setupAnim

```java
public void setupAnim(ArmorStand p_102177_, float p_102178_, float p_102179_, float p_102180_, float p_102181_, float p_102182_)
```

**Parameters:**

- `p_102177_` (`ArmorStand`)
- `p_102178_` (`float`)
- `p_102179_` (`float`)
- `p_102180_` (`float`)
- `p_102181_` (`float`)
- `p_102182_` (`float`)

### bodyParts

```java
protected Iterable<ModelPart> bodyParts()
```

**Returns:** `Iterable<ModelPart>`

### translateToHand

```java
public void translateToHand(HumanoidArm p_102157_, PoseStack p_102158_)
```

**Parameters:**

- `p_102157_` (`HumanoidArm`)
- `p_102158_` (`PoseStack`)
