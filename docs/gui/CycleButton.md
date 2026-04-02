# CycleButton

**Package:** `net.minecraft.client.gui.components`
**Type:** class<T>
**Extends:** `AbstractButton`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_ALT_LIST_SELECTOR` | `BooleanSupplier` |  |

## Methods

### CycleButton

```java
 CycleButton(int p_232484_, int p_232485_, int p_232486_, int p_232487_, Component p_232488_, Component p_232489_, int p_232490_, T p_232491_, CycleButton.ValueListSupplier<T> p_232492_, Function<T, Component> p_232493_, Function<CycleButton<T>, MutableComponent> p_232494_, CycleButton.OnValueChange<T> p_232495_, OptionInstance.TooltipSupplier<T> p_232496_, boolean p_232497_)
```

**Parameters:**

- `p_232484_` (`int`)
- `p_232485_` (`int`)
- `p_232486_` (`int`)
- `p_232487_` (`int`)
- `p_232488_` (`Component`)
- `p_232489_` (`Component`)
- `p_232490_` (`int`)
- `p_232491_` (`T`)
- `p_232492_` (`CycleButton.ValueListSupplier<T>`)
- `p_232493_` (`Function<T, Component>`)
- `p_232494_` (`Function<CycleButton<T>, MutableComponent>`)
- `p_232495_` (`CycleButton.OnValueChange<T>`)
- `p_232496_` (`OptionInstance.TooltipSupplier<T>`)
- `p_232497_` (`boolean`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### updateTooltip

```java
private void updateTooltip()
```

**Returns:** `private void`

### onPress

```java
public void onPress()
```

### cycleValue

```java
private void cycleValue(int p_168909_)
```

**Parameters:**

- `p_168909_` (`int`)

**Returns:** `private void`

### getCycledValue

```java
private T getCycledValue(int p_168915_)
```

**Parameters:**

- `p_168915_` (`int`)

**Returns:** `private T`

### mouseScrolled

```java
public boolean mouseScrolled(double p_168885_, double p_168886_, double p_168887_, double p_294881_)
```

**Parameters:**

- `p_168885_` (`double`)
- `p_168886_` (`double`)
- `p_168887_` (`double`)
- `p_294881_` (`double`)

**Returns:** `boolean`

### setValue

```java
public void setValue(T p_168893_)
```

**Parameters:**

- `p_168893_` (`T`)

**Returns:** `public void`

### updateValue

```java
private void updateValue(T p_168906_)
```

**Parameters:**

- `p_168906_` (`T`)

**Returns:** `private void`

### createLabelForValue

```java
private Component createLabelForValue(T p_168911_)
```

**Parameters:**

- `p_168911_` (`T`)

**Returns:** `private Component`

### createFullName

```java
private MutableComponent createFullName(T p_168913_)
```

**Parameters:**

- `p_168913_` (`T`)

**Returns:** `private MutableComponent`

### getValue

```java
public T getValue()
```

**Returns:** `public T`

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_168889_)
```

**Parameters:**

- `p_168889_` (`NarrationElementOutput`)

### createDefaultNarrationMessage

```java
public MutableComponent createDefaultNarrationMessage()
```

**Returns:** `public MutableComponent`

### builder

```java
<T> public static <T> CycleButton.Builder<T> builder(Function<T, Component> p_168895_)
```

**Parameters:**

- `p_168895_` (`Function<T, Component>`)

**Returns:** `public static <T> CycleButton.Builder<T>`

### booleanBuilder

```java
public static CycleButton.Builder<Boolean> booleanBuilder(Component p_168897_, Component p_168898_)
```

**Parameters:**

- `p_168897_` (`Component`)
- `p_168898_` (`Component`)

**Returns:** `public static CycleButton.Builder<Boolean>`

### onOffBuilder

```java
public static CycleButton.Builder<Boolean> onOffBuilder()
```

**Returns:** `public static CycleButton.Builder<Boolean>`

### onOffBuilder

```java
public static CycleButton.Builder<Boolean> onOffBuilder(boolean p_168917_)
```

**Parameters:**

- `p_168917_` (`boolean`)

**Returns:** `public static CycleButton.Builder<Boolean>`

### Builder

```java
public Builder(Function<T, Component> p_168928_)
```

**Parameters:**

- `p_168928_` (`Function<T, Component>`)

**Returns:** `public`

### withValues

```java
public CycleButton.Builder<T> withValues(Collection<T> p_232503_)
```

**Parameters:**

- `p_232503_` (`Collection<T>`)

**Returns:** `public CycleButton.Builder<T>`

### withValues

```java
public final CycleButton.Builder<T> withValues(T[]... p_168962_)
```

**Parameters:**

- `p_168962_` (`T[]...`)

**Returns:** `CycleButton.Builder<T>`

### withValues

