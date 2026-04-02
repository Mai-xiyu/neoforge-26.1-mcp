# RealmsPendingInvitesScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsPendingInvitesScreen

```java
public RealmsPendingInvitesScreen(Screen p_279260_, Component p_279122_)
```

**Parameters:**

- `p_279260_` (`Screen`)
- `p_279122_` (`Component`)

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

### onClose

```java
public void onClose()
```

### handleInvitation

```java
void handleInvitation(int p_294942_, boolean p_294885_)
```

**Parameters:**

- `p_294942_` (`int`)
- `p_294885_` (`boolean`)

### render

```java
public void render(GuiGraphics p_282787_, int p_88900_, int p_88901_, float p_88902_)
```

**Parameters:**

- `p_282787_` (`GuiGraphics`)
- `p_88900_` (`int`)
- `p_88901_` (`int`)
- `p_88902_` (`float`)

### updateButtonStates

```java
void updateButtonStates()
```

### shouldAcceptAndRejectButtonBeVisible

```java
private boolean shouldAcceptAndRejectButtonBeVisible(int p_88963_)
```

**Parameters:**

- `p_88963_` (`int`)

**Returns:** `private boolean`

### Entry

```java
 Entry(PendingInvite p_88996_)
```

**Parameters:**

- `p_88996_` (`PendingInvite`)

**Returns:** ``

### render

```java
public void render(GuiGraphics p_281445_, int p_281806_, int p_283610_, int p_282909_, int p_281705_, int p_281977_, int p_282983_, int p_281655_, boolean p_282274_, float p_282862_)
```

**Parameters:**

- `p_281445_` (`GuiGraphics`)
- `p_281806_` (`int`)
- `p_283610_` (`int`)
- `p_282909_` (`int`)
- `p_281705_` (`int`)
- `p_281977_` (`int`)
- `p_282983_` (`int`)
- `p_281655_` (`int`)
- `p_282274_` (`boolean`)
- `p_282862_` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_88998_, double p_88999_, int p_89000_)
```

**Parameters:**

- `p_88998_` (`double`)
- `p_88999_` (`double`)
- `p_89000_` (`int`)

**Returns:** `boolean`

### renderPendingInvitationItem

```java
private void renderPendingInvitationItem(GuiGraphics p_281764_, PendingInvite p_282748_, int p_282810_, int p_282994_, int p_283639_, int p_283659_)
```

**Parameters:**

- `p_281764_` (`GuiGraphics`)
- `p_282748_` (`PendingInvite`)
- `p_282810_` (`int`)
- `p_282994_` (`int`)
- `p_283639_` (`int`)
- `p_283659_` (`int`)

**Returns:** `private void`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### AcceptRowButton

```java
 AcceptRowButton()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### draw

```java
protected void draw(GuiGraphics p_282151_, int p_283695_, int p_282436_, boolean p_282168_)
```

**Parameters:**

- `p_282151_` (`GuiGraphics`)
- `p_283695_` (`int`)
- `p_282436_` (`int`)
- `p_282168_` (`boolean`)

### onClick

```java
public void onClick(int p_89029_)
```

**Parameters:**

- `p_89029_` (`int`)

### RejectRowButton

```java
 RejectRowButton()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### draw

```java
protected void draw(GuiGraphics p_282457_, int p_281421_, int p_281260_, boolean p_281476_)
```

**Parameters:**

- `p_282457_` (`GuiGraphics`)
- `p_281421_` (`int`)
- `p_281260_` (`int`)
- `p_281476_` (`boolean`)

### onClick

```java
public void onClick(int p_89039_)
```

**Parameters:**

- `p_89039_` (`int`)

### PendingInvitationSelectionList

```java
public PendingInvitationSelectionList()
```

**Returns:** `public`

### super

```java
 super(RealmsPendingInvitesScreen.this.height - 72)
```

**Parameters:**

- `72` (`RealmsPendingInvitesScreen.this.height -`)

**Returns:** ``

### removeAtIndex

```java
public void removeAtIndex(int p_89058_)
```

**Parameters:**

- `p_89058_` (`int`)

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

### selectItem

```java
public void selectItem(int p_89049_)
```

**Parameters:**

- `p_89049_` (`int`)

### selectInviteListItem

```java
public void selectInviteListItem(int p_89061_)
```

**Parameters:**

- `p_89061_` (`int`)

**Returns:** `public void`

### setSelected

```java
public void setSelected(RealmsPendingInvitesScreen.Entry p_89053_)
```

**Parameters:**

- `p_89053_` (`RealmsPendingInvitesScreen.Entry`)

**Returns:** `public void`
