# BanNoticeScreens

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NAME_BAN_TITLE` | `Component` |  |

## Methods

### create

```java
public static ConfirmLinkScreen create(BooleanConsumer p_299953_, BanDetails p_299893_)
```

**Parameters:**

- `p_299953_` (`BooleanConsumer`)
- `p_299893_` (`BanDetails`)

**Returns:** `public static ConfirmLinkScreen`

### createSkinBan

```java
public static ConfirmLinkScreen createSkinBan(Runnable p_300031_)
```

**Parameters:**

- `p_300031_` (`Runnable`)

**Returns:** `public static ConfirmLinkScreen`

### ConfirmLinkScreen

```java
return new ConfirmLinkScreen(p_351642_ -> { if (p_351642_)
```

**Parameters:**

- `(p_351642_` (`p_351642_ -> { if`)

**Returns:** `return new`

### createNameBan

```java
public static ConfirmLinkScreen createNameBan(String p_299968_, Runnable p_299926_)
```

**Parameters:**

- `p_299968_` (`String`)
- `p_299926_` (`Runnable`)

**Returns:** `public static ConfirmLinkScreen`

### ConfirmLinkScreen

```java
return new ConfirmLinkScreen(p_351639_ -> { if (p_351639_)
```

**Parameters:**

- `(p_351639_` (`p_351639_ -> { if`)

**Returns:** `return new`

### getBannedTitle

```java
private static Component getBannedTitle(BanDetails p_299957_)
```

**Parameters:**

- `p_299957_` (`BanDetails`)

**Returns:** `private static Component`

### getBannedScreenText

```java
private static Component getBannedScreenText(BanDetails p_299924_)
```

**Parameters:**

- `p_299924_` (`BanDetails`)

**Returns:** `private static Component`

### getBanReasonText

```java
private static Component getBanReasonText(BanDetails p_299989_)
```

**Parameters:**

- `p_299989_` (`BanDetails`)

**Returns:** `private static Component`

### getBanStatusText

```java
private static Component getBanStatusText(BanDetails p_299862_)
```

**Parameters:**

- `p_299862_` (`BanDetails`)

**Returns:** `private static Component`

### getBanDurationText

```java
private static Component getBanDurationText(BanDetails p_299833_)
```

**Parameters:**

- `p_299833_` (`BanDetails`)

**Returns:** `private static Component`

### isTemporaryBan

```java
private static boolean isTemporaryBan(BanDetails p_299982_)
```

**Parameters:**

- `p_299982_` (`BanDetails`)

**Returns:** `private static boolean`
