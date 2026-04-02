# RealmsBackupInfoScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsBackupInfoScreen

```java
public RealmsBackupInfoScreen(Screen p_88048_, Backup p_88049_)
```

**Parameters:**

- `p_88048_` (`Screen`)
- `p_88049_` (`Backup`)

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

### repositionElements

```java
protected void repositionElements()
```

### onClose

```java
public void onClose()
```

### checkForSpecificMetadata

```java
Component checkForSpecificMetadata(String p_88068_, String p_88069_)
```

**Parameters:**

- `p_88068_` (`String`)
- `p_88069_` (`String`)

**Returns:** `Component`

### gameDifficultyMetadata

```java
private Component gameDifficultyMetadata(String p_88074_)
```

**Parameters:**

- `p_88074_` (`String`)

**Returns:** `private Component`

### gameModeMetadata

```java
private Component gameModeMetadata(String p_88076_)
```

**Parameters:**

- `p_88076_` (`String`)

**Returns:** `private Component`

### BackupInfoList

```java
public BackupInfoList(Minecraft p_88082_)
```

**Parameters:**

- `p_88082_` (`Minecraft`)

**Returns:** `public`

### BackupInfoListEntry

```java
public BackupInfoListEntry(String p_88091_, String p_88092_)
```

**Parameters:**

- `p_88091_` (`String`)
- `p_88092_` (`String`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_282911_, int p_281482_, int p_283643_, int p_282795_, int p_283291_, int p_282540_, int p_282181_, int p_283535_, boolean p_281916_, float p_282116_)
```

**Parameters:**

- `p_282911_` (`GuiGraphics`)
- `p_281482_` (`int`)
- `p_283643_` (`int`)
- `p_282795_` (`int`)
- `p_283291_` (`int`)
- `p_282540_` (`int`)
- `p_282181_` (`int`)
- `p_283535_` (`int`)
- `p_281916_` (`boolean`)
- `p_282116_` (`float`)

### translateKey

```java
private Component translateKey(String p_287652_)
```

**Parameters:**

- `p_287652_` (`String`)

**Returns:** `private Component`

### mouseClicked

```java
public boolean mouseClicked(double p_308886_, double p_309052_, int p_309158_)
```

**Parameters:**

- `p_308886_` (`double`)
- `p_309052_` (`double`)
- `p_309158_` (`int`)

**Returns:** `boolean`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`
