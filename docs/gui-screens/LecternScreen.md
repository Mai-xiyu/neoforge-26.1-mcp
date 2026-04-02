# LecternScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `BookViewScreen`
**Implements:** `MenuAccess<LecternMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### slotChanged

```java
public void slotChanged(AbstractContainerMenu p_99054_, int p_99055_, ItemStack p_99056_)
```

**Parameters:**

- `p_99054_` (`AbstractContainerMenu`)
- `p_99055_` (`int`)
- `p_99056_` (`ItemStack`)

### dataChanged

```java
public void dataChanged(AbstractContainerMenu p_169772_, int p_169773_, int p_169774_)
```

**Parameters:**

- `p_169772_` (`AbstractContainerMenu`)
- `p_169773_` (`int`)
- `p_169774_` (`int`)

### LecternScreen

```java
public LecternScreen(LecternMenu p_99020_, Inventory p_99021_, Component p_99022_)
```

**Parameters:**

- `p_99020_` (`LecternMenu`)
- `p_99021_` (`Inventory`)
- `p_99022_` (`Component`)

**Returns:** `public`

### getMenu

```java
public LecternMenu getMenu()
```

**Returns:** `public LecternMenu`

### init

```java
protected void init()
```

### onClose

```java
public void onClose()
```

### removed

```java
public void removed()
```

### createMenuControls

```java
protected void createMenuControls()
```

### pageBack

```java
protected void pageBack()
```

### pageForward

```java
protected void pageForward()
```

### forcePage

```java
protected boolean forcePage(int p_99031_)
```

**Parameters:**

- `p_99031_` (`int`)

**Returns:** `boolean`

### sendButtonClick

```java
private void sendButtonClick(int p_99037_)
```

**Parameters:**

- `p_99037_` (`int`)

**Returns:** `private void`

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

### bookChanged

```java
void bookChanged()
```

### pageChanged

```java
void pageChanged()
```

### closeScreen

```java
protected void closeScreen()
```
