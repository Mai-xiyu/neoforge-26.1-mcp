# WorldTemplate

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Extends:** `ValueObject`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `id` | `String` |  |
| `name` | `String` |  |
| `version` | `String` |  |
| `author` | `String` |  |
| `link` | `String` |  |
| `trailer` | `String` |  |
| `recommendedPlayers` | `String` |  |
| `type` | `WorldTemplate.WorldTemplateType` |  |

## Methods

### parse

```java
public static WorldTemplate parse(JsonObject p_87739_)
```

**Parameters:**

- `p_87739_` (`JsonObject`)

**Returns:** `public static WorldTemplate`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `WorldTemplateType` | enum |  |
