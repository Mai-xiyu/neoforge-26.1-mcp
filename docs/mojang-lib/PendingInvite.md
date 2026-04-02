# PendingInvite

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Extends:** `ValueObject`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `invitationId` | `String` |  |
| `realmName` | `String` |  |
| `realmOwnerName` | `String` |  |
| `realmOwnerUuid` | `UUID` |  |
| `date` | `Date` |  |

## Methods

### parse

```java
public static PendingInvite parse(JsonObject p_87431_)
```

**Parameters:**

- `p_87431_` (`JsonObject`)

**Returns:** `public static PendingInvite`
