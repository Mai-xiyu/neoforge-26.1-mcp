# ExperimentsScreen

**Package:** `net.minecraft.client.gui.screens.worldselection`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TITLE` | `Component` |  |
| `INFO` | `Component` |  |
| `MAIN_CONTENT_WIDTH` | `int` |  |
| `layout` | `HeaderAndFooterLayout` |  |
| `packs` | `Object2BooleanMap<Pack>` |  |

## Methods

### ExperimentsScreen

```java
public ExperimentsScreen(Screen p_270165_, PackRepository p_270308_, Consumer<PackRepository> p_270392_)
```

**Parameters:**

- `p_270165_` (`Screen`)
- `p_270308_` (`PackRepository`)
- `p_270392_` (`Consumer<PackRepository>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### getHumanReadableTitle

```java
protected static Component getHumanReadableTitle(Pack p_270861_)
```

**Parameters:**

- `p_270861_` (`Pack`)

**Returns:** `protected static Component`

### repositionElements

```java
protected void repositionElements()
```

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### onClose

```java
public void onClose()
```

### onDone

```java
protected void onDone()
```

**Returns:** `protected void`
