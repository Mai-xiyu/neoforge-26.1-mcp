# RealmsAvailability

**Package:** `com.mojang.realmsclient`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### get

```java
public static CompletableFuture<RealmsAvailability.Result> get()
```

**Returns:** `public static CompletableFuture<RealmsAvailability.Result>`

### shouldRefresh

```java
private static boolean shouldRefresh(CompletableFuture<RealmsAvailability.Result> p_295124_)
```

**Parameters:**

- `p_295124_` (`CompletableFuture<RealmsAvailability.Result>`)

**Returns:** `private static boolean`

### check

```java
private static CompletableFuture<RealmsAvailability.Result> check()
```

**Returns:** `private static CompletableFuture<RealmsAvailability.Result>`

### Result

```java
public static record Result(RealmsAvailability.Type type, RealmsServiceException exception)
```

**Parameters:**

- `type` (`RealmsAvailability.Type`)
- `exception` (`RealmsServiceException`)

**Returns:** `record`

### Result

```java
public Result(RealmsAvailability.Type p_294456_)
```

**Parameters:**

- `p_294456_` (`RealmsAvailability.Type`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### Result

```java
public Result(RealmsServiceException p_294364_)
```

**Parameters:**

- `p_294364_` (`RealmsServiceException`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### createErrorScreen

```java
public Screen createErrorScreen(Screen p_296406_)
```

**Parameters:**

- `p_296406_` (`Screen`)

**Returns:** `Screen`

### RealmsClientOutdatedScreen

```java
> new RealmsClientOutdatedScreen()
```

**Returns:** `> new`

### RealmsParentalConsentScreen

```java
> new RealmsParentalConsentScreen()
```

**Returns:** `> new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Result` | record |  |
| `Type` | enum |  |
