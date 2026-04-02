# GameType

**Package:** `net.minecraft.world.level`
**Type:** enum
**Implements:** `StringRepresentable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_MODE` | `GameType` |  |
| `CODEC` | `StringRepresentable.EnumCodec<GameType>` |  |

## Methods

### SPECTATOR

```java
, SPECTATOR()
```

**Returns:** `,`

### GameType

```java
private GameType(int p_46390_, String p_46391_)
```

**Parameters:**

- `p_46390_` (`int`)
- `p_46391_` (`String`)

**Returns:** `private`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### getLongDisplayName

```java
public Component getLongDisplayName()
```

**Returns:** `public Component`

### getShortDisplayName

```java
public Component getShortDisplayName()
```

**Returns:** `public Component`

### updatePlayerAbilities

```java
public void updatePlayerAbilities(Abilities p_46399_)
```

**Parameters:**

- `p_46399_` (`Abilities`)

**Returns:** `public void`

### isBlockPlacingRestricted

```java
public boolean isBlockPlacingRestricted()
```

**Returns:** `public boolean`

### isCreative

```java
public boolean isCreative()
```

**Returns:** `public boolean`

### isSurvival

```java
public boolean isSurvival()
```

**Returns:** `public boolean`

### byId

```java
public static GameType byId(int p_46394_)
```

**Parameters:**

- `p_46394_` (`int`)

**Returns:** `public static GameType`

### byName

```java
public static GameType byName(String p_46401_)
```

**Parameters:**

- `p_46401_` (`String`)

**Returns:** `public static GameType`

### byName

```java
return byName()
```

**Returns:** `return`

### byName

```java
public static GameType byName(String p_46403_, GameType p_46404_)
```

**Parameters:**

- `p_46403_` (`String`)
- `p_46404_` (`GameType`)

**Returns:** `GameType`

### getNullableId

```java
public static int getNullableId(GameType p_151496_)
```

**Parameters:**

- `p_151496_` (`GameType`)

**Returns:** `public static int`

### byNullableId

```java
public static GameType byNullableId(int p_151498_)
```

**Parameters:**

- `p_151498_` (`int`)

**Returns:** `GameType`
