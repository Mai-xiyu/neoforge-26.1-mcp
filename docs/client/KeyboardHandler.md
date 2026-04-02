# KeyboardHandler

**Package:** `net.minecraft.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEBUG_CRASH_TIME` | `int` |  |

## Methods

### KeyboardHandler

```java
public KeyboardHandler(Minecraft p_90875_)
```

**Parameters:**

- `p_90875_` (`Minecraft`)

**Returns:** `public`

### handleChunkDebugKeys

```java
private boolean handleChunkDebugKeys(int p_167814_)
```

**Parameters:**

- `p_167814_` (`int`)

**Returns:** `private boolean`

### debugComponent

```java
private void debugComponent(ChatFormatting p_167825_, Component p_167826_)
```

**Parameters:**

- `p_167825_` (`ChatFormatting`)
- `p_167826_` (`Component`)

**Returns:** `private void`

### debugFeedbackComponent

```java
private void debugFeedbackComponent(Component p_167823_)
```

**Parameters:**

- `p_167823_` (`Component`)

**Returns:** `private void`

### debugFeedbackTranslated

```java
private void debugFeedbackTranslated(String p_90914_, Object[]... p_90915_)
```

**Parameters:**

- `p_90914_` (`String`)
- `p_90915_` (`Object[]...`)

**Returns:** `private void`

### debugWarningTranslated

```java
private void debugWarningTranslated(String p_90949_, Object[]... p_90950_)
```

**Parameters:**

- `p_90949_` (`String`)
- `p_90950_` (`Object[]...`)

**Returns:** `private void`

### debugFeedback

```java
private void debugFeedback(String p_167838_, Object[]... p_167839_)
```

**Parameters:**

- `p_167838_` (`String`)
- `p_167839_` (`Object[]...`)

**Returns:** `private void`

### handleDebugKeys

```java
private boolean handleDebugKeys(int p_90933_)
```

**Parameters:**

- `p_90933_` (`int`)

**Returns:** `private boolean`

### copyRecreateCommand

```java
private void copyRecreateCommand(boolean p_90929_, boolean p_90930_)
```

**Parameters:**

- `p_90929_` (`boolean`)
- `p_90930_` (`boolean`)

**Returns:** `private void`

### copyCreateBlockCommand

```java
private void copyCreateBlockCommand(BlockState p_90900_, BlockPos p_90901_, CompoundTag p_90902_)
```

**Parameters:**

- `p_90900_` (`BlockState`)
- `p_90901_` (`BlockPos`)
- `p_90902_` (`CompoundTag`)

**Returns:** `private void`

### copyCreateEntityCommand

```java
private void copyCreateEntityCommand(ResourceLocation p_90923_, Vec3 p_90924_, CompoundTag p_90925_)
```

**Parameters:**

- `p_90923_` (`ResourceLocation`)
- `p_90924_` (`Vec3`)
- `p_90925_` (`CompoundTag`)

**Returns:** `private void`

### keyPress

```java
public void keyPress(long p_90894_, int p_90895_, int p_90896_, int p_90897_, int p_90898_)
```

**Parameters:**

- `p_90894_` (`long`)
- `p_90895_` (`int`)
- `p_90896_` (`int`)
- `p_90897_` (`int`)
- `p_90898_` (`int`)

**Returns:** `public void`

### charTyped

```java
private void charTyped(long p_90890_, int p_90891_, int p_90892_)
```

**Parameters:**

- `p_90890_` (`long`)
- `p_90891_` (`int`)
- `p_90892_` (`int`)

**Returns:** `private void`

### setup

```java
public void setup(long p_90888_)
```

**Parameters:**

- `p_90888_` (`long`)

**Returns:** `public void`

### getClipboard

```java
public String getClipboard()
```

**Returns:** `public String`

### setClipboard

```java
public void setClipboard(String p_90912_)
```

**Parameters:**

- `p_90912_` (`String`)

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`
