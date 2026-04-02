# Screenshot

**Package:** `net.minecraft.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SCREENSHOT_DIR` | `String` |  |

## Methods

### grab

```java
public static void grab(File p_92290_, RenderTarget p_92293_, Consumer<Component> p_92294_)
```

**Parameters:**

- `p_92290_` (`File`)
- `p_92293_` (`RenderTarget`)
- `p_92294_` (`Consumer<Component>`)

**Returns:** `public static void`

### grab

```java
 grab()
```

**Returns:** ``

### grab

```java
public static void grab(File p_92296_, String p_92297_, RenderTarget p_92300_, Consumer<Component> p_92301_)
```

**Parameters:**

- `p_92296_` (`File`)
- `p_92297_` (`String`)
- `p_92300_` (`RenderTarget`)
- `p_92301_` (`Consumer<Component>`)

**Returns:** `public static void`

### _grab

```java
 _grab()
```

**Returns:** ``

### _grab

```java
private static void _grab(File p_92306_, String p_92307_, RenderTarget p_92310_, Consumer<Component> p_92311_)
```

**Parameters:**

- `p_92306_` (`File`)
- `p_92307_` (`String`)
- `p_92310_` (`RenderTarget`)
- `p_92311_` (`Consumer<Component>`)

**Returns:** `private static void`

### takeScreenshot

```java
public static NativeImage takeScreenshot(RenderTarget p_92282_)
```

**Parameters:**

- `p_92282_` (`RenderTarget`)

**Returns:** `public static NativeImage`

### getFile

```java
private static File getFile(File p_92288_)
```

**Parameters:**

- `p_92288_` (`File`)

**Returns:** `private static File`

### Screenshot

```java
public Screenshot(File p_168601_, int p_168602_, int p_168603_, int p_168604_)
```

**Parameters:**

- `p_168601_` (`File`)
- `p_168602_` (`int`)
- `p_168603_` (`int`)
- `p_168604_` (`int`)

**Returns:** `public`

### addRegion

```java
public void addRegion(ByteBuffer p_168610_, int p_168611_, int p_168612_, int p_168613_, int p_168614_)
```

**Parameters:**

- `p_168610_` (`ByteBuffer`)
- `p_168611_` (`int`)
- `p_168612_` (`int`)
- `p_168613_` (`int`)
- `p_168614_` (`int`)

**Returns:** `public void`

### saveRow

```java
public void saveRow()
```

**Returns:** `public void`

### close

```java
public File close()
```

**Returns:** `public File`
