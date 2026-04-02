# RealmsBackupScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsBackupScreen

```java
public RealmsBackupScreen(RealmsConfigureWorldScreen p_88126_, RealmsServer p_88127_, int p_88128_)
```

**Parameters:**

- `p_88126_` (`RealmsConfigureWorldScreen`)
- `p_88127_` (`RealmsServer`)
- `p_88128_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
public void init()
```

### render

```java
public void render(GuiGraphics p_283405_, int p_282020_, int p_282404_, float p_281280_)
```

**Parameters:**

- `p_283405_` (`GuiGraphics`)
- `p_282020_` (`int`)
- `p_282404_` (`int`)
- `p_281280_` (`float`)

### repositionElements

```java
protected void repositionElements()
```

### fetchRealmsBackups

```java
private void fetchRealmsBackups()
```

**Returns:** `private void`

### run

```java
public void run()
```

### onClose

```java
public void onClose()
```

### downloadClicked

```java
private void downloadClicked()
```

**Returns:** `private void`

### BackupObjectSelectionList

```java
public BackupObjectSelectionList()
```

**Returns:** `public`

### addEntry

```java
public void addEntry(Backup p_88235_)
```

**Parameters:**

- `p_88235_` (`Backup`)

**Returns:** `public void`

### getMaxPosition

```java
public int getMaxPosition()
```

**Returns:** `int`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### Entry

```java
public Entry(Backup p_88250_)
```

**Parameters:**

- `p_88250_` (`Backup`)

**Returns:** `public`

### populateChangeList

```java
private void populateChangeList(Backup p_279365_)
```

**Parameters:**

- `p_279365_` (`Backup`)

**Returns:** `private void`

### addToChangeList

```java
private void addToChangeList(String p_279195_)
```

**Parameters:**

- `p_279195_` (`String`)

**Returns:** `private void`

### getShortBackupDate

```java
private String getShortBackupDate()
```

**Returns:** `private String`

### restoreClicked

```java
private void restoreClicked()
```

**Returns:** `private void`

### children

```java
public List<? extends GuiEventListener> children()
```

**Returns:** `List<? extends GuiEventListener>`

### narratables

```java
public List<? extends NarratableEntry> narratables()
```

**Returns:** `List<? extends NarratableEntry>`

### render

```java
public void render(GuiGraphics p_281408_, int p_281974_, int p_282495_, int p_282463_, int p_281562_, int p_282782_, int p_281638_, int p_283190_, boolean p_283105_, float p_282066_)
```

**Parameters:**

- `p_281408_` (`GuiGraphics`)
- `p_281974_` (`int`)
- `p_282495_` (`int`)
- `p_282463_` (`int`)
- `p_281562_` (`int`)
- `p_282782_` (`int`)
- `p_281638_` (`int`)
- `p_283190_` (`int`)
- `p_283105_` (`boolean`)
- `p_282066_` (`float`)

### getMediumDatePresentation

```java
private String getMediumDatePresentation(Date p_88276_)
```

**Parameters:**

- `p_88276_` (`Date`)

**Returns:** `private String`
