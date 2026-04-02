# RealmsSelectFileToUploadScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TITLE` | `Component` |  |

## Methods

### RealmsSelectFileToUploadScreen

```java
public RealmsSelectFileToUploadScreen(RealmCreationTask p_320720_, long p_89498_, int p_89499_, RealmsResetWorldScreen p_89500_)
```

**Parameters:**

- `p_320720_` (`RealmCreationTask`)
- `p_89498_` (`long`)
- `p_89499_` (`int`)
- `p_89500_` (`RealmsResetWorldScreen`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### loadLevelList

```java
private void loadLevelList()
```

**Returns:** `private void`

### init

```java
public void init()
```

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### upload

```java
private void upload()
```

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_281244_, int p_282772_, int p_281746_, float p_281757_)
```

**Parameters:**

- `p_281244_` (`GuiGraphics`)
- `p_282772_` (`int`)
- `p_281746_` (`int`)
- `p_281757_` (`float`)

### keyPressed

```java
public boolean keyPressed(int p_89506_, int p_89507_, int p_89508_)
```

**Parameters:**

- `p_89506_` (`int`)
- `p_89507_` (`int`)
- `p_89508_` (`int`)

**Returns:** `boolean`

### gameModeName

```java
static Component gameModeName(LevelSummary p_89535_)
```

**Parameters:**

- `p_89535_` (`LevelSummary`)

**Returns:** `static Component`

### formatLastPlayed

```java
static String formatLastPlayed(LevelSummary p_89539_)
```

**Parameters:**

- `p_89539_` (`LevelSummary`)

**Returns:** `static String`

### Entry

```java
public Entry(LevelSummary p_89560_)
```

**Parameters:**

- `p_89560_` (`LevelSummary`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_282307_, int p_281918_, int p_281770_, int p_282954_, int p_281599_, int p_281852_, int p_283452_, int p_282531_, boolean p_283120_, float p_282082_)
```

**Parameters:**

- `p_282307_` (`GuiGraphics`)
- `p_281918_` (`int`)
- `p_281770_` (`int`)
- `p_282954_` (`int`)
- `p_281599_` (`int`)
- `p_281852_` (`int`)
- `p_283452_` (`int`)
- `p_282531_` (`int`)
- `p_283120_` (`boolean`)
- `p_282082_` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_89562_, double p_89563_, int p_89564_)
```

**Parameters:**

- `p_89562_` (`double`)
- `p_89563_` (`double`)
- `p_89564_` (`int`)

**Returns:** `boolean`

### renderItem

```java
protected void renderItem(GuiGraphics p_282872_, int p_283187_, int p_283611_, int p_282173_)
```

**Parameters:**

- `p_282872_` (`GuiGraphics`)
- `p_283187_` (`int`)
- `p_283611_` (`int`)
- `p_282173_` (`int`)

**Returns:** `protected void`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### WorldSelectionList

```java
public WorldSelectionList()
```

**Returns:** `public`

### addEntry

```java
public void addEntry(LevelSummary p_89588_)
```

**Parameters:**

- `p_89588_` (`LevelSummary`)

**Returns:** `public void`

### getMaxPosition

```java
public int getMaxPosition()
```

**Returns:** `int`

### setSelected

```java
public void setSelected(RealmsSelectFileToUploadScreen.Entry p_89592_)
```

**Parameters:**

- `p_89592_` (`RealmsSelectFileToUploadScreen.Entry`)

**Returns:** `public void`
