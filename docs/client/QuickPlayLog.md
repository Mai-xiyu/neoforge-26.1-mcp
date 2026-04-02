# QuickPlayLog

**Package:** `net.minecraft.client.quickplay`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<QuickPlayLog.QuickPlayEntry>` |  |
| `MAP_CODEC` | `MapCodec<QuickPlayLog.QuickPlayWorld>` |  |

## Methods

### log

```java
public void log(Minecraft p_279484_)
```

**Parameters:**

- `p_279484_` (`Minecraft`)

### setWorldData

```java
public void setWorldData(QuickPlayLog.Type p_279348_, String p_279305_, String p_279177_)
```

**Parameters:**

- `p_279348_` (`QuickPlayLog.Type`)
- `p_279305_` (`String`)
- `p_279177_` (`String`)

### QuickPlayLog

```java
 QuickPlayLog(String p_279463_)
```

**Parameters:**

- `p_279463_` (`String`)

**Returns:** ``

### of

```java
public static QuickPlayLog of(String p_279275_)
```

**Parameters:**

- `p_279275_` (`String`)

**Returns:** `public static QuickPlayLog`

### setWorldData

```java
public void setWorldData(QuickPlayLog.Type p_279380_, String p_279427_, String p_279470_)
```

**Parameters:**

- `p_279380_` (`QuickPlayLog.Type`)
- `p_279427_` (`String`)
- `p_279470_` (`String`)

**Returns:** `public void`

### log

```java
public void log(Minecraft p_279258_)
```

**Parameters:**

- `p_279258_` (`Minecraft`)

**Returns:** `public void`

### QuickPlayEntry

```java
static record QuickPlayEntry(QuickPlayLog.QuickPlayWorld quickPlayWorld, Instant lastPlayedTime, GameType gamemode)
```

**Parameters:**

- `quickPlayWorld` (`QuickPlayLog.QuickPlayWorld`)
- `lastPlayedTime` (`Instant`)
- `gamemode` (`GameType`)

**Returns:** `record`

### QuickPlayWorld

```java
static record QuickPlayWorld(QuickPlayLog.Type type, String id, String name)
```

**Parameters:**

- `type` (`QuickPlayLog.Type`)
- `id` (`String`)
- `name` (`String`)

**Returns:** `record`

### REALMS

```java
, REALMS()
```

**Returns:** `,`

### Type

```java
private Type(String p_279349_)
```

**Parameters:**

- `p_279349_` (`String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
