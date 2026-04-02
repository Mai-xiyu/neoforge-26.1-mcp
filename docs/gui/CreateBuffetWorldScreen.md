# CreateBuffetWorldScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### CreateBuffetWorldScreen

```java
public CreateBuffetWorldScreen(Screen p_232732_, WorldCreationContext p_232733_, Consumer<Holder<Biome>> p_232734_)
```

**Parameters:**

- `p_232732_` (`Screen`)
- `p_232733_` (`WorldCreationContext`)
- `p_232734_` (`Consumer<Holder<Biome>>`)

**Returns:** `public`

### onClose

```java
public void onClose()
```

### init

```java
protected void init()
```

### repositionElements

```java
protected void repositionElements()
```

### updateButtonValidity

```java
void updateButtonValidity()
```

### BiomeList

```java
 BiomeList()
```

**Returns:** ``

### super

```java
 super(CreateBuffetWorldScreen.this.height - 77)
```

**Parameters:**

- `77` (`CreateBuffetWorldScreen.this.height -`)

**Returns:** ``

### setSelected

```java
public void setSelected(CreateBuffetWorldScreen.BiomeList.Entry p_95785_)
```

**Parameters:**

- `p_95785_` (`CreateBuffetWorldScreen.BiomeList.Entry`)

**Returns:** `public void`

### Entry

```java
public Entry(Holder.Reference<Biome> p_205392_)
```

**Parameters:**

- `p_205392_` (`Holder.Reference<Biome>`)

**Returns:** `public`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### render

```java
public void render(GuiGraphics p_281315_, int p_282451_, int p_283356_, int p_283563_, int p_282677_, int p_283473_, int p_283681_, int p_281493_, boolean p_281302_, float p_283122_)
```

**Parameters:**

- `p_281315_` (`GuiGraphics`)
- `p_282451_` (`int`)
- `p_283356_` (`int`)
- `p_283563_` (`int`)
- `p_282677_` (`int`)
- `p_283473_` (`int`)
- `p_283681_` (`int`)
- `p_281493_` (`int`)
- `p_281302_` (`boolean`)
- `p_283122_` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_95798_, double p_95799_, int p_95800_)
```

**Parameters:**

- `p_95798_` (`double`)
- `p_95799_` (`double`)
- `p_95800_` (`int`)

**Returns:** `boolean`
