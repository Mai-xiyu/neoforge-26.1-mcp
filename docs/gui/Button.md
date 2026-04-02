# Button

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Extends:** `AbstractButton`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SMALL_WIDTH` | `int` |  |
| `DEFAULT_WIDTH` | `int` |  |
| `BIG_WIDTH` | `int` |  |
| `DEFAULT_HEIGHT` | `int` |  |
| `DEFAULT_SPACING` | `int` |  |
| `DEFAULT_NARRATION` | `Button.CreateNarration` |  |
| `onPress` | `Button.OnPress` |  |
| `createNarration` | `Button.CreateNarration` |  |

## Methods

### builder

```java
public static Button.Builder builder(Component p_254439_, Button.OnPress p_254567_)
```

**Parameters:**

- `p_254439_` (`Component`)
- `p_254567_` (`Button.OnPress`)

**Returns:** `public static Button.Builder`

### Button

```java
protected Button(int p_259075_, int p_259271_, int p_260232_, int p_260028_, Component p_259351_, Button.OnPress p_260152_, Button.CreateNarration p_259552_)
```

**Parameters:**

- `p_259075_` (`int`)
- `p_259271_` (`int`)
- `p_260232_` (`int`)
- `p_260028_` (`int`)
- `p_259351_` (`Component`)
- `p_260152_` (`Button.OnPress`)
- `p_259552_` (`Button.CreateNarration`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### Button

```java
protected Button(Builder builder)
```

**Parameters:**

- `builder` (`Builder`)

**Returns:** `protected`

### this

```java
 this()
```

**Returns:** ``

### setTooltip

```java
 setTooltip()
```

**Returns:** ``

### onPress

```java
public void onPress()
```

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_259196_)
```

**Parameters:**

- `p_259196_` (`NarrationElementOutput`)

### Builder

```java
public Builder(Component p_254097_, Button.OnPress p_253761_)
```

**Parameters:**

- `p_254097_` (`Component`)
- `p_253761_` (`Button.OnPress`)

**Returns:** `public`

### pos

```java
public Button.Builder pos(int p_254538_, int p_254216_)
```

**Parameters:**

- `p_254538_` (`int`)
- `p_254216_` (`int`)

**Returns:** `public Button.Builder`

### width

```java
public Button.Builder width(int p_254259_)
```

**Parameters:**

- `p_254259_` (`int`)

**Returns:** `public Button.Builder`

### size

```java
public Button.Builder size(int p_253727_, int p_254457_)
```

**Parameters:**

- `p_253727_` (`int`)
- `p_254457_` (`int`)

**Returns:** `public Button.Builder`

### bounds

```java
public Button.Builder bounds(int p_254166_, int p_253872_, int p_254522_, int p_253985_)
```

**Parameters:**

- `p_254166_` (`int`)
- `p_253872_` (`int`)
- `p_254522_` (`int`)
- `p_253985_` (`int`)

**Returns:** `public Button.Builder`

### tooltip

```java
public Button.Builder tooltip(Tooltip p_259609_)
```

**Parameters:**

- `p_259609_` (`Tooltip`)

**Returns:** `public Button.Builder`

### createNarration

```java
public Button.Builder createNarration(Button.CreateNarration p_253638_)
```

**Parameters:**

- `p_253638_` (`Button.CreateNarration`)

**Returns:** `public Button.Builder`

### build

```java
public Button build()
```

**Returns:** `public Button`

### build

```java
return build()
```

**Returns:** `return`

### build

```java
public Button build(java.util.function.Function<Builder, Button> builder)
```

**Parameters:**

- `builder` (`java.util.function.Function<Builder, Button>`)

**Returns:** `public Button`

### createNarrationMessage

```java
MutableComponent createNarrationMessage(Supplier<MutableComponent> p_253695_)
```

**Parameters:**

- `p_253695_` (`Supplier<MutableComponent>`)

**Returns:** `MutableComponent`

### onPress

```java
void onPress(Button p_93751_)
```

**Parameters:**

- `p_93751_` (`Button`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `CreateNarration` | interface |  |
| `OnPress` | interface |  |
