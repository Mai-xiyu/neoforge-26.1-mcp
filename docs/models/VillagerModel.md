# VillagerModel

**Package:** `net.minecraft.client.model`
**Type:** class<T extends Entity> extends HierarchicalModel<T>
**Implements:** `HeadedModel`, `VillagerHeadModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `nose` | `ModelPart` |  |

## Methods

### VillagerModel

```java
public VillagerModel(ModelPart p_171051_)
```

**Parameters:**

- `p_171051_` (`ModelPart`)

**Returns:** `public`

### createBodyModel

```java
public static MeshDefinition createBodyModel()
```

**Returns:** `public static MeshDefinition`

### root

```java
public ModelPart root()
```

**Returns:** `ModelPart`

### setupAnim

```java
public void setupAnim(T p_104053_, float p_104054_, float p_104055_, float p_104056_, float p_104057_, float p_104058_)
```

**Parameters:**

- `p_104053_` (`T`)
- `p_104054_` (`float`)
- `p_104055_` (`float`)
- `p_104056_` (`float`)
- `p_104057_` (`float`)
- `p_104058_` (`float`)

### getHead

```java
public ModelPart getHead()
```

**Returns:** `ModelPart`

### hatVisible

```java
public void hatVisible(boolean p_104060_)
```

**Parameters:**

- `p_104060_` (`boolean`)
