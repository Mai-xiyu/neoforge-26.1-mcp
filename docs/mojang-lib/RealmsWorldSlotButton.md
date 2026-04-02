# RealmsWorldSlotButton

**Package:** `com.mojang.realmsclient.gui`
**Type:** class
**Extends:** `Button`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY_SLOT_LOCATION` | `ResourceLocation` |  |
| `DEFAULT_WORLD_SLOT_1` | `ResourceLocation` |  |
| `DEFAULT_WORLD_SLOT_2` | `ResourceLocation` |  |
| `DEFAULT_WORLD_SLOT_3` | `ResourceLocation` |  |

## Methods

### RealmsWorldSlotButton

```java
public RealmsWorldSlotButton(int p_87929_, int p_87930_, int p_87931_, int p_87932_, int p_87935_, Button.OnPress p_87936_)
```

**Parameters:**

- `p_87929_` (`int`)
- `p_87930_` (`int`)
- `p_87931_` (`int`)
- `p_87932_` (`int`)
- `p_87935_` (`int`)
- `p_87936_` (`Button.OnPress`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getState

```java
public RealmsWorldSlotButton.State getState()
```

**Returns:** `RealmsWorldSlotButton.State`

### setServerData

```java
public void setServerData(RealmsServer p_307266_)
```

**Parameters:**

- `p_307266_` (`RealmsServer`)

**Returns:** `public void`

### setTooltipAndNarration

```java
private void setTooltipAndNarration(RealmsWorldSlotButton.State p_307359_, String p_307244_)
```

**Parameters:**

- `p_307359_` (`RealmsWorldSlotButton.State`)
- `p_307244_` (`String`)

**Returns:** `private void`

### getAction

```java
static RealmsWorldSlotButton.Action getAction(RealmsServer p_87960_, boolean p_87961_, boolean p_87962_)
```

**Parameters:**

- `p_87960_` (`RealmsServer`)
- `p_87961_` (`boolean`)
- `p_87962_` (`boolean`)

**Returns:** `static RealmsWorldSlotButton.Action`

### renderWidget

```java
public void renderWidget(GuiGraphics p_282947_, int p_87965_, int p_87966_, float p_87967_)
```

**Parameters:**

- `p_282947_` (`GuiGraphics`)
- `p_87965_` (`int`)
- `p_87966_` (`int`)
- `p_87967_` (`float`)

### State

```java
public State(RealmsServer p_307209_, int p_307377_)
```

**Parameters:**

- `p_307209_` (`RealmsServer`)
- `p_307377_` (`int`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | enum |  |
| `State` | class |  |
