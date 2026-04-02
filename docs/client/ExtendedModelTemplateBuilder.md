# ExtendedModelTemplateBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.template`
**Type:** class
**Side:** 🖥️ Client

## Methods

### of

```java
public static ExtendedModelTemplateBuilder of(ModelTemplate template)
```

**Parameters:**

- `template` (`ModelTemplate`)

**Returns:** `public static ExtendedModelTemplateBuilder`

### builder

```java
public static ExtendedModelTemplateBuilder builder()
```

**Returns:** `public static ExtendedModelTemplateBuilder`

### ExtendedModelTemplateBuilder

```java
return new ExtendedModelTemplateBuilder()
```

**Returns:** `return new`

### parent

```java
public ExtendedModelTemplateBuilder parent(Identifier parent)
```

**Parameters:**

- `parent` (`Identifier`)

**Returns:** `ExtendedModelTemplateBuilder`

### suffix

```java
public ExtendedModelTemplateBuilder suffix(String suffix)
```

**Parameters:**

- `suffix` (`String`)

**Returns:** `ExtendedModelTemplateBuilder`

### requiredTextureSlot

```java
public ExtendedModelTemplateBuilder requiredTextureSlot(TextureSlot slot)
```

**Parameters:**

- `slot` (`TextureSlot`)

**Returns:** `ExtendedModelTemplateBuilder`

### transform

```java
public ExtendedModelTemplateBuilder transform(ItemDisplayContext type, Consumer<TransformVecBuilder> action)
```

**Parameters:**

- `type` (`ItemDisplayContext`)
- `action` (`Consumer<TransformVecBuilder>`)

**Returns:** `ExtendedModelTemplateBuilder`

### ambientOcclusion

```java
public ExtendedModelTemplateBuilder ambientOcclusion(boolean ambientOcclusion)
```

**Parameters:**

- `ambientOcclusion` (`boolean`)

**Returns:** `ExtendedModelTemplateBuilder`

### guiLight

```java
public ExtendedModelTemplateBuilder guiLight(UnbakedModel.GuiLight light)
```

**Parameters:**

- `light` (`UnbakedModel.GuiLight`)

**Returns:** `ExtendedModelTemplateBuilder`

### element

```java
public ExtendedModelTemplateBuilder element(Consumer<ElementBuilder> action)
```

**Parameters:**

- `action` (`Consumer<ElementBuilder>`)

**Returns:** `ExtendedModelTemplateBuilder`

### element

```java
public ExtendedModelTemplateBuilder element(int index, Consumer<ElementBuilder> action)
```

**Parameters:**

- `index` (`int`)
- `action` (`Consumer<ElementBuilder>`)

**Returns:** `ExtendedModelTemplateBuilder`

### getElementCount

```java
public int getElementCount()
```

**Returns:** `int`

### customLoader

```java
public <L extends CustomLoaderBuilder> ExtendedModelTemplateBuilder customLoader(Supplier<L> customLoaderFactory, Consumer<L> action)
```

**Parameters:**

- `customLoaderFactory` (`Supplier<L>`)
- `action` (`Consumer<L>`)

**Returns:** `ExtendedModelTemplateBuilder`

### rootTransforms

```java
public ExtendedModelTemplateBuilder rootTransforms(Consumer<RootTransformsBuilder> action)
```

**Parameters:**

- `action` (`Consumer<RootTransformsBuilder>`)

**Returns:** `ExtendedModelTemplateBuilder`

### build

```java
public ExtendedModelTemplate build()
```

**Returns:** `ExtendedModelTemplate`

### ExtendedModelTemplate

```java
return new ExtendedModelTemplate()
```

**Returns:** `return new`
