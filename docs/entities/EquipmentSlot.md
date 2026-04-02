# EquipmentSlot

**Package:** `net.minecraft.world.entity`
**Type:** enum
**Implements:** `StringRepresentable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NO_COUNT_LIMIT` | `int` |  |
| `CODEC` | `StringRepresentable.EnumCodec<EquipmentSlot>` |  |

## Methods

### BODY

```java
, BODY()
```

**Returns:** `,`

### EquipmentSlot

```java
private EquipmentSlot(EquipmentSlot.Type p_348560_, int p_348539_, int p_348468_, int p_348612_, String p_348519_)
```

**Parameters:**

- `p_348560_` (`EquipmentSlot.Type`)
- `p_348539_` (`int`)
- `p_348468_` (`int`)
- `p_348612_` (`int`)
- `p_348519_` (`String`)

**Returns:** `private`

### EquipmentSlot

```java
private EquipmentSlot(EquipmentSlot.Type p_20739_, int p_20740_, int p_20741_, String p_20742_)
```

**Parameters:**

- `p_20739_` (`EquipmentSlot.Type`)
- `p_20740_` (`int`)
- `p_20741_` (`int`)
- `p_20742_` (`String`)

**Returns:** `private`

### this

```java
 this()
```

**Returns:** ``

### getType

```java
public EquipmentSlot.Type getType()
```

**Returns:** `public EquipmentSlot.Type`

### getIndex

```java
public int getIndex()
```

**Returns:** `public int`

### getIndex

```java
public int getIndex(int p_147069_)
```

**Parameters:**

- `p_147069_` (`int`)

**Returns:** `public int`

### limit

```java
public ItemStack limit(ItemStack p_348466_)
```

**Parameters:**

- `p_348466_` (`ItemStack`)

**Returns:** `public ItemStack`

### getFilterFlag

```java
public int getFilterFlag()
```

**Returns:** `public int`

### getName

```java
public String getName()
```

**Returns:** `public String`

### isArmor

```java
public boolean isArmor()
```

**Returns:** `public boolean`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### byName

```java
public static EquipmentSlot byName(String p_20748_)
```

**Parameters:**

- `p_20748_` (`String`)

**Returns:** `public static EquipmentSlot`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid slot '" + p_20748_ + "'")
```

**Parameters:**

- `"'"` (`"Invalid slot '" + p_20748_ +`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
