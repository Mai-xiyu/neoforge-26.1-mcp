# ProfileKeyPairManager

**Package:** `net.minecraft.client.multiplayer`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### prepareKeyPair

```java
public CompletableFuture<Optional<ProfileKeyPair>> prepareKeyPair()
```

**Returns:** `CompletableFuture<Optional<ProfileKeyPair>>`

### shouldRefreshKeyPair

```java
public boolean shouldRefreshKeyPair()
```

**Returns:** `boolean`

### create

```java
static ProfileKeyPairManager create(UserApiService p_253925_, User p_254501_, Path p_254206_)
```

**Parameters:**

- `p_253925_` (`UserApiService`)
- `p_254501_` (`User`)
- `p_254206_` (`Path`)

**Returns:** `static ProfileKeyPairManager`

### prepareKeyPair

```java
CompletableFuture<Optional<ProfileKeyPair>> prepareKeyPair()
```

**Returns:** `CompletableFuture<Optional<ProfileKeyPair>>`

### shouldRefreshKeyPair

```java
boolean shouldRefreshKeyPair()
```

**Returns:** `boolean`
