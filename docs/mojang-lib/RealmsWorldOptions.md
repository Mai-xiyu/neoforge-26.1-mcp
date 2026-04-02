# RealmsWorldOptions

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Extends:** `ValueObject`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `pvp` | `boolean` |  |
| `spawnAnimals` | `boolean` |  |
| `spawnMonsters` | `boolean` |  |
| `spawnNPCs` | `boolean` |  |
| `spawnProtection` | `int` |  |
| `commandBlocks` | `boolean` |  |
| `forceGameMode` | `boolean` |  |
| `difficulty` | `int` |  |
| `gameMode` | `int` |  |
| `version` | `String` |  |
| `compatibility` | `RealmsServer.Compatibility` |  |
| `templateId` | `long` |  |
| `empty` | `boolean` |  |

## Methods

### RealmsWorldOptions

```java
public RealmsWorldOptions(boolean p_167302_, boolean p_167303_, boolean p_167304_, boolean p_167305_, int p_167306_, boolean p_167307_, int p_167308_, int p_167309_, boolean p_167310_, String p_167311_, String p_307682_, RealmsServer.Compatibility p_307526_)
```

**Parameters:**

- `p_167302_` (`boolean`)
- `p_167303_` (`boolean`)
- `p_167304_` (`boolean`)
- `p_167305_` (`boolean`)
- `p_167306_` (`int`)
- `p_167307_` (`boolean`)
- `p_167308_` (`int`)
- `p_167309_` (`int`)
- `p_167310_` (`boolean`)
- `p_167311_` (`String`)
- `p_307682_` (`String`)
- `p_307526_` (`RealmsServer.Compatibility`)

**Returns:** `public`

### createDefaults

```java
public static RealmsWorldOptions createDefaults()
```

**Returns:** `public static RealmsWorldOptions`

### RealmsWorldOptions

```java
return new RealmsWorldOptions()
```

**Returns:** `return new`

### createEmptyDefaults

```java
public static RealmsWorldOptions createEmptyDefaults()
```

**Returns:** `public static RealmsWorldOptions`

### setEmpty

```java
public void setEmpty(boolean p_87631_)
```

**Parameters:**

- `p_87631_` (`boolean`)

**Returns:** `public void`

### parse

```java
public static RealmsWorldOptions parse(JsonObject p_87629_)
```

**Parameters:**

- `p_87629_` (`JsonObject`)

**Returns:** `public static RealmsWorldOptions`

### getSlotName

```java
public String getSlotName(int p_87627_)
```

**Parameters:**

- `p_87627_` (`int`)

**Returns:** `public String`

### getDefaultSlotName

```java
public String getDefaultSlotName(int p_87634_)
```

**Parameters:**

- `p_87634_` (`int`)

**Returns:** `public String`

### toJson

```java
public String toJson()
```

**Returns:** `public String`

### clone

```java
public RealmsWorldOptions clone()
```

**Returns:** `public RealmsWorldOptions`

### RealmsWorldOptions

```java
return new RealmsWorldOptions()
```

**Returns:** `return new`