```java
public CycleButton.Builder<T> withValues(List<T> p_168953_, List<T> p_168954_)
```

**Parameters:**

- `p_168953_` (`List<T>`)
- `p_168954_` (`List<T>`)

**Returns:** `public CycleButton.Builder<T>`

### withValues

```java
public CycleButton.Builder<T> withValues(BooleanSupplier p_168956_, List<T> p_168957_, List<T> p_168958_)
```

**Parameters:**

- `p_168956_` (`BooleanSupplier`)
- `p_168957_` (`List<T>`)
- `p_168958_` (`List<T>`)

**Returns:** `public CycleButton.Builder<T>`

### withValues

```java
public CycleButton.Builder<T> withValues(CycleButton.ValueListSupplier<T> p_232501_)
```

**Parameters:**

- `p_232501_` (`CycleButton.ValueListSupplier<T>`)

**Returns:** `public CycleButton.Builder<T>`

### withTooltip

```java
public CycleButton.Builder<T> withTooltip(OptionInstance.TooltipSupplier<T> p_232499_)
```

**Parameters:**

- `p_232499_` (`OptionInstance.TooltipSupplier<T>`)

**Returns:** `public CycleButton.Builder<T>`

### withInitialValue

```java
public CycleButton.Builder<T> withInitialValue(T p_168949_)
```

**Parameters:**

- `p_168949_` (`T`)

**Returns:** `public CycleButton.Builder<T>`

### withCustomNarration

```java
public CycleButton.Builder<T> withCustomNarration(Function<CycleButton<T>, MutableComponent> p_168960_)
```

**Parameters:**

- `p_168960_` (`Function<CycleButton<T>, MutableComponent>`)

**Returns:** `public CycleButton.Builder<T>`

### displayOnlyValue

```java
public CycleButton.Builder<T> displayOnlyValue()
```

**Returns:** `public CycleButton.Builder<T>`

### create

```java
public CycleButton<T> create(Component p_332061_, CycleButton.OnValueChange<T> p_332055_)
```

**Parameters:**

- `p_332061_` (`Component`)
- `p_332055_` (`CycleButton.OnValueChange<T>`)

**Returns:** `public CycleButton<T>`

### create

```java
public CycleButton<T> create(int p_168931_, int p_168932_, int p_168933_, int p_168934_, Component p_168935_)
```

**Parameters:**

- `p_168931_` (`int`)
- `p_168932_` (`int`)
- `p_168933_` (`int`)
- `p_168934_` (`int`)
- `p_168935_` (`Component`)

**Returns:** `public CycleButton<T>`

### create

```java
public CycleButton<T> create(int p_168937_, int p_168938_, int p_168939_, int p_168940_, Component p_168941_, CycleButton.OnValueChange<T> p_168942_)
```

**Parameters:**

- `p_168937_` (`int`)
- `p_168938_` (`int`)
- `p_168939_` (`int`)
- `p_168940_` (`int`)
- `p_168941_` (`Component`)
- `p_168942_` (`CycleButton.OnValueChange<T>`)

**Returns:** `public CycleButton<T>`

### IllegalStateException

```java
throw new IllegalStateException("No values for cycle button")
```

**Parameters:**

- `button"` (`"No values for cycle`)

**Returns:** `throw new`

### onValueChange

```java
void onValueChange(CycleButton<T> p_168966_, T p_168967_)
```

**Parameters:**

- `p_168966_` (`CycleButton<T>`)
- `p_168967_` (`T`)

### getSelectedList

```java
List<T> getSelectedList()
```

**Returns:** `List<T>`

### getDefaultList

```java
List<T> getDefaultList()
```

**Returns:** `List<T>`

### create

```java
<T> static <T> CycleButton.ValueListSupplier<T> create(Collection<T> p_232505_)
```

**Parameters:**

- `p_232505_` (`Collection<T>`)

**Returns:** `static <T> CycleButton.ValueListSupplier<T>`

### getSelectedList

```java
public List<T> getSelectedList()
```

**Returns:** `List<T>`

### getDefaultList

```java
public List<T> getDefaultList()
```

**Returns:** `List<T>`

### create

```java
<T> static <T> CycleButton.ValueListSupplier<T> create(BooleanSupplier p_168971_, List<T> p_168972_, List<T> p_168973_)
```

**Parameters:**

- `p_168971_` (`BooleanSupplier`)
- `p_168972_` (`List<T>`)
- `p_168973_` (`List<T>`)

**Returns:** `static <T> CycleButton.ValueListSupplier<T>`

### getSelectedList

```java
public List<T> getSelectedList()
```

**Returns:** `List<T>`

### getDefaultList

```java
public List<T> getDefaultList()
```

**Returns:** `List<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `OnValueChange` | interface |  |
| `ValueListSupplier` | interface |  |
