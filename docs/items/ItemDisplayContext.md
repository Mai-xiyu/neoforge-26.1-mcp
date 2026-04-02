# ItemDisplayContext

**Package:** `net.minecraft.world.item`
**Type:** enum
**Implements:** `StringRepresentable`, `net.neoforged.fml.common.asm.enumextension.IExtensibleEnum`
**Annotations:** `@net`, `@net`, `@net`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ItemDisplayContext>` |  |
| `BY_ID` | `IntFunction<ItemDisplayContext>` |  |

## Methods

### FIXED

```java
, FIXED()
```

**Returns:** `,`

### ItemDisplayContext

```java
.neoforged.fml.common.asm.enumextension.ReservedConstructor
    private ItemDisplayContext(int p_270624_, String p_270851_)
```

**Parameters:**

- `p_270624_` (`int`)
- `p_270851_` (`String`)

**Returns:** `.neoforged.fml.common.asm.enumextension.ReservedConstructor
    private`

### ItemDisplayContext

```java
private ItemDisplayContext(int id, String name, .jetbrains.annotations.Nullable String fallbackName)
```

**Parameters:**

- `id` (`int`)
- `name` (`String`)
- `fallbackName` (`.jetbrains.annotations.Nullable String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### getId

```java
public byte getId()
```

**Returns:** `public byte`

### firstPerson

```java
public boolean firstPerson()
```

**Returns:** `public boolean`

### isModded

```java
public boolean isModded()
```

**Returns:** `public boolean`

### fallback

```java
.jetbrains.annotations.Nullable
    public ItemDisplayContext fallback()
```

**Returns:** `.jetbrains.annotations.Nullable
    public ItemDisplayContext`

### getExtensionInfo

```java
public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo getExtensionInfo()
```

**Returns:** `public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo`
