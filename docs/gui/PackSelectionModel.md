# PackSelectionModel

**Package:** `net.minecraft.client.gui.screens.packs`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PackSelectionModel

```java
public PackSelectionModel(Runnable p_99909_, Function<Pack, ResourceLocation> p_99910_, PackRepository p_99911_, Consumer<PackRepository> p_99912_)
```

**Parameters:**

- `p_99909_` (`Runnable`)
- `p_99910_` (`Function<Pack, ResourceLocation>`)
- `p_99911_` (`PackRepository`)
- `p_99912_` (`Consumer<PackRepository>`)

**Returns:** `public`

### getUnselected

```java
public Stream<PackSelectionModel.Entry> getUnselected()
```

**Returns:** `public Stream<PackSelectionModel.Entry>`

### getSelected

```java
public Stream<PackSelectionModel.Entry> getSelected()
```

**Returns:** `public Stream<PackSelectionModel.Entry>`

### updateRepoSelectedList

```java
void updateRepoSelectedList()
```

### commit

```java
public void commit()
```

**Returns:** `public void`

### findNewPacks

```java
public void findNewPacks()
```

**Returns:** `public void`

### getIconTexture

```java
ResourceLocation getIconTexture()
```

**Returns:** `ResourceLocation`

### getCompatibility

```java
PackCompatibility getCompatibility()
```

**Returns:** `PackCompatibility`

### getId

```java
String getId()
```

**Returns:** `String`

### getTitle

```java
Component getTitle()
```

**Returns:** `Component`

### getDescription

```java
Component getDescription()
```

**Returns:** `Component`

### getPackSource

```java
PackSource getPackSource()
```

**Returns:** `PackSource`

### getExtendedDescription

```java
default Component getExtendedDescription()
```

**Returns:** `default Component`

### isFixedPosition

```java
boolean isFixedPosition()
```

**Returns:** `boolean`

### isRequired

```java
boolean isRequired()
```

**Returns:** `boolean`

### select

```java
void select()
```

### unselect

```java
void unselect()
```

### moveUp

```java
void moveUp()
```

### moveDown

```java
void moveDown()
```

### isSelected

```java
boolean isSelected()
```

**Returns:** `boolean`

### canSelect

```java
default boolean canSelect()
```

**Returns:** `default boolean`

### canUnselect

```java
default boolean canUnselect()
```

**Returns:** `default boolean`

### canMoveUp

```java
boolean canMoveUp()
```

**Returns:** `boolean`

### canMoveDown

```java
boolean canMoveDown()
```

**Returns:** `boolean`

### EntryBase

```java
public EntryBase(Pack p_99936_)
```

**Parameters:**

- `p_99936_` (`Pack`)

**Returns:** `public`

### getSelfList

```java
protected abstract List<Pack> getSelfList()
```

**Returns:** `protected abstract List<Pack>`

### getOtherList

```java
protected abstract List<Pack> getOtherList()
```

**Returns:** `protected abstract List<Pack>`

### getIconTexture

```java
public ResourceLocation getIconTexture()
```

**Returns:** `ResourceLocation`

### getCompatibility

```java
public PackCompatibility getCompatibility()
```

**Returns:** `PackCompatibility`

### getId

```java
public String getId()
```

**Returns:** `String`

### getTitle

```java
public Component getTitle()
```

**Returns:** `Component`

### getDescription

```java
public Component getDescription()
```

**Returns:** `Component`

### getPackSource

```java
public PackSource getPackSource()
```

**Returns:** `PackSource`

### isFixedPosition

```java
public boolean isFixedPosition()
```

**Returns:** `boolean`

### isRequired

```java
public boolean isRequired()
```

**Returns:** `boolean`

### toggleSelection

```java
protected void toggleSelection()
```

**Returns:** `protected void`

### updateHighContrastOptionInstance

```java
private void updateHighContrastOptionInstance()
```

**Returns:** `private void`

### move

```java
protected void move(int p_99939_)
```

**Parameters:**

- `p_99939_` (`int`)

**Returns:** `protected void`

### canMoveUp

```java
public boolean canMoveUp()
```

**Returns:** `boolean`

### moveUp

```java
public void moveUp()
```

### canMoveDown

```java
public boolean canMoveDown()
```

**Returns:** `boolean`

### moveDown

```java
public void moveDown()
```

### SelectedPackEntry

```java
public SelectedPackEntry(Pack p_99954_)
```

**Parameters:**

- `p_99954_` (`Pack`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSelfList

```java
protected List<Pack> getSelfList()
```

**Returns:** `List<Pack>`

### getOtherList

```java
protected List<Pack> getOtherList()
```

**Returns:** `List<Pack>`

### isSelected

```java
public boolean isSelected()
```

**Returns:** `boolean`

### select

```java
public void select()
```

### unselect

```java
public void unselect()
```

### UnselectedPackEntry

```java
public UnselectedPackEntry(Pack p_99963_)
```

**Parameters:**

- `p_99963_` (`Pack`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSelfList

```java
protected List<Pack> getSelfList()
```

**Returns:** `List<Pack>`

### getOtherList

```java
protected List<Pack> getOtherList()
```

**Returns:** `List<Pack>`

### isSelected

```java
public boolean isSelected()
```

**Returns:** `boolean`

### select

```java
public void select()
```

### unselect

```java
public void unselect()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Entry` | interface |  |
