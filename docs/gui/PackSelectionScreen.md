# PackSelectionScreen

**Package:** `net.minecraft.client.gui.screens.packs`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PackSelectionScreen

```java
public PackSelectionScreen(PackRepository p_275398_, Consumer<PackRepository> p_275659_, Path p_275522_, Component p_275337_)
```

**Parameters:**

- `p_275398_` (`PackRepository`)
- `p_275659_` (`Consumer<PackRepository>`)
- `p_275522_` (`Path`)
- `p_275337_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onClose

```java
public void onClose()
```

### closeWatcher

```java
private void closeWatcher()
```

**Returns:** `private void`

### init

```java
protected void init()
```

### repositionElements

```java
protected void repositionElements()
```

### tick

```java
public void tick()
```

### populateLists

```java
private void populateLists()
```

**Returns:** `private void`

### updateList

```java
private void updateList(TransferableSelectionList p_100014_, Stream<PackSelectionModel.Entry> p_100015_)
```

**Parameters:**

- `p_100014_` (`TransferableSelectionList`)
- `p_100015_` (`Stream<PackSelectionModel.Entry>`)

**Returns:** `private void`

### updateFocus

```java
public void updateFocus(TransferableSelectionList p_265419_)
```

**Parameters:**

- `p_265419_` (`TransferableSelectionList`)

**Returns:** `public void`

### clearSelected

```java
public void clearSelected()
```

**Returns:** `public void`

### reload

```java
private void reload()
```

**Returns:** `private void`

### copyPacks

```java
protected static void copyPacks(Minecraft p_100000_, List<Path> p_100001_, Path p_100002_)
```

**Parameters:**

- `p_100000_` (`Minecraft`)
- `p_100001_` (`List<Path>`)
- `p_100002_` (`Path`)

**Returns:** `protected static void`

### onFilesDrop

```java
public void onFilesDrop(List<Path> p_100029_)
```

**Parameters:**

- `p_100029_` (`List<Path>`)

### createZipPack

```java
protected Path createZipPack(Path p_294508_)
```

**Parameters:**

- `p_294508_` (`Path`)

**Returns:** `protected Path`

### createDirectoryPack

```java
protected Path createDirectoryPack(Path p_296022_)
```

**Parameters:**

- `p_296022_` (`Path`)

**Returns:** `protected Path`

### copyPacks

```java
 copyPacks()
```

**Returns:** ``

### extractPackNames

```java
private static Stream<String> extractPackNames(Collection<Path> p_296218_)
```

**Parameters:**

- `p_296218_` (`Collection<Path>`)

**Returns:** `private static Stream<String>`

### loadPackIcon

```java
private ResourceLocation loadPackIcon(TextureManager p_100017_, Pack p_100018_)
```

**Parameters:**

- `p_100017_` (`TextureManager`)
- `p_100018_` (`Pack`)

**Returns:** `private ResourceLocation`

### getPackIcon

```java
private ResourceLocation getPackIcon(Pack p_99990_)
```

**Parameters:**

- `p_99990_` (`Pack`)

**Returns:** `private ResourceLocation`

### Watcher

```java
public Watcher(Path p_250327_)
```

**Parameters:**

- `p_250327_` (`Path`)

**Returns:** `public`

### create

```java
public static PackSelectionScreen.Watcher create(Path p_252119_)
```

**Parameters:**

- `p_252119_` (`Path`)

**Returns:** `PackSelectionScreen.Watcher`

### watchDir

```java
private void watchDir(Path p_100050_)
```

**Parameters:**

- `p_100050_` (`Path`)

**Returns:** `private void`

### pollForChanges

```java
public boolean pollForChanges()
```

**Returns:** `public boolean`

### close

```java
public void close()
```
