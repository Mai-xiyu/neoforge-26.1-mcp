# DisplayInfo

**Package:** `net.minecraft.advancements`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<DisplayInfo>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, DisplayInfo>` |  |

## Methods

### DisplayInfo

```java
public DisplayInfo(ItemStack p_14969_, Component p_14970_, Component p_14971_, Optional<ResourceLocation> p_312452_, AdvancementType p_312497_, boolean p_14974_, boolean p_14975_, boolean p_14976_)
```

**Parameters:**

- `p_14969_` (`ItemStack`)
- `p_14970_` (`Component`)
- `p_14971_` (`Component`)
- `p_312452_` (`Optional<ResourceLocation>`)
- `p_312497_` (`AdvancementType`)
- `p_14974_` (`boolean`)
- `p_14975_` (`boolean`)
- `p_14976_` (`boolean`)

**Returns:** `public`

### setLocation

```java
public void setLocation(float p_14979_, float p_14980_)
```

**Parameters:**

- `p_14979_` (`float`)
- `p_14980_` (`float`)

**Returns:** `public void`

### getTitle

```java
public Component getTitle()
```

**Returns:** `public Component`

### getDescription

```java
public Component getDescription()
```

**Returns:** `public Component`

### getIcon

```java
public ItemStack getIcon()
```

**Returns:** `public ItemStack`

### getBackground

```java
public Optional<ResourceLocation> getBackground()
```

**Returns:** `public Optional<ResourceLocation>`

### getType

```java
public AdvancementType getType()
```

**Returns:** `public AdvancementType`

### getX

```java
public float getX()
```

**Returns:** `public float`

### getY

```java
public float getY()
```

**Returns:** `public float`

### shouldShowToast

```java
public boolean shouldShowToast()
```

**Returns:** `public boolean`

### shouldAnnounceChat

```java
public boolean shouldAnnounceChat()
```

**Returns:** `public boolean`

### isHidden

```java
public boolean isHidden()
```

**Returns:** `public boolean`

### serializeToNetwork

```java
private void serializeToNetwork(RegistryFriendlyByteBuf p_319889_)
```

**Parameters:**

- `p_319889_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### fromNetwork

```java
private static DisplayInfo fromNetwork(RegistryFriendlyByteBuf p_319903_)
```

**Parameters:**

- `p_319903_` (`RegistryFriendlyByteBuf`)

**Returns:** `private static DisplayInfo`
