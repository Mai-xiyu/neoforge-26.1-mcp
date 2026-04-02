# RealmsNotification

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsNotification

```java
 RealmsNotification(UUID p_275316_, boolean p_275303_, boolean p_275497_, String p_275401_)
```

**Parameters:**

- `p_275316_` (`UUID`)
- `p_275303_` (`boolean`)
- `p_275497_` (`boolean`)
- `p_275401_` (`String`)

**Returns:** ``

### seen

```java
public boolean seen()
```

**Returns:** `public boolean`

### dismissable

```java
public boolean dismissable()
```

**Returns:** `public boolean`

### uuid

```java
public UUID uuid()
```

**Returns:** `public UUID`

### parseList

```java
public static List<RealmsNotification> parseList(String p_275464_)
```

**Parameters:**

- `p_275464_` (`String`)

**Returns:** `public static List<RealmsNotification>`

### parse

```java
private static RealmsNotification parse(JsonObject p_275549_)
```

**Parameters:**

- `p_275549_` (`JsonObject`)

**Returns:** `private static RealmsNotification`

### IllegalStateException

```java
throw new IllegalStateException("Missing required property notificationUuid")
```

**Parameters:**

- `notificationUuid"` (`"Missing required property`)

**Returns:** `throw new`

### InfoPopup

```java
private InfoPopup(RealmsNotification p_304992_, RealmsText p_304968_, RealmsText p_304788_, ResourceLocation p_304749_, RealmsNotification.UrlButton p_304471_)
```

**Parameters:**

- `p_304992_` (`RealmsNotification`)
- `p_304968_` (`RealmsText`)
- `p_304788_` (`RealmsText`)
- `p_304749_` (`ResourceLocation`)
- `p_304471_` (`RealmsNotification.UrlButton`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### parse

```java
public static RealmsNotification.InfoPopup parse(RealmsNotification p_304647_, JsonObject p_304686_)
```

**Parameters:**

- `p_304647_` (`RealmsNotification`)
- `p_304686_` (`JsonObject`)

**Returns:** `public static RealmsNotification.InfoPopup`

### buildScreen

```java
public PopupScreen buildScreen(Screen p_304415_, Consumer<UUID> p_304962_)
```

**Parameters:**

- `p_304415_` (`Screen`)
- `p_304962_` (`Consumer<UUID>`)

**Returns:** `PopupScreen`

### UrlButton

```java
static record UrlButton(String url, RealmsText urlText)
```

**Parameters:**

- `url` (`String`)
- `urlText` (`RealmsText`)

**Returns:** `record`

### parse

```java
public static RealmsNotification.UrlButton parse(JsonObject p_304518_)
```

**Parameters:**

- `p_304518_` (`JsonObject`)

**Returns:** `public static RealmsNotification.UrlButton`

### VisitUrl

```java
private VisitUrl(RealmsNotification p_275564_, String p_275312_, RealmsText p_275433_, RealmsText p_275541_)
```

**Parameters:**

- `p_275564_` (`RealmsNotification`)
- `p_275312_` (`String`)
- `p_275433_` (`RealmsText`)
- `p_275541_` (`RealmsText`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### parse

```java
public static RealmsNotification.VisitUrl parse(RealmsNotification p_275651_, JsonObject p_275278_)
```

**Parameters:**

- `p_275651_` (`RealmsNotification`)
- `p_275278_` (`JsonObject`)

**Returns:** `public static RealmsNotification.VisitUrl`

### getMessage

```java
public Component getMessage()
```

**Returns:** `public Component`

### buildOpenLinkButton

```java
public Button buildOpenLinkButton(Screen p_275412_)
```

**Parameters:**

- `p_275412_` (`Screen`)

**Returns:** `public Button`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `InfoPopup` | class |  |
| `VisitUrl` | class |  |
