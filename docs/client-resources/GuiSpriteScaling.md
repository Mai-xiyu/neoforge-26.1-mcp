# GuiSpriteScaling

**Package:** `net.minecraft.client.resources.metadata.gui`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<GuiSpriteScaling.NineSlice>` |  |
| `CODEC` | `MapCodec<GuiSpriteScaling.Stretch>` |  |

## Methods

### type

```java
GuiSpriteScaling.Type type()
```

**Returns:** `GuiSpriteScaling.Type`

### validate

```java
private static DataResult<GuiSpriteScaling.NineSlice> validate(GuiSpriteScaling.NineSlice p_299275_)
```

**Parameters:**

- `p_299275_` (`GuiSpriteScaling.NineSlice`)

**Returns:** `private static DataResult<GuiSpriteScaling.NineSlice>`

### type

```java
public GuiSpriteScaling.Type type()
```

**Returns:** `GuiSpriteScaling.Type`

### Border

```java
public static record Border(int left, int top, int right, int bottom)
```

**Parameters:**

- `left` (`int`)
- `top` (`int`)
- `right` (`int`)
- `bottom` (`int`)

**Returns:** `record`

### unpackValue

```java
private OptionalInt unpackValue()
```

**Returns:** `private OptionalInt`

### type

```java
public GuiSpriteScaling.Type type()
```

**Returns:** `GuiSpriteScaling.Type`

### type

```java
public GuiSpriteScaling.Type type()
```

**Returns:** `GuiSpriteScaling.Type`

### NINE_SLICE

```java
, NINE_SLICE()
```

**Returns:** `,`

### Type

```java
private Type(String p_295906_, MapCodec<? extends GuiSpriteScaling> p_338627_)
```

**Parameters:**

- `p_295906_` (`String`)
- `p_338627_` (`MapCodec<? extends GuiSpriteScaling>`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### codec

```java
public MapCodec<? extends GuiSpriteScaling> codec()
```

**Returns:** `public MapCodec<? extends GuiSpriteScaling>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NineSlice` | record |  |
| `Border` | record |  |
| `Stretch` | record |  |
| `Tile` | record |  |
| `Type` | enum |  |
