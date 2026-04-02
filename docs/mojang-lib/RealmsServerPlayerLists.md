# RealmsServerPlayerLists

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Extends:** `ValueObject`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `servers` | `Map<Long, List<ProfileResult>>` |  |

## Methods

### parse

```java
public static RealmsServerPlayerLists parse(String p_87597_)
```

**Parameters:**

- `p_87597_` (`String`)

**Returns:** `public static RealmsServerPlayerLists`

### parsePlayers

```java
private static List<ProfileResult> parsePlayers(JsonArray p_350938_)
```

**Parameters:**

- `p_350938_` (`JsonArray`)

**Returns:** `private static List<ProfileResult>`

### getProfileResultsFor

```java
public List<ProfileResult> getProfileResultsFor(long p_350315_)
```

**Parameters:**

- `p_350315_` (`long`)

**Returns:** `public List<ProfileResult>`
