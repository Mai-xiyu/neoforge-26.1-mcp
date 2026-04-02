# ComponentPath

**Package:** `net.minecraft.client.gui`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### leaf

```java
static ComponentPath leaf(GuiEventListener p_265344_)
```

**Parameters:**

- `p_265344_` (`GuiEventListener`)

**Returns:** `static ComponentPath`

### path

```java
static ComponentPath path(ContainerEventHandler p_265254_, ComponentPath p_265405_)
```

**Parameters:**

- `p_265254_` (`ContainerEventHandler`)
- `p_265405_` (`ComponentPath`)

**Returns:** `ComponentPath`

### path

```java
static ComponentPath path(GuiEventListener p_265555_, ContainerEventHandler[]... p_265487_)
```

**Parameters:**

- `p_265555_` (`GuiEventListener`)
- `p_265487_` (`ContainerEventHandler[]...`)

**Returns:** `static ComponentPath`

### component

```java
GuiEventListener component()
```

**Returns:** `GuiEventListener`

### applyFocus

```java
void applyFocus(boolean p_265077_)
```

**Parameters:**

- `p_265077_` (`boolean`)

### applyFocus

```java
public void applyFocus(boolean p_265248_)
```

**Parameters:**

- `p_265248_` (`boolean`)

### applyFocus

```java
public void applyFocus(boolean p_265230_)
```

**Parameters:**

- `p_265230_` (`boolean`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Leaf` | record |  |
| `Path` | record |  |
