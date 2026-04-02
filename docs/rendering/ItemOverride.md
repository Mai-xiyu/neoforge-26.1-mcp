# ItemOverride

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ItemOverride

```java
public ItemOverride(ResourceLocation p_173447_, List<ItemOverride.Predicate> p_173448_)
```

**Parameters:**

- `p_173447_` (`ResourceLocation`)
- `p_173448_` (`List<ItemOverride.Predicate>`)

**Returns:** `public`

### getModel

```java
public ResourceLocation getModel()
```

**Returns:** `public ResourceLocation`

### getPredicates

```java
public Stream<ItemOverride.Predicate> getPredicates()
```

**Returns:** `public Stream<ItemOverride.Predicate>`

### deserialize

```java
public ItemOverride deserialize(JsonElement p_111725_, Type p_111726_, JsonDeserializationContext p_111727_)
```

**Parameters:**

- `p_111725_` (`JsonElement`)
- `p_111726_` (`Type`)
- `p_111727_` (`JsonDeserializationContext`)

**Returns:** `public ItemOverride`

### ItemOverride

```java
return new ItemOverride()
```

**Returns:** `return new`

### getPredicates

```java
protected List<ItemOverride.Predicate> getPredicates(JsonObject p_173451_)
```

**Parameters:**

- `p_173451_` (`JsonObject`)

**Returns:** `protected List<ItemOverride.Predicate>`

### Predicate

```java
public Predicate(ResourceLocation p_173457_, float p_173458_)
```

**Parameters:**

- `p_173457_` (`ResourceLocation`)
- `p_173458_` (`float`)

**Returns:** `public`

### getProperty

```java
public ResourceLocation getProperty()
```

**Returns:** `public ResourceLocation`

### getValue

```java
public float getValue()
```

**Returns:** `public float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
| `Predicate` | class |  |
