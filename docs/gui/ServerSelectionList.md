# ServerSelectionList

**Package:** `net.minecraft.client.gui.screens.multiplayer`
**Type:** class
**Extends:** `ObjectSelectionList<ServerSelectionList.Entry>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ServerSelectionList

```java
public ServerSelectionList(JoinMultiplayerScreen p_99771_, Minecraft p_99772_, int p_99773_, int p_99774_, int p_99775_, int p_99776_)
```

**Parameters:**

- `p_99771_` (`JoinMultiplayerScreen`)
- `p_99772_` (`Minecraft`)
- `p_99773_` (`int`)
- `p_99774_` (`int`)
- `p_99775_` (`int`)
- `p_99776_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### refreshEntries

```java
private void refreshEntries()
```

**Returns:** `private void`

### setSelected

```java
public void setSelected(ServerSelectionList.Entry p_99790_)
```

**Parameters:**

- `p_99790_` (`ServerSelectionList.Entry`)

**Returns:** `public void`

### keyPressed

```java
public boolean keyPressed(int p_99782_, int p_99783_, int p_99784_)
```

**Parameters:**

- `p_99782_` (`int`)
- `p_99783_` (`int`)
- `p_99784_` (`int`)

**Returns:** `boolean`

### updateOnlineServers

```java
public void updateOnlineServers(ServerList p_99798_)
```

**Parameters:**

- `p_99798_` (`ServerList`)

**Returns:** `public void`

### updateNetworkServers

```java
public void updateNetworkServers(List<LanServer> p_99800_)
```

**Parameters:**

- `p_99800_` (`List<LanServer>`)

**Returns:** `public void`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### removed

```java
public void removed()
```

**Returns:** `public void`

### close

```java
public void close()
```

### render

```java
public void render(GuiGraphics p_281475_, int p_282477_, int p_282819_, int p_282001_, int p_281911_, int p_283126_, int p_282303_, int p_281998_, boolean p_282625_, float p_281811_)
```

**Parameters:**

- `p_281475_` (`GuiGraphics`)
- `p_282477_` (`int`)
- `p_282819_` (`int`)
- `p_282001_` (`int`)
- `p_281911_` (`int`)
- `p_283126_` (`int`)
- `p_282303_` (`int`)
- `p_281998_` (`int`)
- `p_282625_` (`boolean`)
- `p_281811_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### NetworkServerEntry

```java
protected NetworkServerEntry(JoinMultiplayerScreen p_99836_, LanServer p_99837_)
```

**Parameters:**

- `p_99836_` (`JoinMultiplayerScreen`)
- `p_99837_` (`LanServer`)

**Returns:** `protected`

### render

```java
public void render(GuiGraphics p_282600_, int p_282649_, int p_283641_, int p_282277_, int p_283034_, int p_281533_, int p_282746_, int p_281454_, boolean p_283673_, float p_282694_)
```

**Parameters:**

- `p_282600_` (`GuiGraphics`)
- `p_282649_` (`int`)
- `p_283641_` (`int`)
- `p_282277_` (`int`)
- `p_283034_` (`int`)
- `p_281533_` (`int`)
- `p_282746_` (`int`)
- `p_281454_` (`int`)
- `p_283673_` (`boolean`)
- `p_282694_` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_99840_, double p_99841_, int p_99842_)
```

**Parameters:**

- `p_99840_` (`double`)
- `p_99841_` (`double`)
- `p_99842_` (`int`)

**Returns:** `boolean`

### getServerData

```java
public LanServer getServerData()
```

**Returns:** `public LanServer`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### getServerNarration

```java
public Component getServerNarration()
```

**Returns:** `public Component`

### OnlineServerEntry

```java
protected OnlineServerEntry(JoinMultiplayerScreen p_99864_, ServerData p_99865_)
```

**Parameters:**

- `p_99864_` (`JoinMultiplayerScreen`)
- `p_99865_` (`ServerData`)

**Returns:** `protected`

### render

```java
public void render(GuiGraphics p_281406_, int p_281506_, int p_282921_, int p_281363_, int p_283596_, int p_281630_, int p_283567_, int p_282864_, boolean p_282999_, float p_281423_)
```

**Parameters:**

- `p_281406_` (`GuiGraphics`)
- `p_281506_` (`int`)
- `p_282921_` (`int`)
- `p_281363_` (`int`)
- `p_283596_` (`int`)
- `p_281630_` (`int`)
- `p_283567_` (`int`)
- `p_282864_` (`int`)
- `p_282999_` (`boolean`)
- `p_281423_` (`float`)

### refreshStatus

```java
private void refreshStatus()
```

**Returns:** `private void`

### updateServerList

```java
public void updateServerList()
```

**Returns:** `public void`

### drawIcon

```java
protected void drawIcon(GuiGraphics p_281338_, int p_283001_, int p_282834_, ResourceLocation p_282534_)
```

**Parameters:**

- `p_281338_` (`GuiGraphics`)
- `p_283001_` (`int`)
- `p_282834_` (`int`)
- `p_282534_` (`ResourceLocation`)

**Returns:** `protected void`

### canJoin

```java
private boolean canJoin()
```

**Returns:** `private boolean`

### uploadServerIcon

```java
private boolean uploadServerIcon(byte[] p_273176_)
```

**Parameters:**

- `p_273176_` (`byte[]`)

**Returns:** `private boolean`

### keyPressed

```java
public boolean keyPressed(int p_99875_, int p_99876_, int p_99877_)
```

**Parameters:**

- `p_99875_` (`int`)
- `p_99876_` (`int`)
- `p_99877_` (`int`)

**Returns:** `boolean`

### swap

```java
private void swap(int p_99872_, int p_99873_)
```

**Parameters:**

- `p_99872_` (`int`)
- `p_99873_` (`int`)

**Returns:** `private void`

### mouseClicked

```java
public boolean mouseClicked(double p_99868_, double p_99869_, int p_99870_)
```

**Parameters:**

- `p_99868_` (`double`)
- `p_99869_` (`double`)
- `p_99870_` (`int`)

**Returns:** `boolean`

### getServerData

```java
public ServerData getServerData()
```

**Returns:** `public ServerData`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### close

```java
public void close()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LANHeader` | class |  |
| `NetworkServerEntry` | class |  |
| `OnlineServerEntry` | class |  |
