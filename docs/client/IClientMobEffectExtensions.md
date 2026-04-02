# IClientMobEffectExtensions

**Package:** `net.neoforged.neoforge.client.extensions.common`
**Type:** interface
**Side:** 🖥️ Client

## Description

LogicalSide#CLIENT Client-only extensions to `MobEffect`.
@see MobEffect#initializeClient(Consumer)

## Methods

### of

```java
static IClientMobEffectExtensions of(MobEffectInstance instance)
```

**Parameters:**

- `instance` (`MobEffectInstance`)

**Returns:** `static IClientMobEffectExtensions`

### of

```java
static IClientMobEffectExtensions of(MobEffect effect)
```

**Parameters:**

- `effect` (`MobEffect`)

**Returns:** `static IClientMobEffectExtensions`

### isVisibleInInventory

```java
default boolean isVisibleInInventory(MobEffectInstance instance)
```

**Parameters:**

- `instance` (`MobEffectInstance`)

**Returns:** `boolean`

### isVisibleInGui

```java
default boolean isVisibleInGui(MobEffectInstance instance)
```

**Parameters:**

- `instance` (`MobEffectInstance`)

**Returns:** `boolean`

### renderInventoryIcon

```java
default boolean renderInventoryIcon(MobEffectInstance instance, EffectRenderingInventoryScreen<?> screen, GuiGraphics guiGraphics, int x, int y, int blitOffset)
```

**Parameters:**

- `instance` (`MobEffectInstance`)
- `screen` (`EffectRenderingInventoryScreen<?>`)
- `guiGraphics` (`GuiGraphics`)
- `x` (`int`)
- `y` (`int`)
- `blitOffset` (`int`)

**Returns:** `boolean`

### renderInventoryText

```java
default boolean renderInventoryText(MobEffectInstance instance, EffectRenderingInventoryScreen<?> screen, GuiGraphics guiGraphics, int x, int y, int blitOffset)
```

**Parameters:**

- `instance` (`MobEffectInstance`)
- `screen` (`EffectRenderingInventoryScreen<?>`)
- `guiGraphics` (`GuiGraphics`)
- `x` (`int`)
- `y` (`int`)
- `blitOffset` (`int`)

**Returns:** `boolean`

### renderGuiIcon

```java
default boolean renderGuiIcon(MobEffectInstance instance, Gui gui, GuiGraphics guiGraphics, int x, int y, float z, float alpha)
```

**Parameters:**

- `instance` (`MobEffectInstance`)
- `gui` (`Gui`)
- `guiGraphics` (`GuiGraphics`)
- `x` (`int`)
- `y` (`int`)
- `z` (`float`)
- `alpha` (`float`)

**Returns:** `boolean`
