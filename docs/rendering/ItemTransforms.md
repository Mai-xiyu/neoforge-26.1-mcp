# ItemTransforms

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NO_TRANSFORMS` | `ItemTransforms` |  |
| `thirdPersonLeftHand` | `ItemTransform` |  |
| `thirdPersonRightHand` | `ItemTransform` |  |
| `firstPersonLeftHand` | `ItemTransform` |  |
| `firstPersonRightHand` | `ItemTransform` |  |
| `head` | `ItemTransform` |  |
| `gui` | `ItemTransform` |  |
| `ground` | `ItemTransform` |  |
| `fixed` | `ItemTransform` |  |
| `moddedTransforms` | `com.google.common.collect.ImmutableMap<ItemDisplayContext, ItemTransform>` |  |

## Methods

### ItemTransforms

```java
private ItemTransforms()
```

**Returns:** `private`

### this

```java
 this()
```

**Returns:** ``

### ItemTransforms

```java
public ItemTransforms(ItemTransforms p_111807_)
```

**Parameters:**

- `p_111807_` (`ItemTransforms`)

**Returns:** `public`

### ItemTransforms

```java
public public ItemTransforms(ItemTransform p_111798_, ItemTransform p_111799_, ItemTransform p_111800_, ItemTransform p_111801_, ItemTransform p_111802_, ItemTransform p_111803_, ItemTransform p_111804_, ItemTransform p_111805_)
```

**Parameters:**

- `p_111798_` (`ItemTransform`)
- `p_111799_` (`ItemTransform`)
- `p_111800_` (`ItemTransform`)
- `p_111801_` (`ItemTransform`)
- `p_111802_` (`ItemTransform`)
- `p_111803_` (`ItemTransform`)
- `p_111804_` (`ItemTransform`)
- `p_111805_` (`ItemTransform`)

**Returns:** `public`

### ItemTransforms

```java
public ItemTransforms(ItemTransform p_111798_, ItemTransform p_111799_, ItemTransform p_111800_, ItemTransform p_111801_, ItemTransform p_111802_, ItemTransform p_111803_, ItemTransform p_111804_, ItemTransform p_111805_, com.google.common.collect.ImmutableMap<ItemDisplayContext, ItemTransform> moddedTransforms)
```

**Parameters:**

- `p_111798_` (`ItemTransform`)
- `p_111799_` (`ItemTransform`)
- `p_111800_` (`ItemTransform`)
- `p_111801_` (`ItemTransform`)
- `p_111802_` (`ItemTransform`)
- `p_111803_` (`ItemTransform`)
- `p_111804_` (`ItemTransform`)
- `p_111805_` (`ItemTransform`)
- `moddedTransforms` (`com.google.common.collect.ImmutableMap<ItemDisplayContext, ItemTransform>`)

**Returns:** `public`

### getTransform

```java
public ItemTransform getTransform(ItemDisplayContext p_270619_)
```

**Parameters:**

- `p_270619_` (`ItemDisplayContext`)

**Returns:** `public ItemTransform`

### hasTransform

```java
public boolean hasTransform(ItemDisplayContext p_270365_)
```

**Parameters:**

- `p_270365_` (`ItemDisplayContext`)

**Returns:** `public boolean`

### deserialize

```java
public ItemTransforms deserialize(JsonElement p_111820_, Type p_111821_, JsonDeserializationContext p_111822_)
```

**Parameters:**

- `p_111820_` (`JsonElement`)
- `p_111821_` (`Type`)
- `p_111822_` (`JsonDeserializationContext`)

**Returns:** `public ItemTransforms`

### getTransform

```java
private ItemTransform getTransform(JsonDeserializationContext p_270385_, JsonObject p_270436_, ItemDisplayContext p_270100_)
```

**Parameters:**

- `p_270385_` (`JsonDeserializationContext`)
- `p_270436_` (`JsonObject`)
- `p_270100_` (`ItemDisplayContext`)

**Returns:** `private ItemTransform`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
